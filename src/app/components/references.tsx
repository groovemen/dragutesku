import Image from "next/image";
import React from "react";

type Reference = {
  imgSrc: string;
  referenceLink: string;
  referenceAlt: string;
};

type Props = {
  references: Reference[];
};

const References = ({ references }: Props) => {
  return (
    <div id="references" className="bg-white pt-24 px-8 md:px-0 overflow-hidden">
      <div className="container w-full mx-auto">
        <h2 className="uppercase flex text-3xl md:text-4xl text-black font-bold items-center mb-8">
          <Image className="w-16 mr-4" src="/soundwave.svg" width={200} height={100} alt="soundwave" />
          References
        </h2>
        <div className="overflow-hidden six-cards relative w-full mx-auto pb-12">
          <div className="flex animate-scroll">
            {([...references, ...references] as Reference[]).map((reference: { referenceLink: string | undefined; imgSrc: any; referenceAlt: any; }, index: React.Key | null | undefined) => (
              <div
                key={index}
                className="w-[12rem] h-[12rem] bg-[#000] rounded-xl p-4 group relative mx-2 hover:shadow-xl cursor-pointer"
              >
                <a href={reference.referenceLink} target="_blank" className="block text-white">
                  <Image
                    src={reference.imgSrc}
                    className="rounded-2xl w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300"
                    width={200}
                    height={200}
                    alt={reference.referenceAlt}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .six-cards {
          width: calc(12rem * 6 + 2rem * 5);
        }
        .animate-scroll {
          display: flex;
          width: calc((12rem + 2rem) * ${references.length * 2});
          animation: scroll 60s linear infinite;
        }
        .six-cards:hover .animate-scroll {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
};

export default References;