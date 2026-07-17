import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import heroBanner from '../img/banner_Hero1.jpg';
import heroBanner1 from '../img/banner_Hero2.jpg';
import heroBanner2 from '../img/banner_Hero3.jpg';



const HeroSlider = () => {
  return (
  
    <div className='hero'>
      <div className="container">
        <Swiper 
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         pagination={true} modules={[Autoplay, Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="slide-inner">
              <img src={heroBanner} alt="Xbox Banner" />
              <div className="slide-content">
                <h4>Introducing the new </h4>
                <h3>Microsoft Xbox <br/> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='btn'>Shop Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-inner">
              <img src={heroBanner1} alt="Xbox Banner" />
              <div className="slide-content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br/> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='btn'>Shop Now</Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-inner">
              <img src={heroBanner2} alt="Xbox Banner" />
              <div className="slide-content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br/> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='btn'>Shop Now</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HeroSlider;