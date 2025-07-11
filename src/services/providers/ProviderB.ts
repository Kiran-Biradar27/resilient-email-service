import { EmailPayload } from '../../types';

export const ProviderB = {
  send: async (payload: EmailPayload): Promise<void> => {
    if (Math.random() < 0.5) throw new Error('ProviderB failed');
  }
};
