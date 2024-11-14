// sendEmail.test.js
import sendEmail from './sendEmail';

jest.mock('fetch', () => jest.fn());

describe('sendEmail', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should send email successfully', async () => {
    const mockReq = {
      method: 'POST',
      body: JSON.stringify({
        company: 'Test Company',
        fullname: 'John Doe',
        email: 'john@example.com',
        vat: '123456789',
        address: '123 Main St',
        city: 'Anytown',
        postalcode: '12345',
        country: 'USA',
        projectinfo: 'Test project',
        options: {
          digitalMastering: true,
          stemMastering: false,
          djMix: true,
          mixdown: false,
          vinylMastering: true,
          mixdownMastering: false,
          audioRestoration: false,
        },
      }),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue({ message: 'Email sent successfully' }),
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Email sent successfully' }),
    });

    await sendEmail(mockReq, mockRes);

    expect(global.fetch).toHaveBeenCalledWith('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: mockReq.body,
    });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Email sent successfully',
      data: { message: 'Email sent successfully' },
    });
  });

  test('should handle error when sending email', async () => {
    const mockReq = {
      method: 'POST',
      body: JSON.stringify({
        company: 'Test Company',
        fullname: 'John Doe',
        email: 'john@example.com',
        vat: '123456789',
        address: '123 Main St',
        city: 'Anytown',
        postalcode: '12345',
        country: 'USA',
        projectinfo: 'Test project',
        options: {
          digitalMastering: true,
          stemMastering: false,
          djMix: true,
          mixdown: false,
          vinylMastering: true,
          mixdownMastering: false,
          audioRestoration: false,
        },
      }),
    };

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue({ message: 'Error sending email' }),
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ message: 'Error sending email' }),
    });

    await sendEmail(mockReq, mockRes);

    expect(global.fetch).toHaveBeenCalledWith('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: mockReq.body,
    });
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Error sending email',
      error: { message: 'Error sending email' },
    });
  });
});