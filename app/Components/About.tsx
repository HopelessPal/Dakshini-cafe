// the slider section


'use client'
import React from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import slide1 from "../../public/compressedImages/image1.jpg";
import slide2 from "../../public/compressedImages/image2.jpg";
import slide3 from "../../public/compressedImages/image3.jpg";
import slide4 from "../../public/compressedImages/image4.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AboutPage = () => {
    return (
        <div>
            <div className="swiper_content w-full font-serif">
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
                        <div className="slider_inner_content relative font-serif">
                            <div className="image_content w-full lg:h-screen relative">
                                <Image src={slide1} alt="slider" className='h-screen object-cover w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute lg:top-1/2 top-1/3  lg:left-52 left-10 text-left lg:w-1/2 w-3/4 pt-[50px]">
                                <h1 className="text-white lg:text-6xl text-3xl text-left pb-4 leading-6">Serving since 2024</h1>
                                <p className="text-white lg:text-xl text-sm lg:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="/Menu">
                                    <button id='set' className='text-white text-2xl bg-[#FB923C] px-[40px] py-2 rounded-md font-medium'>Menu</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider_inner_content relative">
                            <div className="image_content w-full lg:h-screen relative">
                                <Image src={slide2} alt="slider" className=' h-screen object-cover w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute lg:top-1/2 top-1/3  lg:left-52 left-10 text-left lg:w-1/2 w-3/4 pt-[50px]">
                                <h1 className="text-white lg:text-6xl text-3xl text-left pb-4 leading-6">Serving since 2024</h1>
                                <p className="text-white lg:text-base text-sm lg:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="/Menu">
                                    <button id='set' className='text-white text-2xl bg-[#FB923C] px-[40px] py-2 rounded-md font-medium'>Menu</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_inner_content relative">
                            <div className="image_content w-full lg:h-screen relative">
                                <Image src={slide3} alt="slider" className=' h-screen object-cover w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute lg:top-1/2 top-1/3  lg:left-52 left-10 text-left lg:w-1/2 w-3/4 pt-[50px]">
                                <h1 className="text-white lg:text-6xl text-3xl text-left pb-4 leading-6">Serving since 2024</h1>
                                <p className="text-white lg:text-base text-sm lg:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="/Menu">
                                    <button id='set' className='text-white text-2xl bg-[#FB923C] px-[40px] py-2 rounded-md font-medium'>Menu</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_inner_content relative">
                            <div className="image_content w-full lg:h-screen relative">
                                <Image src={slide4} alt="slider" className=' h-screen object-cover w-full' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="absolute lg:top-1/2 top-1/3  lg:left-52 left-10 text-left lg:w-1/2 w-3/4 pt-[50px]">
                                <h1 className="text-white lg:text-6xl text-3xl text-left pb-4 leading-6">Serving since 2024</h1>
                                <p className="text-white lg:text-base text-sm lg:leading-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit, quas esse est, voluptas corrupti quod eum, facere error consectetur culpa alias? Velit, magni saepe!</p>
                                <Link href="/Menu">
                                    <button id='set' className='text-white text-2xl bg-[#FB923C] px-[40px] py-2 rounded-md font-medium'>Menu</button>
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