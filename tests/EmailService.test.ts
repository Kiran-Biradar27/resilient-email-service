import { EmailService } from '../src/services/EmailService';
import { EmailPayload } from '../src/types';

const service = new EmailService();

const email: EmailPayload = {
  to: 'user@example.com',
  subject: 'Hello',
  body: 'This is a test email',
  messageId: 'msg-001'
};

test('should send email successfully', async () => {
  const result = await service.sendEmail(email);
  expect(result.success).toBe(true);
});
