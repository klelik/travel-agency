import "./HeroStyles.css";
import Search from "./Search";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import "swiper/css";
import "swiper/css/autoplay";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          alt="HeroImg"
          src={props.heroImg}
          style={{ display: props.hide === "hide" ? "block" : "none" }}
        />
        <div
          className="slideShow HeroImg"
          style={{ display: props.hide === "hide" ? "none" : "block" }}
        >
          <Swiper
            spaceBetween={30}
            rewind={true}
            effect={"fade"}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper HeroImg"
          >
            <SwiperSlide>
              <img src={Image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="HeroImg" src={props.heroImg} />
            </SwiperSlide>
            ...
          </Swiper>
        </div>

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>

          <div style={{ display: props.hide === "hide" ? "none" : "block" }}>
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
