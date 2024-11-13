import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Input,
  Typography,
  Textarea,
  Radio,
} from "@material-tailwind/react";

const Order = () => {
  const [formData, setFormData] = useState({
    company: '',
    fullname: '',
    email: '',
    vat: '',
    address: '',
    city: '',
    postalcode: '',
    country: '',
    projectinfo: '',
    options: {
      digitalMastering: false,
      stemMastering: false,
      djMix: false,
      mixdown: false,
      vinylMastering: false,
      mixdownMastering: false,
      audioRestoration: false,
    },
  });

  const handleChange = (e: { target: { id: any; value: any; type: any; checked: any; }; }) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        options: { ...prev.options, [id]: checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    console.log(JSON.stringify(formData, null, 2));
  
    const flattenedFormData = {
      ...formData,
      ...formData.options
    };
    delete flattenedFormData.options;
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flattenedFormData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        console.error('Error sending email:', result.error);
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };
 

  return (
    <div id="order" className="relative bg-[url('/vinyl.jpg')] bg-center bg-cover px-8 md:px-0">
      <div className="container mx-auto py-12">
        <form onSubmit={handleSubmit}>
          <h2 className="uppercase flex text-3xl md:text-4xl text-white font-bold items-center mb-2">
            <Image src="/sound-vector.svg" className="w-16 mr-4" width={100} height={100} alt="soundWave " />
            Order
          </h2>
          <p className="text-lg opacity-80">
            To request a quote or discuss a project, please fill out the form
            below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid gap-4 mt-12">
              <div className="flex gap-4">
                <div className="w-full space-y-1">
                  <Typography
                    as="label"
                    htmlFor="company"
                    type="small"
                    className="text-white/70"
                  >
                    Company/Label/Independent Artist*
                  </Typography>
                  <Input 
                    color="secondary" 
                    size="lg"
                  >
                    <Input.Field
                      id="company"
                      type="text"
                      placeholder="Mix Master SRL"
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                      value={formData.company} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
                <div className="w-full space-y-1">
                  <Typography
                    as="label"
                    htmlFor="fullname"
                    type="small"
                    className="text-white/70"
                  >
                    Full Name*
                  </Typography>
                  <Input color="secondary" size="lg">
                    <Input.Field
                      id="fullname"
                      type="text"
                      placeholder="John Doe"
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                      value={formData.fullname} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full space-y-1">
                  <Typography
                    as="label"
                    htmlFor="email"
                    type="small"
                    className="text-white/70"
                  >
                    Email*
                  </Typography>
                  <Input color="secondary" size="lg">
                    <Input.Field
                      id="email"
                      type="email"
                      placeholder="youremail@example.com"
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                      value={formData.email} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
                <div className="w-full space-y-1">
                  <Typography as="label" htmlFor="vat" type="small" className="text-white/70">
                    VAT ID
                  </Typography>
                  <Input color="secondary" size="lg">
                    <Input.Field 
                      id="vat" 
                      type="text" 
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white" 
                      placeholder="4812***" 
                      value={formData.vat} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full space-y-1">
                  <Typography
                    as="label"
                    htmlFor="address"
                    type="small"
                    className="text-white/70"
                  >
                    Street Address*
                  </Typography>
                  <Input color="secondary" size="lg">
                    <Input.Field
                      id="address"
                      type="text"
                      placeholder="St. Aviators no. 1"
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                      value={formData.address} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
                <div className="w-full space-y-1">
                  <Typography
                    as="label"
                    htmlFor="city"
                    type="small"
                    className="text-white/70"
                  >
                    City*
                  </Typography>
                  <Input color="secondary" size="lg">
                    <Input.Field 
                      id="city" 
                      type="text" 
                      placeholder="Bucharest"
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                      value={formData.city} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full space-y-1">
                  <Typography
                    as="label"
                    htmlFor="postalcode"
                    type="small"
                    className="text-white/70"
                  >
                    Postal Code*
                  </Typography>
                  <Input color="secondary" size="lg">
                    <Input.Field
                      id="postalcode"
                      type="text"
                      placeholder="012210"
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                      value={formData.postalcode} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
                <div className="w-full space-y-1">
                  <Typography
                    as="label"
                    htmlFor="country"
                    type="small"
                    className="text-white/70"
                  >
                    Country*
                  </Typography>
                  <Input color="secondary" size="lg">
                    <Input.Field
                      id="country"
                      type="text"
                      placeholder="Romania"
                      className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                      value={formData.country} 
                      onChange={handleChange}
                    />
                  </Input>
                </div>
              </div>
              <Typography
                as="label"
                htmlFor="projectinfo"
                type="small"
                color="secondary"
                className="text-white/70 -mb-2"
              >
                Project Information*
              </Typography>
              <Textarea
                color="secondary"
                id="projectinfo"
                placeholder="Message here..."
                className="hover:!ring-white/30 focus:!ring-white/30 text-white"
                value={formData.projectinfo} 
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {["digitalMastering", "stemMastering", "djMix", "mixdown", "vinylMastering", "mixdownMastering", "audioRestoration"].map((option: React.Key | null | undefined) => (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox color="secondary" id={option} onChange={handleChange}>
                      <Checkbox.Indicator />
                    </Checkbox>
                    <Typography className="capitalize" as="label" htmlFor={option}>
                      {option.replace(/([A-Z])/g, ' $1').trim()}
                    </Typography>
                  </div>
                ))}
              </div>
              <hr className="mt-6" />
              <Radio color="secondary">
                <div className="flex items-center gap-2">
                  <Radio.Item id="radio-link-agree">
                    <Radio.Indicator />
                  </Radio.Item>
                  <Typography
                    as="label"
                    htmlFor="radio-link-agree"
                    className="text-foreground mt-6"
                  >
                    I consent to having
                    <Typography
                      as="a"
                      href="#"
                      color="secondary"
                      className="px-2"
                    >
                      DRG MASTERING
                    </Typography>
                    collect my name, email and other information submitted in this
                    form.* required
                  </Typography>
                </div>
              </Radio>
              <Button
                className="bg-white rounded-xl uppercase hover:text-white hover:bg-gray-800"
                color="secondary"
                size="lg"
                type="submit"
              >
                Submit
              </Button>
              <Button
                as="a"
                href="https://drgmastering.wetransfer.com"
                target="_blank"
                color="secondary"
                className="text-white rounded-xl uppercase mt-2 hover:bg-gray-800"
                variant="outline"
                size="lg"
              >
                Upload files here
              </Button>
            </div>
            
            <div className="px-12 hidden md:block">
              <div className="relative mb-24 md:mt-10">
                <Image
                  className="absolute opacity-30 m-4 z-10 border border-white/40 rounded-xl h-[35rem]"
                  src="/order-img.png"
                  width="500"
                  height="700"
                  alt="studio"
                />
                <Image
                  className="absolute left-9 top-10 opacity-100 z-30 flex items-center border border-white/60 rounded-lg h-[32rem]"
                  src="/studio.jpg"
                  width="460"
                  height="760"
                  alt="studio"
                />
              </div>
            </div>
            </div>

        </form>
      </div>
    </div>
  );
};

export default Order;
function alert(arg0: string) {
  throw new Error("Function not implemented.");
}

