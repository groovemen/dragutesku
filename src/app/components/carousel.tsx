import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import * as React from "react";
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <div className="hidden sm:block">
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="dark !absolute left-2 right-24 bottom-10 z-10 !place-items-end hover:!bg-transparent hover:border-none"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="dark !absolute right-12 bottom-10 top-24 z-10 !place-items-end hover:!bg-transparent hover:border-none"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </IconButton>
    </div>
  );
}

function customPagination() {
  return `<span class="w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}

export default function Carousel() {
  return (
    <div id="home" className="w-full">
      <Swiper
        speed={1500}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
          renderBullet: customPagination,
        }}
        modules={[Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
        className="relative w-full h-[70dvh] sm:h-auto max-h-screen [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background swiper-fade-black-bg"
      >
        {[
          "/slide1.jpg",
          "/slide2.jpg",
          "/slide3.jpg",
        ].map((img, index) => (
          <SwiperSlide key={index} className="select-none">
            <img
              src={img}
              alt={`image-${index}`}
              className="w-auto sm:w-full h-full sm:h-auto object-cover"
            />
          </SwiperSlide>
        ))}
        <CustomNavigation  />
      </Swiper>
    </div>
  );
}
