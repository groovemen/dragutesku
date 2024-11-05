"use client";

import Image from "next/image";
import Studio from "./components/studio"
import Services from "./components/services";
import Parallax from "./components/parallax";
import References from "./components/references";
import Carousela from "./components/carousela";
import Order from "./components/order";
import ParallaxBottom from "./components/parallaxBottom";

export default function Home() {

  return (
    <main className="bg-white">
      <header>
        <Carousela />
      </header>
      <Studio />
      <Services />
      <Parallax />
      <References />
      <Order />
      <ParallaxBottom />
    </main>
  );
}
