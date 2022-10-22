import React, {useState } from "react";
import { Autoplay } from "swiper"
import MyProject from "../../views/myprojects";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper";

export default function Card({title, projects}) {
  return (
    <div className="container-swiper">
        <h3>Projetos</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
            delay: 361500,
            disableOnInteraction: false
        }}
        className="mySwiper"
      >
        {projects.map((project, index) => {
            return(<SwiperSlide key={index} className="swiper-container">
                <a href={project.URL} target="__blank" style={{ textDecoration: "none", color: "black" }}>
                <MyProject  items={project}/>
                </a>
                </SwiperSlide>)
        })}
      </Swiper>
    </div>
  );
}
