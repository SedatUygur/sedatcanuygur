import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/ContactForm';
import { processContactForm } from '@/lib/SendEmail';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/*jest.mock("@/lib/SendEmail", () => ({
  sendEmail: jest.fn(),
}));*/
jest.mock('@/lib/SendEmail');

describe('processContactForm', () => {
  it('submits the form and sends an email', async () => {
    const { getByText, getByLabelText } = render(<ContactForm />);
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const messageInput = getByLabelText('Message');
    const submitButton = getByText('Send');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Hello, this is a test message.' },
    });

    server.use(
      http.post('/api/email', ({ request }) => {
        const newEmail = request.json();
        return HttpResponse.json(newEmail, { status: 200 });
      }),
    );

    fireEvent.click(submitButton);

    await waitFor(() => expect(processContactForm).toHaveBeenCalledTimes(1));

    expect(processContactForm).toHaveBeenCalledWith({
      fullName: 'John Doe',
      emailAddress: 'john.doe@example.com',
      message: 'Hello, this is a test message.',
    });
  });

  it('handles email sending failure', async () => {
    const { getByText, getByLabelText } = render(<ContactForm />);
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const messageInput = getByLabelText('Message');
    const submitButton = getByText('Send');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Hello, this is a test message.' },
    });

    server.use(
      http.post('/api/email', ({ request }) => {
        const newEmail = request.json();
        return HttpResponse.json(newEmail, { status: 500 });
      }),
    );

    fireEvent.click(submitButton);

    await waitFor(() => expect(processContactForm).toHaveBeenCalledTimes(1));

    expect(processContactForm).toHaveBeenCalledWith({
      fullName: 'John Doe',
      emailAddress: 'john.doe@example.com',
      message: 'Hello, this is a test message.',
    });
  });
});
