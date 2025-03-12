import { type NextRequest, NextResponse } from "next/server";
import nodemailer, { SentMessageInfo } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { emailAddress, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: emailAddress,
    cc: process.env.MY_EMAIL,
    subject: `Thanks for contacting with me, ${name}`,
    text: message,
    html: `<h3>Hello ${name}, your message has been successfully received.</h3>
        <p>Below you will find a copy of your email:</p>
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Email: </strong>${emailAddress}</p>
        <p><strong>Message: </strong>${message}</p>
        <p style="color:red;">Please do not reply to this email!</p>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      transport.sendMail(
        mailOptions,
        function (err: Error | null, info: SentMessageInfo) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        },
      );
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent", status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500 });
  }
}
