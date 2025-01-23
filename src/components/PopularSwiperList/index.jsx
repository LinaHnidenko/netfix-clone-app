import React, { useState } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import image1 from "@/assets/images/popular/image-1.jpg";
import image2 from "@/assets/images/popular/image-2.jpg";
import image3 from "@/assets/images/popular/image-3.jpg";
import image4 from "@/assets/images/popular/image-4.jpg";
import image5 from "@/assets/images/popular/image-5.jpg";
import arrowIcon from "@/assets/icons/arrow.svg";

const ICON_SIZE = 12;
const DEFAULT_ARROW_BUTTON_CLASSNAME =
  "flex items-center justify-center border border-white rounded-full w-10 h-10 cursor-pointer p-2";

export const PopularSwiperList = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const films = [
    { id: 1, src: image1, alt: "image" },
    { id: 2, src: image2, alt: "image" },
    { id: 3, src: image3, alt: "image" },
    { id: 4, src: image4, alt: "image" },
    { id: 5, src: image5, alt: "image" },
    { id: 6, src: image1, alt: "image" },
    { id: 7, src: image2, alt: "image" },
    { id: 8, src: image3, alt: "image" },
    { id: 9, src: image4, alt: "image" },
    { id: 10, src: image5, alt: "image" },
  ];

  const handleSwiperChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative max-w-[55%] pb-12">
      <h2 className="container text-white text-2xl font-extrabold pb-8">
        POPULAR THIS WEEK
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        onSwiper={handleSwiperChange}
        onSlideChange={handleSwiperChange}
        grabCursor={true}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
      >
        {films.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="max-w-[151px] w-[151px] h-[210px]">
            <img src={src} alt={alt} width={151} height={210} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 right-1/2 lg:top-0 lg:right-0 translate-x-1/2 flex gap-5">
        <div
          className={cn(
            DEFAULT_ARROW_BUTTON_CLASSNAME,
            "custom-swiper-button-prev rotate-180",
            { "opacity-50 cursor-not-allowed": isBeginning }
          )}
        >
          <img
            src={arrowIcon}
            alt="arrow left"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </div>

        <div
          className={cn(
            DEFAULT_ARROW_BUTTON_CLASSNAME,
            "custom-swiper-button-next",
            { "opacity-50 cursor-not-allowed": isEnd }
          )}
        >
          <img
            src={arrowIcon}
            alt="arrow right"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </div>
      </div>
    </div>
  );
};
