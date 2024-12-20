import React, { useEffect, useState } from 'react';

type Props = {};

const Parallax = (props: Props) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="hidden md:block relative h-[33rem] w-full bg-[url('/mixer-lung.png')] bg-fixed bg-center bg-cover">
        <div className="absolute inset-0 flex items-center justify-center bg-[#000] bg-opacity-40"></div>
      </div>
      <div
        className="block md:hidden relative h-[15rem] w-full bg-cover bg-top"
        style={{
          backgroundImage: "url('/mixer-lung.png')",
          backgroundPositionY: offsetY * 0.4,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-[#000] bg-opacity-40"></div>
      </div>
    </>
  );
};

export default Parallax;