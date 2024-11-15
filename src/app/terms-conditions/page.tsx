"use client";

import Image from "next/image";
import TermsConditions from "../components/terms"
import Carousel from "../components/carousel";

export default function TermsAndConditions() {
  return (
    <main className="bg-white">
      <Carousel />
      <TermsConditions />
    </main>
  );
}
