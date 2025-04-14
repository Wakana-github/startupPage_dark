import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import Btn_red from './Btn_red';
import Btn_green from './Btn_green';

const Hero = () => {
  return (
    
    <div id="hero" className="relative w-full h-[100vh] sm:h-screen bg-[url('/images/bg_white.png')] bg-cover bg-center flex justify-center flex-col dark:bg-gray-900 dark:bg-none">
        <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
            
                {/* Text Content */}
                <div data-aos="fade-up" >
                    <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950 dark:text-white">
                        Make the Smartest Investment
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem] dark:text-white">
                        Kickstart, Scale, and Theive Faster with <span className="text-rose-700 dark:text-fuchsia-300">TechStar</span></h1>
                    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quas delectus, dignissimos magni assumenda eius ipsam minima vel mollitia incidunt, voluptas, doloribus vitae! A delectus distinctio molestiae maxime perspiciatis minima!
                    </p>
                    {/* Rating */}
                    <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6">
                        <div className="flex items-center space-x-4">
                        <Image 
                            src="/images/google.png" 
                            alt="google" 
                            width={40} 
                            height={40}
                            />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold dark:text-white">
                                        4.5
                                    </h1>
                                    <div className="flex items-center">
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <BsStarHalf className="w-4 h-4 text-yellow-500" />
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base dark:text-white" >Best Rated On Google</p>
                            </div>
                        </div>
                        <div className="flex mt-6 sm:mt-0 items-center space-x-4">
                        <Image 
                            src="/images/linkedin.png" 
                            alt="linkedin" 
                            width={40} 
                            height={40}
                            />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold dark:text-white">
                                        4.7
                                    </h1>
                                    <div className="flex items-center">
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <FaStar className="w-4 h-4 text-yellow-500" />
                                        <BsStarHalf className="w-4 h-4 text-yellow-500" />
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm sm:text-base dark:text-white" >Best Rated On Linkedin</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row w-full md:w-fit items-center space-y-4 sm:space-y-0 sm:space-x-4 dark:bg-gray-900">
                    <Btn_red />
                    <Btn_green />
                    </div>
                </div>
                {/* Image Content */}
                <div data-aos="fade-down" data-aos-delay="150" className="mx-auto hidden dark:bg-gray-400 dark:rounded-md xl:block ">
                    <Image src="/images/stepping-up.svg" alt="image" width={500} height={500} />
                </div>
            
        </div>
    </div>
  )
}

export default Hero