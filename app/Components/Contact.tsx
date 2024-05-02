import React from 'react';

const ContactForm = () => {
    return (
        <div className='flex justify-center items-center p-2'>
            <form id="contact-form" className='w-3/4'>
            <h1 className="text-5xl text-bold font-serif mb-8 mt-10 flex justify-center items-center">GET IN TOUCH</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="col-span-1">
                        <div className="single_form mt-4">
                            <input name="name" type="text" placeholder="Name" className="border border-gray-500 px-4 py-3 rounded w-full h-16" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="single_form mt-4">
                            <input name="email" type="email" placeholder="Email" className="border border-gray-500 px-4 py-3 rounded w-full h-16" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="single_form mt-4">
                            <input name="subject" type="text" placeholder="Subject" className="border border-gray-500 px-4 py-3 rounded h-16 w-full" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="single_form mt-4">
                            <textarea name="message" placeholder="Message" className="border border-gray-500 px-4 py-3 rounded w-full h-48"></textarea>
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
