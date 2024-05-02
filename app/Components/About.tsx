// the slider section


'use client'
import React from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AboutPage = () => {
    return (
        <div>
            <div className="swiper_content w-full">
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
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider_inner_content relative">
                            <div className="image_content w-screen md:h-screen relative">
                                <img src="/image1.JPG" alt="slider" className=' h-full object-cover relative w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute md:top-1/2 lg:top-1/3  md:left-48 left-10 text-left md:w-3/4 lg:w- pt-[50px]">
                                <h1 className="text-white md:text-5xl text-3xl text-left pb-4 leading-6 font">Serving since 2024</h1>
                                <p className="text-white md:text-base text-sm md:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="#menu">
                                    <button className='text-white text-lg bg-orange-400 px-[40px] py-2 rounded-md font-medium'>Menu</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider_inner_content relative">
                            <div className="image_content w-full md:h-screen relative">
                                <img src="/image1.JPG" alt="slider" className=' h-screen object-cover w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute md:top-1/2 top-1/3  md:left-52 left-10 text-left md:w-1/2 w-3/4 pt-[50px]">
                                <h1 className="text-white md:text-5xl text-3xl text-left pb-4 leading-6">Serving since 2024</h1>
                                <p className="text-white md:text-base text-sm md:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="#menu">
                                    <button className='text-white text-lg bg-orange-400 px-[40px] py-2 rounded-md font-medium'>Menu</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_inner_content relative">
                            <div className="image_content w-full md:h-screen relative">
                                <img src="/image1.JPG" alt="slider" className=' h-screen object-cover w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute md:top-1/2 top-1/3  md:left-52 left-10 text-left md:w-1/2 w-3/4 pt-[50px]">
                                <h1 className="text-white md:text-5xl text-3xl text-left pb-4 leading-6">Serving since 2024</h1>
                                <p className="text-white md:text-base text-sm md:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="#menu">
                                    <button className='text-white text-lg bg-orange-400 px-[40px] py-2 rounded-md font-medium'>Menu</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_inner_content relative">
                            <div className="image_content w-full md:h-screen relative">
                                <img src="/image1.JPG" alt="slider" className=' h-screen object-cover w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute md:top-1/2 top-1/3  md:left-52 left-10 text-left md:w-1/2 w-3/4 pt-[50px]">
                                <h1 className="text-white md:text-5xl text-3xl text-left pb-4 leading-6">Serving since 2024</h1>
                                <p className="text-white md:text-base text-sm md:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="#menu">
                                    <button className='text-white text-lg bg-orange-400 px-[40px] py-2 rounded-md font-medium'>Menu</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default AboutPage