import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { newSubscriberHandler } from './newSubscriber';

const EmailSchema = z
  .string()
  .email({ message: 'Please enter a valid email address' });

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed', status: 405 });
  }

  try {
    const { email } = await req.json();
    const emailValidation = EmailSchema.safeParse(email);
    if (!emailValidation.success) {
      return NextResponse.json({
        error: 'Please enter a valid email address',
        status: 400,
      });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const LIST_ID = parseInt(process.env.BREVO_LIST_ID || '', 10) || 0; //  Get your List ID from Brevo!

    if (!BREVO_API_KEY || !LIST_ID) {
      console.error('Brevo API Key or List ID not configured properly');
      return NextResponse.json({
        error: 'Server configuration error',
        status: 500,
      });
    }

    const url = 'https://api.brevo.com/v3/contacts';
    const data = {
      email: emailValidation.data, // Use the validated email
      listIds: [LIST_ID],
      updateEnabled: true, // Update the contact if it already exists
    };

    const options = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      method: 'GET',
    };

    const response = await axios.post(url, data, options);

    if (response.status === 201) {
      await newSubscriberHandler(email);
      return NextResponse.json({
        error: 'Successfully subscribed to the newsletter!',
        status: 201,
      });
    } else if (response.status === 204) {
      return NextResponse.json({
        error: "You're already subscribed! Thanks for your enthusiasm.",
        status: 200,
      });
    } else {
      console.error('Brevo API Error:', response.status, response.data);
      return NextResponse.json({
        error: 'An error occurred during subscription.',
        status: response.status || 500,
      });
    }
  } catch (error) {
    console.error('Error subscribing to Brevo:', error);
    return NextResponse.json({
      error: 'An error occurred during subscription.',
      status: 500,
    });
  }
}
