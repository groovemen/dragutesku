import React, { useEffect, useState } from 'react';

type Props = {};

const ParallaxBottom = (props: Props) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative h-[10rem] md:h-[33rem] 2xl:h-[50rem] w-full bg-cover bg-top"
      style={{
        backgroundImage: "url('/tools.png')",
        backgroundPositionY: offsetY * 0.35,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-[#000] bg-opacity-40"></div>
    </div>
  );
};

export default ParallaxBottom;