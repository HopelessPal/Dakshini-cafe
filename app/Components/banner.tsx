import React from 'react';

const Banner = () => {
    return (
        <div id="counter" className="text-black counter_area py-12 relative font-serif">

            <div className='flex justify-center items-center'>
                <div className="flex justify-between items-center w-full mx-48">
                    <div className="flex justify-between items-center w-full ">
                        <div className="col-md-4 col-sm-12 flex flex-col justify-center items-center">
                            <div className="single_counter">
                                <div className="count">
                                    <span className="counter text-4xl font-bold">36546</span>
                                </div>
                                <p className='text-2xl font-bold'>Platters Served</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 flex flex-col justify-center items-center">
                            <div className="single_counter">
                                <span className="count">
                                    <span className="counter text-4xl font-bold">28</span>
                                </span>
                                <p className='text-2xl font-bold'>Type of Platter</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 flex flex-col justify-center items-center">
                            <div className="single_counter">
                                <span className="count">
                                    <span className="counter text-4xl font-bold">12</span>
                                </span>
                                <p className='text-2xl font-bold'>Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <img src="unnamed.jpg" alt="Background" className="absolute inset-0 w-full h-full bg-black object-cover opacity-50"/>
            </div>
        </div>
    );
}

export default Banner;
