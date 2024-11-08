"use client";

import Image from "next/image";
import Studio from "./components/studio"
import Services from "./components/services";
import Parallax from "./components/parallax";
import References from "./components/references";
import Carousela from "./components/carousela";
import Order from "./components/order";
import ParallaxBottom from "./components/parallaxBottom";

const references = [
  {
    imgSrc: "/references/ref1.jpg",
    referenceLink: "https://www.instagram.com/p/Cxdr_JvsQhT/?igsh=aG9kZnlvdm9kNzIw",
    referenceAlt: "reference 1"
  },
  {
    imgSrc: "/references/ref2.jpg",
    referenceLink: "https://www.instagram.com/p/CstBzyhMjAd/?igsh=NmM2dnVwaWc2YXJl",
    referenceAlt: "reference 2"
  },
  {
    imgSrc: "/references/ref3.jpg",
    referenceLink: "https://www.instagram.com/p/C4Dc_zmMCPo/?igsh=bHcxNjNjNzVhZnZ6",
    referenceAlt: "reference 3"
  },
  {
    imgSrc: "/references/ref4.jpg",
    referenceLink: "https://www.instagram.com/p/C3Z0WkYMz7z/?igsh=MWY4ZHNjM3J2anRkdw%3D%3D",
    referenceAlt: "reference 4"
  },
  {
    imgSrc: "/references/ref5.jpg",
    referenceLink: "https://www.instagram.com/p/C01P0lFs-_c/?igsh=MWZkNXE5bnAwZWtwdw%3D%3D",
    referenceAlt: "reference 5"
  },
  {
    imgSrc: "/references/ref6.jpg",
    referenceLink: "https://www.instagram.com/p/C3Sg6gNsys9/?igsh=MXR2dDE5ZXlmeGhjYQ%3D%3D",
    referenceAlt: "reference 6"
  },
  {
    imgSrc: "/references/ref7.jpg",
    referenceLink: "https://www.instagram.com/p/C5TWQczMuee/?igsh=OGphanB4MWRuMzNs",
    referenceAlt: "reference 7"
  },
  {
    imgSrc: "/references/ref8.jpg",
    referenceLink: "https://www.instagram.com/p/C_-_EOtsaqz/?igsh=N3o2Y3pnaTlsNmVv",
    referenceAlt: "reference 8"
  },
  {
    imgSrc: "/references/ref9.jpg",
    referenceLink: "https://www.instagram.com/p/DAOomyBgMvh/?igsh=MXRmY3F1NXl5ZjFwOQ%3D%3D",
    referenceAlt: "reference 9"
  },
  {
    imgSrc: "/references/ref10.jpg",
    referenceLink: "https://www.instagram.com/p/DAk21NBAQ57/?igsh=MWFoaHNsdXlkZ245cQ%3D%3D",
    referenceAlt: "reference 10"
  },
  {
    imgSrc: "/references/ref11.jpg",
    referenceLink: "https://www.instagram.com/p/C9FHWbFMQn0/?igsh=MjZobzE0a3Nlc2xz&img_index=1",
    referenceAlt: "reference 11"
  },
  {
    imgSrc: "/references/ref12.jpg",
    referenceLink: "https://www.instagram.com/reel/C-D3cTPAf1L/?igsh=bmh0dmViaG5wbnR2",
    referenceAlt: "reference 12"
  },
  {
    imgSrc: "/references/ref13.jpg",
    referenceLink: "https://www.instagram.com/p/C-XXB-mAALr/?igsh=ZGx4aXZyeDBycmx6",
    referenceAlt: "reference 13"
  },
  {
    imgSrc: "/references/ref14.jpg",
    referenceLink: "https://www.instagram.com/p/C3VXhi6suM2/?igsh=cnR2Znc3ZzdiNjQ1",
    referenceAlt: "reference 14"
  },
  {
    imgSrc: "/references/ref15.jpg",
    referenceLink: "https://www.instagram.com/p/CtOhp9HMMg5/?igsh=eWRqYjlqM3JudXNq",
    referenceAlt: "reference 15"
  },
]

export default function Home() {

  return (
    <main className="bg-white">
      <header>
        <Carousela />
      </header>
      <Studio />
      <Services />
      <Parallax />
      <References references={references} /> 
      <Order />
      <ParallaxBottom />
    </main>
  );
}
