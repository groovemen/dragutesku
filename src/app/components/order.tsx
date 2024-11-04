import React from "react";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Input,
  Typography,
  Textarea,
  Radio,
} from "@material-tailwind/react";

type Props = {};

const Order = (props: Props) => {
  return (
    <div className="relative bg-[url('/vinyl.jpg')] bg-center bg-cover">
      <div className="container mx-auto py-12">
        <h2 className="uppercase flex text-3xl md:text-4xl text-white font-bold items-center mb-2">
          Order Information
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
                  color="white"
                >
                  Company/Label/Independent Artist*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field
                    id="company"
                    type="text"
                    placeholder="Mix Master SRL"
                    className="text-white"
                  />
                </Input>
              </div>
              <div className="w-full space-y-1">
                <Typography
                  as="label"
                  htmlFor="fullname"
                  type="small"
                  color="white"
                >
                  Full Name*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field
                    id="fullname"
                    type="text"
                    className="text-white"
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
                  color="white"
                >
                  Email*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field
                    id="email"
                    type="email"
                    placeholder="someone@example.com"
                    className="text-white"
                  />
                </Input>
              </div>
              <div className="w-full space-y-1">
                <Typography as="label" htmlFor="vat" type="small" color="white">
                  VAT ID*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field id="vat" type="text" className="text-white" />
                </Input>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full space-y-1">
                <Typography
                  as="label"
                  htmlFor="address"
                  type="small"
                  color="white"
                >
                  Street Address*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field
                    id="address"
                    type="text"
                    className="text-white"
                  />
                </Input>
              </div>
              <div className="w-full space-y-1">
                <Typography
                  as="label"
                  htmlFor="city"
                  type="small"
                  color="white"
                >
                  City*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field id="city" type="text" className="text-white" />
                </Input>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full space-y-1">
                <Typography
                  as="label"
                  htmlFor="postalcode"
                  type="small"
                  color="white"
                >
                  Postal Code*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field
                    id="postalcode"
                    type="text"
                    className="text-white"
                  />
                </Input>
              </div>
              <div className="w-full space-y-1">
                <Typography
                  as="label"
                  htmlFor="country"
                  type="small"
                  color="white"
                >
                  Country*
                </Typography>
                <Input color="secondary" size="lg">
                  <Input.Field
                    id="country"
                    type="text"
                    className="text-white"
                  />
                </Input>
              </div>
            </div>
            <Typography
              as="label"
              htmlFor="projectinfo"
              type="small"
              color="white"
            >
              Project Information*
            </Typography>
            <Textarea
              color="secondary"
              id="projectinfo"
              placeholder="Message here..."
              className="text-white"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Checkbox id="digital-mastering" color="secondary">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="digital-mastering"
                  className="cursor-pointer text-foreground"
                >
                  Digital Mastering
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="stem-mastering" color="secondary">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="stem-mastering"
                  className="cursor-pointer text-foreground"
                >
                  Stem Mastering
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="dj-mix" color="secondary">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="dj-mix"
                  className="cursor-pointer text-foreground"
                >
                  DJ Mix & Podcast
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="mixdown" color="secondary">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="mixdown"
                  className="cursor-pointer text-foreground"
                >
                  Mixdown (only)
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="vinyl-mastering" color="secondary">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="vinyl-mastering"
                  className="cursor-pointer text-foreground"
                >
                  Vinyl Mastering
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="mixdown-mastering" color="secondary">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="mixdown-mastering"
                  className="cursor-pointer text-foreground"
                >
                  Mixdown + Mastering
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="audio-restoration" color="secondary">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="audio-restoration"
                  className="cursor-pointer text-foreground"
                >
                  Audop Restoration
                </Typography>
              </div>
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
              className="bg-white rounded-xl uppercase"
              color="secondary"
              size="lg"
            >
              Submit
            </Button>
            <Button
              as="a"
              href="https://drgmastering.wetransfer.com"
              target="_blank"
              className="rounded-xl uppercase mt-2"
              variant="outline"
              color="white"
              size="lg"
            >
              Upload files here
            </Button>
          </div>

          <div className="px-12">
            <div className="relative mb-24">
              <Image
                className="absolute opacity-40 m-4 z-10 border border-white/40 rounded-xl h-[33rem]"
                src="/studio.jpg"
                width="500"
                height="700"
                alt="studio"
              />
              <Image
                className="absolute left-9 top-10 opacity-100 z-50 flex items-center border border-white/60 rounded-lg h-[30rem]"
                src="/studio.jpg"
                width="460"
                height="760"
                alt="studio"
              />
            </div>

            <div className="relative text-center">
              <Image src="/sound-vector.svg" className="absolute left-40 md:mt-[40rem] text-center" width={200} height={100} alt="soundWave " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
