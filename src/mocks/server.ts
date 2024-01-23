import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Create a worker instance and apply the handlers
export const server = setupServer(...handlers);