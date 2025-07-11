import { EmailService } from './services/EmailService';

const emailService = new EmailService();

emailService.sendEmail({
  to: 'user@example.com',
  subject: 'Exam Assignment',
  body: 'Hello!',
  messageId: 'exam-msg-1'
}).then(console.log).catch(console.error);
