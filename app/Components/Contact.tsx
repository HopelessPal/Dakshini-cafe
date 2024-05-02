import React from 'react';
import Image from 'next/image';
import line from "../../public/compressedImages/line.png";

const ContactForm = () => {
    return (
        <div className='flex justify-center items-center px-4 lg:px-48'>
            <form id="contact-form" className='w-full'>
                <h1 className="lg:text-5xl text-2xl text-bold font-serif mt-6 flex justify-center items-center">GET IN TOUCH</h1>
                <div className="flex justify-center m-4">
                    <Image src={line} alt="line" className='w-52' />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    <div className="lg:col-span-1 col-span-2">
                        <div className="single_form lg:mt-4 flex lg:flex-row flex-col">
                            <input name="name" type="text" placeholder="Name" className="border border-gray-500 px-4 lg:py-3 rounded w-full h-16 my-5" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="single_form lg:mt-4 flex lg:flex-row flex-col">
                            <input name="email" type="email" placeholder="Email" className="border border-gray-500 px-4 lg:py-3 rounded w-full h-16 lg:my-5" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="single_form">
                            <input name="subject" type="text" placeholder="Subject" className="border border-gray-500 px-4 py-3 rounded h-16 w-full " />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="single_form mt-4">
                            <textarea name="message" placeholder="Message" className="border border-gray-500 px-2 py-3 rounded w-full h-48"></textarea>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="form-message"></p>
                    </div>
                    <div className="col-span-2 flex justify-center mb-20 mt-5">
                        <div className="single_form">
                            <button className="main-btn px-16 py-4 bg-[#FB923C] text-white rounded font-serif">SUBMIT</button>
                        </div>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default ContactForm;
