import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

/**
 * Handles POST requests to send an email using the provided request data.
 *
 * This function extracts the `emailAddress`, `name`, and `message` from the request body,
 * creates a mail transport using Nodemailer configured with Gmail service, and sends an
 * email with the provided details. The email is sent from the address specified in
 * the environment variable `MY_EMAIL`.
 *
 * If the email is sent successfully, a JSON response with a success message and status
 * code 200 is returned. If there is an error during the email sending process, a JSON
 * response with the error message and status code 500 is returned.
 *
 * @param request - The incoming HTTP request object containing the email details in JSON format.
 * @returns A JSON response indicating the success or failure of the email sending operation.
 */

export async function POST(request: NextRequest) {
  const { emailAddress, fullName, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: emailAddress,
    cc: process.env.MY_EMAIL,
    subject: `Thanks for contacting with me, ${fullName}`,
    text: message,
    html: `<h3>Hello ${fullName}, your message has been successfully received.</h3>
        <p>Below you will find a copy of your email:</p>
        <p><strong>Name: </strong>${fullName}</p>
        <p><strong>Email: </strong>${emailAddress}</p>
        <p><strong>Message: </strong>${message}</p>
        <p style="color:red;">Please do not reply to this email!</p>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: Error | null) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent', status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500 });
  }
}
