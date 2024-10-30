import React from "react";
import Image from "next/image";

type Props = {

};

const footer = (props: Props) => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Services
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prices
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Studio
      </a>
    </footer>
  );
};

export default footer;