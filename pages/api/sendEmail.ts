import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'; // Import types

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, orderDetails, orderNumber, reservationRequest, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // Use the user's email from the form
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `New Contact Form Submission from ${name} - ${subject}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Order Details:</strong> ${orderDetails}</p>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Reservation Request:</strong> ${reservationRequest}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
