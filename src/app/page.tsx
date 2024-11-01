"use client";

import Image from "next/image";
import Studio from "./components/studio"
import Services from "./components/services";
import Parallax from "./components/parallax";
import References from "./components/references";
import Carousel from "./components/carousel";

export default function Home() {

  return (
    <main className="bg-white">
      <header>
        <Carousel />
      </header>
      <Studio />
      <Services />
      <Parallax />
      <References />
    </main>
  );
}
