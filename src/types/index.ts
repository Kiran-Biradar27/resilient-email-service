export interface EmailPayload {
  to: string;
  subject: string;
  body: string;
  messageId: string; // For idempotency
}

export interface EmailStatus {
  success: boolean;
  provider: string;
  attempts: number;
  error?: string;
}
