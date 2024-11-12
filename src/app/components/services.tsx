import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div id="services" className="bg-white">
      <div className="container w-full mx-auto mt-12 px-8 md:px-0">
        <h2 className="uppercase flex text-3xl md:text-4xl text-black font-bold items-center mb-12">
          <Image className="w-16 mr-4" src="/soundwave.svg" width={200} height={100} alt="soundwave" />
          Services
        </h2>
      </div>
      <div className="bg-[url('/vinyl.jpg')] bg-no-repeat bg-cover px-8 md:px-0">
        <div className="container w-full mx-auto py-12">
          <div className="grid md:!grid-cols-2 gap-24">
            <div className="grid grid-cols-1 md:!grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 border border-white rounded-full flex items-center justify-center">
                  <Image className="p-2" src="/services/digital-mastering.svg" width="80" height="80" alt="Digital Mastering" />
                </div>
                <h6 className="uppercase text-white font-normal">Digital Mastering</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 border border-white rounded-full flex item-center justify-center">
                  <Image className="p-3" src="/services/dj-mix.svg" width="80" height="80" alt="Digital Mastering" />
                </div>
                <h6 className="uppercase text-white font-normal">DJ Mix & Podcast</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 border border-white rounded-full flex item-center justify-center">
                  <Image className="p-2" src="/services/mixdown.svg" width="80" height="80" alt="Digital Mastering" />
                </div>
                <h6 className="uppercase text-white font-normal">Mixdown</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 border border-white rounded-full flex item-center justify-center">
                  <Image className="p-2" src="/services/audio-restoration.svg" width="80" height="80" alt="Digital Mastering" />
                </div>
                <h6 className="uppercase text-white font-normal">Audio <br/> Restoration</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 border border-white rounded-full flex item-center justify-center">
                  <Image className="p-2" src="/services/stem-mastering.svg" width="80" height="80" alt="Digital Mastering" />
                </div>
                <h6 className="uppercase text-white font-normal">Stem Mastering</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 border border-white rounded-full flex item-center justify-center">
                  <Image className="p-2" src="/services/vinyl-mastering.svg" width="80" height="80" alt="Digital Mastering" />
                </div>
                <h6 className="uppercase text-white font-normal">Vinyl Mastering</h6>
              </div>
            </div>
            <div className="md:pr-32 md:pl-12">
              <Typography type="h4" className="text-2xl text-white font-bold my-8">Elevate Your Sound to Perfection</Typography>
              <Typography className="text-white opacity-90 mb-6">Over 1000+ projects for labels and producers worldwide, crafted with over 12+ years of experience.</Typography>
              <Typography className="text-white opacity-90 mb-12">Are you prepared to captivate your audience with industry-level quality, clarity, and balance in every beat?</Typography>
              <Button
                className="bg-white rounded-xl uppercase hover:text-white hover:bg-gray-800"
                color="secondary"
                size="lg"
              >
                Request Pricelist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;