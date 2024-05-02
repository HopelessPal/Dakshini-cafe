"use client"
import a from 'next/link';
import React, { useState, useEffect } from 'react'

const Navbar = () => {

    const [isClick, setisClick] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div>
            <nav
                className={`fixed w-full z-10 top-1${scrollY > 0 ? 'transition-all duration-600 ease-in-out top-0 text-black bg-[#FB923C]' : ''
                    }`}
            >
                <div className='max-w-7xl mx-auto px-4 sw-px-6 lg:px-8 '>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <img src="./compressedImages/logo-cropped.png" alt="logo" className='h-10' />
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-8'>
                                <ul className='flex text-white'>
                                    <li className='nav-item'><a href="/" className='nav_link'>Home</a></li>
                                    <li className='nav-item'><a href="/" className='nav_link'>About</a></li>
                                    <li className='nav-item'><a href="/" className='nav_link'>Gallery</a></li>
                                    <li className='nav-item'><a href="/" className='nav_link'>Menu</a></li>
                                    <li className='nav-item'><a href="/" className='nav_link'>Updates</a></li>
                                    <li className='nav-item'><a href="/" className='nav_link'>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button
                                className='transition-all duration-300 ease-out -flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none ' onClick={toggleNavbar}
                            >
                                {/* svg */}
                                {isClick ? (
                                    // cross
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8L8 16M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                ) :
                                    // hamburger
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className='md:hidden flex justify-center bg-slate-800'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <a href="#about" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>About</a>
                            <a href="#gallery" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Gallery</a>
                            <a href="#menu" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Menu</a>
                            <a href="#updates" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Updates</a>
                            <a href="#contact" className='text-white block hover:bg-white hover:text-black p-2'>Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar