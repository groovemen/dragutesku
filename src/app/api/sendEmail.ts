import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/app/components/emailTemplate';

// Initialize Resend with API Key
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { company, fullname, email, vat, address, city, postalcode, country, projectinfo, options } = req.body;
  const optionsSelected = Object.entries(options)
    .filter(([, selected]) => selected)
    .map(([option]) => option.replace(/([A-Z])/g, ' $1').trim())
    .join(", ");
  
  // Define the email template content
  const emailContent = EmailTemplate({
    company,
    fullname,
    email,
    vat,
    address,
    city,
    postalcode,
    country,
    projectinfo,
    optionsSelected,
  });

  try {
    // Send the email using Resend's SDK
    const { data, error } = await resend.emails.send({
      from: 'DRG Mastering <onboarding@resend.dev>',
      to: ['moldovanste@gmail.com'],
      subject: 'New Order - DRG Mastering',
      react: emailContent, // Use the React component for email template
    });

    // Handle errors from Resend SDK
    if (error) {
      console.error("Error from Resend:", error);
      return res.status(500).json({ error });
    }

    // Respond with success if email sent successfully
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}