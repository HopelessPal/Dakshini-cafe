import React from 'react';
import Image from 'next/image';
import background from "../../public/compressedImages/unnamed.jpg";

const Banner = () => {
    return (
        <div className="relative font-serif">
            {/* Full-width background image */}
            <Image src={background} alt="Background" className="w-full object-cover h16" layout="responsive"/>

            {/* Black semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center my-4 lg:my-8">
                            <div className="single_counter lg:mx-44">
                                <div className="count flex justify-center items-center lg:mx-20">
                                    <span className="text-2xl lg:text-4xl font-bold flex justify-center items-center">36546</span>
                                </div>
                                <p className="lg:text-2xl text-base font-bold lg:   mx-10">Platters Served</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center mb-4 lg:mb-0 my-4">
                            <div className="single_counter lg:mx-10">
                                <span className="count flex justify-center items-center">
                                    <span className="text-2xl lg:text-4xl font-bold">28</span>
                                </span>
                                <p className="lg:text-2xl text-base font-bold">Type of Platter</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
                            <div className="single_counter mx-10">
                                <span className="count flex justify-center items-center">
                                    <span className="text-2xl lg:text-4xl font-bold">12</span>
                                </span>
                                <p className="lg:text-2xl text-base font-bold">Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
