"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from 'next/image';
import line from "../../public/compressedImages/line.png";
import image1 from "../../public/compressedImages/image1.jpg";
import image2 from "../../public/compressedImages/image2.jpg";
import image3 from "../../public/compressedImages/image3.jpg"
import about from "../../public/compressedImages/AboutNew.jpg";


const Section = () => {

    useEffect(() => {
        AOS.init({
            // once: true,
            disable: "phone",
            duration: 2000,
            easing: "ease-out-cubic",
        });
    }, []);


    return (
        <div className='flex flex-col items-center justify-center bg-white font-serif'>

            <div className="about-section flex flex-col items-center lg:mx-44 mx-2">
                <div className="about-content ">
                    <h2 className="lg:text-6xl text-3xl text-center mt-20 text-[#2A2A2A]">Our Specials</h2>

                    {/* svg which can be changed */}
                    <div className="flex justify-center m-4">
                        <Image src={line} alt="line" className='w-52' />
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
                        <div className="flex flex-col items-center mt-4" data-aos='fade-up' data-aos-delay="200">
                            <Image src={image1} alt="Product 1" className="rounded-full w-20 h-20 lg:m-2" />
                            <h3 className="text-center text-[#2A2A2A] mt-2 text-xl">Product 1</h3>
                            <p className="text-center mt-3 text-[#7A7A7A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur voluptatum?</p>
                        </div>
                        <div className="flex flex-col items-center mt-4" data-aos="fade-up" data-aos-delay="600">
                            <Image src={image2} alt="Product 2" className="rounded-full w-20 h-20 lg:m-2" />
                            <h3 className="text-center text-[#2A2A2A] text-xl mt-2">Product 2</h3>
                            <p className="text-center mt-3 text-[#7A7A7A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti suscipit repudiandae.</p>
                        </div>
                        <div className="flex flex-col items-center mt-4" data-aos="fade-up" data-aos-delay="800">
                            <Image src={image3} alt="Product 3" className="rounded-full w-20 h-20 lg:m-2" />
                            <h3 className="text-center text-[#2A2A2A] text-xl mt-2">Product 3</h3>
                            <p className="text-center mt-3 text-[#7A7A7A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius quos adawasd rationdadawdde?</p>
                        </div>
                    </div>
                </div>
            </div>


            <div id='About' className="mt-auto lg:mx-36">
                <div className="about-section flex flex-col items-center mb-10 mx-20">
                    <h2 className="lg:text-5xl text-3xl text-center mt-20 font-serif font-bold text-[#2A2A2A]">Our Story</h2>
                    <div className="flex justify-center m-4">
                        <Image src={line} alt="line" className='w-52' />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center mb-8 px-4 font-serif">
                        <div className="lg:w-1/2 mt-10 w-full">
                            <Image src={about} alt="About Restaurant image" className="rounded-xl w-full lg:h-[550px] h-full object-contain" />
                        </div>

                        {/* text content */}

                        <div className="w-full lg:w-1/2 lg:px-4">
                            <h2 className="lg:text-4xl text-2xl font-bold my-4 text-[#2A2A2A]">About Restaurant</h2>
                            <p className='text-base text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam impedit cupiditate optio delectus ratione, earum cum natus rerum officiis accusantium odio totam est rem perferendis magnam, doloremque voluptates enim nostrum. Eaque eum qui, praesentium quo porro autem commodi accusantium reiciendis quas dolorem consectetur laborum molestias culpa amet velit cum?</p>
                            <br />
                            <p className='text-base text-[#7A7A7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem aliquam veniam modi iusto quia.</p>

                            {/* icons or links */}
                            <div className="flex mt-4">
                                {/* facebook logo */}
                                {/* <div className="mr-4 flex justify-center items-center rounded-lg bg-gray-400 hover:bg-[#FB923C] w-[35px] h-[35px]">
                                    <a href="/" target='blank'>
                                        <svg fill="#1C2033" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z" />
                                        </svg>
                                    </a>
                                </div> */}
                                {/* twitter logo */}
                                {/* <div className="mr-4 flex justify-center items-center rounded-lg bg-gray-400 w-[35px] h-[35px]">
                                    <a href="/" target='blank'>
                                        <svg fill="#1C2033" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M20.3 57.3996C43.9 57.3996 56.7 37.8996 56.7 20.9996C56.7 20.5996 56.7 19.8996 56.6 19.2996C59.1 17.4996 61.3 15.1996 63 12.6996C60.6 13.7996 58.2 14.3996 55.7 14.6996C58.4 13.0996 60.4 10.5996 61.3 7.59961C58.8 8.99961 56.2 10.0996 53.1 10.6996C50.7 8.19961 47.5 6.59961 43.8 6.59961C36.7 6.59961 30.9 12.3996 30.9 19.4996C30.9 20.4996 31 21.4996 31.2 22.4996C20.9 21.7996 11.5 16.6996 5.1 8.99961C4 10.9996 3.4 13.0996 3.4 15.3996C3.4 19.8996 5.7 23.6996 9.2 25.9996C7.1 25.8996 5.1 25.2996 3.4 24.3996C3.4 24.4996 3.4 24.4996 3.4 24.4996C3.4 30.5996 7.8 35.8996 13.6 37.0996C12.5 37.3996 11.3 37.4996 10.4 37.4996C9.6 37.4996 8.7 37.3996 8 37.1996C9.7 42.2996 14.4 45.9996 20 46.0996C15.6 49.4996 10.1 51.5996 4.2 51.5996C3 51.7996 2 51.5996 1 51.4996C6.4 55.2996 13.1 57.3996 20.3 57.3996Z" />
                                        </svg>
                                    </a>
                                </div> */}
                                {/* instagram logo */}
                                <div className="mr-4 flex justify-center items-center rounded-lg bg-gray-400 hover:bg-[#FB923C] w-[35px] h-[35px]">
                                    <a href="https://www.instagram.com/dakshinicafe/" target='blank'>
                                        <svg fill="#1C2033" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M62.9 19.2C62.8 16 62.2 13.7 61.5 11.6C60.8 9.5 59.7 7.8 58 6.1C56.3 4.4 54.6 3.4 52.6 2.6C50.6 1.8 48.4 1.3 45 1.2C41.5 1 40.5 1 32 1C23.5 1 22.6 1 19.2 1.1C15.8 1.2 13.7 1.8 11.6 2.5C9.5 3.2 7.8 4.4 6.1 6.1C4.4 7.8 3.3 9.5 2.6 11.6C1.8 13.6 1.3 15.8 1.2 19.2C1.1 22.6 1 23.5 1 32C1 40.5 1 41.4 1.1 44.8C1.2 48.2 1.8 50.3 2.5 52.4C3.2 54.5 4.3 56.2 6 57.9C7.7 59.6 9.5 60.7 11.5 61.4C13.5 62.1 15.7 62.7 19.1 62.8C22.5 63 23.4 63 31.9 63C40.4 63 41.3 63 44.7 62.9C48.1 62.8 50.2 62.2 52.3 61.5C54.4 60.8 56.1 59.7 57.8 58C59.5 56.3 60.6 54.5 61.3 52.5C62 50.5 62.6 48.3 62.7 44.9C62.8 41.7 62.8 40.7 62.8 32.2C62.8 23.7 63 22.6 62.9 19.2ZM57.3 44.5C57.2 47.5 56.6 49.1 56.2 50.3C55.6 51.7 54.9 52.8 53.8 53.8C52.7 54.9 51.7 55.5 50.3 56.2C49.2 56.6 47.6 57.2 44.5 57.3C41.3 57.3 40.3 57.3 32.1 57.3C23.9 57.3 22.8 57.3 19.6 57.2C16.6 57.1 15 56.5 13.8 56.1C12.4 55.5 11.3 54.8 10.3 53.7C9.2 52.6 8.6 51.6 7.9 50.2C7.5 49.1 6.9 47.5 6.8 44.4C6.8 41.3 6.8 40.3 6.8 32C6.8 23.7 6.8 22.7 6.9 19.5C7 16.5 7.6 14.9 8 13.7C8.6 12.3 9.3 11.2 10.3 10.2C11.4 9.1 12.4 8.5 13.8 7.9C14.9 7.5 16.5 6.9 19.6 6.8C22.8 6.7 23.8 6.7 32.1 6.7C40.4 6.7 41.4 6.7 44.6 6.8C47.6 6.9 49.2 7.5 50.4 7.9C51.8 8.5 52.9 9.2 53.9 10.2C55 11.3 55.6 12.3 56.3 13.7C56.7 14.8 57.3 16.4 57.4 19.5C57.5 22.7 57.5 23.7 57.5 32C57.5 40.3 57.4 41.3 57.3 44.5Z" /><path d="M32.0016 16.0996C23.1016 16.0996 16.1016 23.2996 16.1016 31.9996C16.1016 40.8996 23.3016 47.8996 32.0016 47.8996C40.7016 47.8996 48.0016 40.8996 48.0016 31.9996C48.0016 23.0996 40.9016 16.0996 32.0016 16.0996ZM32.0016 42.3996C26.2016 42.3996 21.6016 37.6996 21.6016 31.9996C21.6016 26.2996 26.3016 21.5996 32.0016 21.5996C37.8016 21.5996 42.4016 26.1996 42.4016 31.9996C42.4016 37.7996 37.8016 42.3996 32.0016 42.3996Z" /><path d="M48.7 19.1002C50.7435 19.1002 52.4 17.4436 52.4 15.4002C52.4 13.3567 50.7435 11.7002 48.7 11.7002C46.6565 11.7002 45 13.3567 45 15.4002C45 17.4436 46.6565 19.1002 48.7 19.1002Z" />
                                        </svg>
                                    </a>
                                </div>
                                {/* linkedin logo */}
                                {/* <div className="flex justify-center items-center rounded-lg bg-gray-400 hover:bg-[#FB923C] w-[35px] h-[35px]">
                                    <a href="/" target='blank'>
                                        <svg fill="#1C2033" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M58.5016 1H5.60156C3.10156 1 1.10156 3 1.10156 5.5V58.5C1.10156 60.9 3.10156 63 5.60156 63H58.3016C60.8016 63 62.8016 61 62.8016 58.5V5.4C63.0016 3 61.0016 1 58.5016 1ZM19.4016 53.7H10.3016V24.2H19.4016V53.7ZM14.8016 20.1C11.8016 20.1 9.50156 17.7 9.50156 14.8C9.50156 11.9 11.9016 9.5 14.8016 9.5C17.7016 9.5 20.1016 11.9 20.1016 14.8C20.1016 17.7 17.9016 20.1 14.8016 20.1ZM53.9016 53.7H44.8016V39.4C44.8016 36 44.7016 31.5 40.0016 31.5C35.2016 31.5 34.5016 35.3 34.5016 39.1V53.7H25.4016V24.2H34.3016V28.3H34.4016C35.7016 25.9 38.6016 23.5 43.1016 23.5C52.4016 23.5 54.1016 29.5 54.1016 37.7V53.7H53.9016Z" /></svg>
                                    </a>
                                </div> */}
                            </div>
                            {/* icons end */}

                        </div>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default Section;
