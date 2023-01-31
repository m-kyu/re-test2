// Import Swiper React components
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion } from "framer-motion";
const ani = {
    init : {opacity:0, x: 1000},
    play : {opacity:1, x: 0}
}


export const Slide = () => {
  return (
    <motion.div 
      initial='init'
      animate='play'      
      variants={ani}
      transition={{ duration: 2 }}
    >
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{height:600}}

        
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </motion.div>
  );
};


export default Slide