import { ProviderA } from './providers/ProviderA';
import { ProviderB } from './providers/ProviderB';
import { EmailPayload, EmailStatus } from '../types';
import { RateLimiter } from '../utils/RateLimiter';

export class EmailService {
  private rateLimiter = new RateLimiter(5, 60000); // 5 emails/min
  private sentMessages = new Set<string>(); // Idempotency
  private providers = [ProviderA, ProviderB];

  public async sendEmail(payload: EmailPayload): Promise<EmailStatus> {
    if (this.sentMessages.has(payload.messageId)) {
      return { success: true, provider: 'N/A', attempts: 0 };
    }

    if (!this.rateLimiter.allow()) {
      return { success: false, provider: 'N/A', attempts: 0, error: 'Rate limit exceeded' };
    }

    for (let i = 0; i < this.providers.length; i++) {
      const provider = this.providers[i];
      try {
        await this.retryWithBackoff(() => provider.send(payload), 3);
        this.sentMessages.add(payload.messageId);
        return { success: true, provider: `Provider${i === 0 ? 'A' : 'B'}`, attempts: 3 - 1 };
      } catch (err) {
        // Try next provider
        continue;
      }
    }

    return { success: false, provider: 'All', attempts: 3, error: 'All providers failed' };
  }

  private async retryWithBackoff(fn: () => Promise<void>, retries: number): Promise<void> {
    let attempt = 0;
    while (attempt < retries) {
      try {
        return await fn();
      } catch (err) {
        attempt++;
        if (attempt === retries) throw err;
        await new Promise(res => setTimeout(res, 2 ** attempt * 100));
      }
    }
  }
}
