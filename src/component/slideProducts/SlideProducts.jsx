import React from 'react'
import Product from './Product'
import './slideProduct.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from 'swiper/modules';



const SlideProducts = ({ data, title }) => {
    return (
        <div className='slide-products slide'>
            <div className="container">
                <div className="top_slide">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet comsectetur adipisicing elit .Molestias,voluptates?</p>
                </div>

                <Swiper slidesPerView={5}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper">

                    {data.map((item) => {
                        return (

                            <SwiperSlide> <Product item={item} /> </SwiperSlide>

                        )
                    })}




                </Swiper>


            </div>

        </div>
    )
}

export default SlideProducts
