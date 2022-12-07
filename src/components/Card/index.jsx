import React, {useState } from "react";
import { Autoplay } from "swiper"
import MyProject from "../../views/myprojects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import { useDeviceDetect } from "../../hooks/useDevice";


export default function Card({title, projects}) {
  const { isMobile } = useDeviceDetect();
  return (
    <div className="container-swiper">
        <h3>Projects</h3>
      <Swiper
           spaceBetween={50}
           slidesPerView={isMobile ? 1 : 4}
          //  className={styles.swiperContainer}
           loop={true}
           autoplay={{
             delay: 1000,
             disableOnInteraction: false,
           }}
           modules={[Autoplay]}
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
