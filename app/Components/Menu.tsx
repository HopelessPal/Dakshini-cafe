"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'; 

const Menu = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 500,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div id='menu' className='py-32 px-28 bg-[#efefef] flex flex-col items-center justify-center h-full font-serif'>
            <div className='flex justify-center'>
                <div className='md:text-5xl text-2xl font-bold text-[#2A2A2A]'>
                    Menu
                </div>
            </div>
            <div className='flex justify-center items-center mb-10'>
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        width="90px" height="80px" viewBox="0 0 312.05 312.05">

                        <g>
                            <g>
                                <path d="M232.01,99.367c-29.426,0-53.662,22.541-56.384,51.258h-41.9c-2.732-28.717-26.963-51.258-56.386-51.258
			c-29.42,0-53.66,22.541-56.384,51.258H5.4c-2.984,0-5.4,2.42-5.4,5.4c0,2.979,2.416,5.399,5.4,5.399h15.557
			c2.734,28.72,26.969,51.258,56.384,51.258c29.418,0,53.66-22.538,56.381-51.258h41.905c2.731,28.72,26.958,51.258,56.384,51.258
			s53.652-22.538,56.389-51.258h18.252c2.979,0,5.399-2.421,5.399-5.399c0-2.98-2.42-5.4-5.399-5.4h-18.252
			C285.663,121.908,261.431,99.367,232.01,99.367z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            <div className='grid md:grid-cols-2 gap-8 grid-cols-1 mx-auto pb-5'>

                <div className='relative flex justify-center' data-aos="fade-up">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <img src='image1.jpg' alt='Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div className='ml-10 w-1/2'>
                        <div className='flex justify-between items-center h-auto font-bold text-xl'>
                            <p className='text-[#2A2A2A]'>Dosa</p>
                            <p className='text-[#FB923C]'>$10</p>
                        </div>
                        <p className='text-[#7A7A7A] my-2'>Lorem ipsum dolor sit amet consectetur elit. Voluptatum, koti</p>
                    </div>
                </div>

                <div className='relative flex justify-center' data-aos="fade-up">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <img src='image2.jpg' alt='Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div className='ml-10 w-1/2'>
                        <div className='flex justify-between items-center h-auto font-bold text-xl'>
                            <p className='text-[#2A2A2A]'>Dosa</p>
                            <p className='text-[#FB923C]'>$10</p>
                        </div>
                        <p className='text-[#7A7A7A] my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, odio.</p>
                    </div>
                </div>

                <div className='relative flex justify-center' data-aos="fade-up" data-aos-delay="200">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <img src='image3.jpg' alt='Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div className='ml-10 w-1/2'>
                        <div className='flex justify-between items-center h-auto font-bold text-xl'>
                            <p className='text-[#2A2A2A]'>Dosa</p>
                            <p className='text-[#FB923C]'>$10</p>
                        </div>
                        <p className='text-[#7A7A7A] my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsam!</p>
                    </div>
                </div>

                <div className='relative flex justify-center' data-aos="fade-up" data-aos-delay="200">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <img src='image4.jpg' alt='Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div className='ml-10 w-1/2'>
                        <div className='flex justify-between items-center h-auto font-bold text-xl'>
                            <p className='text-[#2A2A2A]'>Dosa</p>
                            <p className='text-[#FB923C]'>$10</p>
                        </div>
                        <p className='text-[#7A7A7A] my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aut.</p>
                    </div>
                </div>

                <div className='relative flex justify-center' data-aos="fade-up" data-aos-delay="400">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <img src='image5.jpg' alt='Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div className='ml-10 w-1/2'>
                        <div className='flex justify-between items-center h-auto font-bold text-xl'>
                            <p className='text-[#2A2A2A]'>Dosa</p>
                            <p className='text-[#FB923C]'>$10</p>
                        </div>
                        <p className='text-[#7A7A7A] my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, et!</p>
                    </div>
                </div>

                <div className='relative flex justify-center' data-aos="fade-up" data-aos-delay="400">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <img src='image6.jpg' alt='Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div className='ml-10 w-1/2'>
                        <div className='flex justify-between items-center h-auto font-bold text-xl'>
                            <p className='text-[#2A2A2A]'>Dosa</p>
                            <p className='text-[#FB923C]'>$10</p>
                        </div>
                        <p className='text-[#7A7A7A] mt-3 pr-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, saepe?</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Menu;
