import React from 'react'
import Image from 'next/image';
import line from "../../public/compressedImages/line.png";
import item1 from "../../public/compressedImages/image1.jpg";
import item2 from "../../public/compressedImages/image2.jpg";
import item3 from "../../public/compressedImages/image3.jpg";
import item4 from "../../public/compressedImages/image4.jpg";

const gallery = () => {
    return (
        <div id='gallery' className='lg:p-40 p-4 lg:py-32 flex justify-center items-center bg-white font-serif'>
            <div className='lg:text-5xl text-4xl'>
                <h1 className='flex justify-center font-bold'>Gallery</h1>
                <div className="flex justify-center m-4">
                    <Image src={line} alt="line" className='w-52'/>
                    </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>

                        <div className="relative flex justify-center items-center w-full">
                            <Image src={item1} alt="Image 1" />
                            <div className="absolute lg:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white text-center text-sm ">Product Description 1</p>
                        </div>
                    </div>

                        <div className="relative  flex justify-center items-center w-full">
                            <Image src={item2} alt="Image 2"  />
                            <div className="absolute lg:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white text-center text-sm ">Product Description 2</p>
                            </div>
                    </div>

                        <div className="relative flex justify-center items-center w-full">
                            <Image src={item3} alt="Image 3"  />
                            <div className="absolute lg:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white text-center text-sm">Product Description 3</p>
                            </div>
                    </div>

                    <div className="relative flex justify-center items-center w-full">
                        <div className="container mx-auto ">
                            <Image src={item4} alt="Image 4" />
                            <div className="absolute lg:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white text-center text-sm">Product Description 4</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default gallery