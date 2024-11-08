import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

type Props = {};

const Studio = (props: Props) => {
  return (
    <div id="studio" className="bg-white p-8">
      <div className="container w-full mx-auto mt-12">
        <h2 className="uppercase flex text-3xl md:text-4xl text-black font-bold items-center">
          <Image className="w-16 mr-4" src="/soundwave.svg" width={200} height={100} alt="soundwave" />
          Studio
        </h2>
        <div className="mt-12">
          <div className="block md:flex">
            <div className="relative">
              <Image
                className="opacity-40 z-10 border border-white/40 rounded-xl w-[31.25rem] h-[25rem]"
                src="/eq.png"
                width={500}
                height={700}
                alt="Mastering Room"
              />
              <Image
                className="absolute left-5 top-6 opacity-100 z-20 flex items-center border border-white/60 rounded-lg h-[22rem]"
                src="/eq.png"
                width={460}
                height={760}
                alt="Mastering Room"
              />
              <Typography className="absolute text-white text-sm -mt-16 ml-32 uppercase z-30">
                Flat EQ Room in the Sweet Spot
              </Typography>
            </div>
            <div className="md:m-auto">
              <h3 className="text-2xl uppercase text-black font-bold mt-8 sm:mt-0 mb-4">Mastering Room</h3>
              <h5 className="text-base text-black mb-2">„Front to Back & Above” Acoustic</h5>
              <h5 className="text-base text-black mb-2">Treatment + Bass Traps</h5>
              <h5 className="text-base text-black mb-2">Neumann KH310 Monitoring</h5>
              <h5 className="text-base text-black mb-2">Neumann KH750 Subwoofer</h5>
              <h5 className="text-base text-black mb-2">Neumann NDH30 Headphones</h5>
              <h5 className="text-base text-black mb-2">Neumann Software Correction</h5>
              <h5 className="text-base text-black mb-2">Avantone Pro Mixcubes</h5>
              <h5 className="text-base text-black mb-2">Midas Venice 240</h5>
              <h5 className="text-base text-black">TC Electronic Clarity M Stereo</h5>
            </div>
          </div>
          <div className="flex flex-col mt-24 md:flex-row md:space-x-8">
            <div className="order-2 md:order-1 md:ml-24 md:mr-40">
              <h3 className="text-2xl uppercase text-black font-bold mt-8 sm:mt-0 mb-4">Daw System & Plugins</h3>
              <h5 className="text-base text-black mb-2">Ableton Live 11</h5>
              <h5 className="text-base text-black mb-2">Mac Studio M1 with OSX</h5>
              <h5 className="text-base text-black mb-2">Universal Audio Apollo Interfaces</h5>
              <h5 className="text-base text-black mb-2">UAD DSP Plugins</h5>
              <h5 className="text-base text-black mb-2">Izotope RX PRO</h5>
              <h5 className="text-base text-black mb-2">Softube Bundle</h5>
              <h5 className="text-base text-black mb-2">Plugin Alliance Bundle</h5>
              <h5 className="text-base text-black mb-2">Fab Filter Bundle</h5>
              <h5 className="text-base text-black mb-2">Waves Bundle</h5>
              <h5 className="text-base text-black mb-2">IK Multimedia Bundle</h5>
              <h5 className="text-base text-black mb-2">Sonnox Bundle</h5>
              <h5 className="text-base text-black mb-2">Soundtoys Bundle</h5>
              <h5 className="text-base text-black">SSL Bundle</h5>
            </div> 
            <div className="relative order-1 md:order-2 md:!ml-24">
              <Image
                className="opacity-40 z-10 border border-white/40 rounded-xl w-[31.25rem] h-[25rem]"
                src="/alpha-studio.png"
                width={500}
                height={700}
                alt="Mastering Room"
              />
              <Image
                className="absolute left-5 top-6 opacity-100 z-40 flex items-center border border-white/60 rounded-lg h-[22rem]"
                src="/alpha-studio.png"
                width={460}
                height={760}
                alt="Mastering Room"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Studio;
