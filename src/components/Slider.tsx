import React from "react";
import {Movie} from "@/interfaces/movie";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type SliderProps = {
  movies: Movie[];
};

const Slider: React.FC<SliderProps> = ({movies}) => {
  return (
    <section className="max-w-[1170px] mx-auto py-[40px]">
      <h3 className="text-white text-[32px] font-semibold">Explore</h3>
      <p className="text-[#868686] pb-6">What are you gonna watch today ?</p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {movies.map((movie: Movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Image
                alt={movie.original_title}
                src={`${process.env.IMAGE_URL}${movie.poster_path}`}
                className="w-full rounded-xl max-h-[400px] px-2 md:px-0 object-contail"
                width={500}
                height={400}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Slider;
