"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'; 
import Image from 'next/image';
import line from "../../public/compressedImages/line.png";
import upcoming1 from "../../public/compressedImages/image5(crop).jpg";

const Upcoming = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className='bg-white flex flex-col items-center justify-center font-serif py-10'>
            <h2 className="text-5xl font-bold">Upcoming</h2>
            <div className="flex justify-center m-4">
                    <Image src={line} alt="line" className='w-52'/>
                    </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:px-40 p-10
            ">
                <div className="flex flex-col lg:flex-row items-center lg:pl-6" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back">
                    <Image src={upcoming1} alt="Image 1" className="lg:w-[237px] lg:h-[304px] sm:w-auto sm:max-w-xs rounded-xl" />
                    <div className='lg:mx-4 my-4 '>
                        <h3 className="text-lg font-semibold mb-2 text-[#2A2A2A]">Product Name 1</h3>
                        <p className="text-base text-[#7A7A7A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos labore asperiores quasi delectus impedit ducimus, harum architecto molestias totam!</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:pl-6" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back">
                    <Image src={upcoming1} alt="Image 2" className="lg:w-[237px] lg:h-[304px] rounded-xl " />
                    <div className='lg:mx-4 my-4'>
                        <h3 className="text-lg font-semibold mb-2 text-[#2A2A2A]">Product Name 2</h3>
                        <p className="text-base text-[#7A7A7A]">Lorem, ipsum dolosit amet contetur adipisicing elit. Cum voluptatem temporibus, optio vero magnam quis?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming;
