import React from 'react';
import Image from 'next/image';
import background from "../../public/compressedImages/unnamed.jpg";

const Banner = () => {
    return (
        <div id="counter" className="counter_area py-12 relative font-serif">
            <div className='flex justify-center items-center'>
            <Image src={background} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-black opacity-50 ">
            </div>  
                <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center my-8">
                        <div className="single_counter">
                            <div className="count flex justify-center items-center">
                                <span className="text-2xl lg:text-4xl font-bold">36546</span>
                            </div>
                            <p className='lg:text-2xl text-base font-bold '>Platters Served</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center mb-4 lg:mb-0">
                        <div className="single_counter">
                            <span className="count flex justify-center items-center">
                                <span className="text-2xl lg:text-4xl font-bold">28</span>
                            </span>
                            <p className='lg:text-2xl text-base font-bold'>Type of Platter</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
                        <div className="single_counter">
                            <span className="count flex justify-center items-center">
                                <span className="text-2xl lg:text-4xl font-bold">12</span>
                            </span>
                            <p className='lg:text-2xl text-base font-bold'>Team Members</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Banner;
