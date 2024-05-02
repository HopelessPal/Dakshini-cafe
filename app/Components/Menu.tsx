"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from 'next/image';
import item1 from "../../public/compressedImages/image1.jpg";
import item2 from "../../public/compressedImages/image2.jpg";
import item3 from "../../public/compressedImages/image3.jpg";
import item4 from "../../public/compressedImages/image4.jpg";
import item5 from "../../public/compressedImages/image5.jpg";
import item6 from "../../public/compressedImages/image6.jpg";

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
        <div id='menu' className=' bg-[#efefef] flex flex-col items-center justify-center h-full font-serif'>
            <div className='flex justify-center mt-4'>
                <div className='md:text-5xl text-2xl font-bold text-[#2A2A2A]'>
                    Menu
                </div>
            </div>
            <div className="flex justify-center m-4">
                <img src="./compressedImages/line.png" alt="line" className='w-52' />
            </div>
            <div className='grid lg:grid-cols-2 gap-8 grid-cols-1 mx-auto pb-5'>

                <div className='relative flex justify-center' data-aos="fade-up">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <Image src={item1} alt='Image 1' className='w-full h-full object-cover' />
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
                        <Image src={item2} alt='Image 1' className='w-full h-full object-cover' />
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
                        <Image src={item3} alt='Image 1' className='w-full h-full object-cover' />
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
                        <Image src={item4} alt='Image 1' className='w-full h-full object-cover' />
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
                        <Image src={item5} alt='Image 1' className='w-full h-full object-cover' />
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
                        <Image src={item6} alt='Image 1' className='w-full h-full object-cover' />
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
