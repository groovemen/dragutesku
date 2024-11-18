import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

type Props = {};

const TermsConditions = (props: Props) => {
  return (
    <div id="studio" className="bg-white px-8 md:px-0 pt-24">
      <div className="container h-screen w-full mx-auto">
        <h2 className="uppercase flex text-3xl md:text-4xl text-black font-bold items-center">
          <Image className="w-16 mr-4" src="/soundwave.svg" width={200} height={100} alt="soundwave" />
          Privacy Policy
        </h2>
       
      </div>
    </div>
  )
};

export default TermsConditions;
