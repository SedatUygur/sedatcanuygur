import { sendEmail } from '@/lib/SendEmail';
import { setupServer } from 'msw/node';

jest.mock('@/app/api/db/emails', () => ({
  insertEmail: jest.fn(),
}));

jest.mock('@/lib/SendEmail', () => ({
  sendEmail: jest.fn(),
}));

jest.mock('@/db', () => ({
  db: {
    insert: jest.fn().mockReturnValue({
      values: jest.fn().mockReturnValue({
        data: {
          id: 'testemailsuccess',
        },
        error: null,
      }),
    }),
  },
}));

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('sendEmail', () => {
  describe('when the email fails to send', () => {
    it('returns a object with an error', async () => {
      (sendEmail as jest.Mock).mockReturnValueOnce({
        error: {
          message: 'Test email failed to send',
          name: 'not_found',
        },
      });

      const response = await sendEmail({
        fullName: 'Test Name',
        emailAddress: 'test-email@gmail.com',
        message: 'Test Message',
      });

      expect(response).toMatchObject({
        error: {
          message: 'Test email failed to send',
          name: 'not_found',
        },
      });
    });
  });

  describe('when the email sends', () => {
    it('returns an empty object', async () => {
      (sendEmail as jest.Mock).mockReturnValueOnce({});

      const response = await sendEmail({
        fullName: 'Test Name',
        emailAddress: 'test-email@gmail.com',
        message: 'Test Message',
      });

      expect(response).toEqual({});
    });
  });
});
