import { EmailPayload } from '../../types';

export const ProviderA = {
  send: async (payload: EmailPayload): Promise<void> => {
    if (Math.random() < 0.7) throw new Error('ProviderA failed');
  }
};
