import React from 'react';

type EmailTemplateProps = {
  company: string;
  fullname: string;
  email: string;
  vat: string;
  address: string;
  city: string;
  postalcode: string;
  country: string;
  projectinfo: string;
  optionsSelected: string;
};

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
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
}) => {
  return (
    <div style={{ fontFamily: 'Lato, regular', color: '#333' }}>
      <h1>New Order Request - DrgMastering</h1>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Full Name:</strong> {fullname}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>VAT ID:</strong> {vat}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Postal Code:</strong> {postalcode}</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Project Information:</strong> {projectinfo}</p>
      <p><strong>Services Selected:</strong> {optionsSelected}</p>
    </div>
  );
};