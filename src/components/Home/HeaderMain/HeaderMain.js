import React from "react";
import salon from "../../../images/salon.jpg";
import salon2 from "../../../images/jonathan-cooper-sS3qRFsKZlg-unsplash.jpg";
import salon3 from "../../../images/femalCutting.jpg";
import { animated, useSpring } from "@react-spring/web";

const HeaderMain = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height: '600px'}} src={salon} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height: '600px'}} src={salon2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height: '600px'}} src={salon3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <animated.h1 className='text-center pt-5 text-gray' style={props}>Welcome to HR-Salon</animated.h1>
</div>
  );
};

export default HeaderMain;
