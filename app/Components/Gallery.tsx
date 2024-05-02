import React from 'react'

const gallery = () => {
    return (
        <div id='gallery' className='py-32 flex justify-center items-center bg-white font-serif'>
            <div className='md:text-5xl text-4xl'>
                <h1 className='flex justify-center font-bold'>Gallery</h1>
                <div className='flex justify-center mb-4'>
                    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        width="90px" height="80px" viewBox="0 0 312.05 312.05">

                        <g>
                            <g>
                                <path d="M232.01,99.367c-29.426,0-53.662,22.541-56.384,51.258h-41.9c-2.732-28.717-26.963-51.258-56.386-51.258
			c-29.42,0-53.66,22.541-56.384,51.258H5.4c-2.984,0-5.4,2.42-5.4,5.4c0,2.979,2.416,5.399,5.4,5.399h15.557
			c2.734,28.72,26.969,51.258,56.384,51.258c29.418,0,53.66-22.538,56.381-51.258h41.905c2.731,28.72,26.958,51.258,56.384,51.258
			s53.652-22.538,56.389-51.258h18.252c2.979,0,5.399-2.421,5.399-5.399c0-2.98-2.42-5.4-5.399-5.4h-18.252
			C285.663,121.908,261.431,99.367,232.01,99.367z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>

                        <div className="relative flex justify-center items-center w-[550px]">
                            <img src='/image1.JPG' alt="Image 1" />
                            <div className="absolute md:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white text-center text-sm ">Product Description 1</p>
                        </div>
                    </div>

                        <div className="relative  flex justify-center items-center w-[550px]">
                            <img src='/image2.JPG' alt="Image 2"  />
                            <div className="absolute md:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white text-center text-sm ">Product Description 2</p>
                            </div>
                    </div>

                        <div className="relative flex justify-center items-center w-[550px]">
                            <img src='/image3.JPG' alt="Image 3"  />
                            <div className="absolute md:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white text-center text-sm">Product Description 3</p>
                            </div>
                    </div>

                    <div className="relative flex justify-center items-center w-[550px]">
                        <div className="container mx-auto ">
                            <img src='/image4.JPG' alt="Image 4" />
                            <div className="absolute md:inset-4 inset-2 flex justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300">
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