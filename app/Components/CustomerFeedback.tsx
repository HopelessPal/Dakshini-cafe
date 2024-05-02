'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const CustomerFeedback = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-200">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src="image1.jpg" alt="Slide 1" className='w-screen' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="image2.jpg" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="image3.jpg" alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="image4.jpg" alt="Slide 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="image5.jpg" alt="Slide 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="image6.jpg" alt="Slide 6" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CustomerFeedback;
