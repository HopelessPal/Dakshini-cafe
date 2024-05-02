"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'; 

const Upcoming = () => {

    useEffect(() => {
        AOS.init({
            // once: true,
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className='bg-white flex flex-col items-center justify-center font-serif'>
            <h2 className="text-5xl font-bold my-14">Upcoming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-40
            ">
                <div className="flex items-center pl-6" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back">
                    <img src="image5(crop).jpg" alt="Image 1" className="w-[237px] h-[304px] sm:w-auto sm:max-w-xs rounded-xl" />
                    <div className='mx-4'>
                        <h3 className="text-lg font-semibold mb-2 text-[#2A2A2A]">Product Name 1</h3>
                        <p className="text-base text-[#7A7A7A]">Lorem, ipsum dolosit amet contetur adipisicing elit. Cum voluptatem temporibus, optio vero magnam quis?</p>
                    </div>
                </div>
                <div className="flex items-center pl-6" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back">
                    <img src="image5(crop).jpg" alt="Image 2" className="w-[237px] h-[304px] rounded-xl " />
                    <div className='mx-4'>
                        <h3 className="text-lg font-semibold mb-2 text-[#2A2A2A]">Product Name 2</h3>
                        <p className="text-base text-[#7A7A7A]">Lorem, ipsum dolosit amet contetur adipisicing elit. Cum voluptatem temporibus, optio vero magnam quis?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming;
