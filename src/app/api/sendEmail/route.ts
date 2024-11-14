import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/app/components/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Resend API key is missing' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['company', 'fullname', 'email', 'address', 'city', 'postalcode', 'country'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const { company, fullname, email, vat = '', address, city, postalcode, country, projectinfo = '', ...options } = body;

    const optionsSelected = Object.entries(options)
      .filter(([, selected]) => selected)
      .map(([option]) => option.replace(/([A-Z])/g, ' $1').trim())
      .join(", ") || "No options selected";

    try {
      const { data, error } = await resend.emails.send({
        from: 'DRG Mastering <support@yourdomain.com>',
        to: ['moldovanste@gmail.com'],
        subject: 'New Order - DRG Mastering',
        react: EmailTemplate({
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
        }),
      });

      if (error) {
        console.error("Resend API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, data });
    } catch (resendError) {
      console.error("Resend API Error:", resendError);
      return NextResponse.json(
        { error: 'Failed to send email via Resend' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}