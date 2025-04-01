import axios from 'axios';
import { NextResponse } from 'next/server';

/**
 * Sends a welcome email to a subscriber via the Brevo API.
 *
 * @param {string} email The subscriber's email address.
 * @param {string} apiKey The Brevo API key.
 * @param {number} templateId The ID of the email template to use.
 *
 * @returns {Promise<boolean>} true if the email was sent successfully, false otherwise.
 */
async function sendWelcomeEmail(
  email: string,
  apiKey: string,
  templateId: number,
) {
  const url = `https://api.brevo.com/v3/smtp/email`;
  const data = {
    to: [{ email }],
    templateId,
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status === 201) {
      return true;
    } else {
      console.error(
        'Unexpected response status from Brevo API:',
        response.status,
      );
      return false;
    }
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return false;
  }
}

/**
 * Handles the subscription of a new email to the newsletter.
 *
 * This function attempts to send a welcome email to the provided email address
 * using the Brevo API. It checks for the necessary API key and template ID from
 * the environment variables and logs any errors encountered during the process.
 * Depending on the outcome of the email sending operation, it returns an appropriate
 * JSON response.
 *
 * @param {string} email - The email address of the new subscriber.
 * @returns {Promise<NextResponse>} A promise that resolves to a JSON response
 * indicating the result of the subscription process.
 */

export const newSubscriberHandler = async (email: string) => {
  try {
    const API_KEY = process.env.BREVO_API_KEY;
    const TEMPLATE_ID = parseInt(
      process.env.BREVO_WELCOME_EMAIL_TEMPLATE_ID || '0',
      10,
    );

    if (!API_KEY) {
      console.error('BREVO_API_KEY is not set');
      return NextResponse.json({
        error: 'Server configuration error',
        status: 500,
      });
    }

    if (TEMPLATE_ID === 0) {
      console.warn(
        'BREVO_WELCOME_EMAIL_TEMPLATE_ID is not set. Skipping welcome email.',
      );
      return NextResponse.json({
        error: 'Subscribed (Welcome email skipped - template ID not set)',
        status: 200,
      });
    }
    const emailSent = await sendWelcomeEmail(email, API_KEY, TEMPLATE_ID);

    if (emailSent) {
      console.log('Welcome email sent successfully!');
      return NextResponse.json({ error: 'Welcome email sent!', status: 200 });
    } else {
      console.error('Failed to send welcome email');
      return NextResponse.json({
        error: 'Subscribed (Welcome email failed to send)',
        status: 500,
      });
    }
  } catch (error) {
    console.error('Error in new subscriber handler:', error);
    return NextResponse.json({
      error: 'Subscribed (Error sending welcome email)',
      status: 500,
    });
  }
};

export default newSubscriberHandler;
