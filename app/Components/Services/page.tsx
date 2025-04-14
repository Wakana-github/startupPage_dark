import React from 'react'
import BoxText from '../Helper/BoxText'
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { IoColorPaletteOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <div id="services" className="pt-16 pb-16 ">
        <div className="w-[80%] mx-auto">
            <BoxText>Our Servises</BoxText>
            {/* heading */}
            <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-300">Our Services Are Made For You</h1>
            {/* description */}
            <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:e-[60%] xl:w-[50%] text-gray-600 dark:text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus fugit eos maxime consectetur vero, fuga quod officia autem, laborum quia ullam nesciunt aperiam non nobis quis. Molestias alias aspernatur laudantium?
            </p>
            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
                {/* 1st service */}
                <div 
                    data-aos="fade-right" 
                    data-aos-anchor-placement="top-center" 
                    className="flex items-center space-x-5"
                >
                    {/* icon */}
                    <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-300 bg-opacity-20 dark:bg-orange-300">
                        <FaRocket className="w-6 h-6 text-blue-600 dark:text-blue-700"/>
                    </div>
                    {/* Text Content */}
                    <div>
                        <p className="text-lg font-bold text-gray-700 dark:text-gray-400">Start Up</p>
                        <p className="text-sm text-gray-600 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                  {/* 2st service */}
                  <div 
                    data-aos="fade-left" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="100"
                    className="flex items-center space-x-5"
                    >
                    {/* icon */}
                    <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-300 bg-opacity-20 dark:bg-orange-300">
                        <FaBriefcase className="w-6 h-6 text-blue-600 dark:text-blue-700"/>
                    </div>
                    {/* Text Content */}
                    <div>
                        <p className="text-lg font-bold text-gray-700 dark:text-gray-400">Bussiness</p>
                        <p className="text-sm text-gray-600 dark:text-white ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                  {/* 3rd service */}
                  <div 
                    data-aos="fade-left" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="200"
                    className="flex items-center space-x-5"
                    >
                    {/* icon */}
                    <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-300 bg-opacity-20 dark:bg-orange-300">
                        <FaShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-700"/>
                    </div>
                    {/* Text Content */}
                    <div>
                        <p className="text-lg font-bold text-gray-700 dark:text-gray-400">E-commerce</p>
                        <p className="text-sm text-gray-600 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                  {/* 4th service */}
                  <div 
                    data-aos="fade-left" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="300"
                    className="flex items-center space-x-5"
                    >
                    {/* icon */}
                    <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-300 bg-opacity-20 dark:bg-orange-300">
                        <MdOutlineDesignServices className="w-6 h-6 text-blue-600 dark:text-blue-700"/>
                    </div>
                    {/* Text Content */}
                    <div>
                        <p className="text-lg font-bold text-gray-700 dark:text-gray-400">Digital Design</p>
                        <p className="text-sm text-gray-600 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                  {/* 5th service */}
                  <div 
                    data-aos="fade-left" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="400"
                    className="flex items-center space-x-5"
                    >
                    {/* icon */}
                    <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-300 bg-opacity-20 dark:bg-orange-300">
                        <IoColorPaletteOutline className="w-6 h-6 text-blue-600 dark:text-blue-700"/>
                    </div>
                    {/* Text Content */}
                    <div>
                        <p className="text-lg font-bold text-gray-700 dark:text-gray-400">Unlimited colors</p>
                        <p className="text-sm text-gray-600 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>

                  {/* 6th service */}
                  <div 
                    data-aos="fade-left" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="500"
                    className="flex items-center space-x-5"
                    >
                    {/* icon */}
                    <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-300 bg-opacity-20 dark:bg-orange-300">
                        <FaChess className="w-6 h-6 text-blue-600 dark:text-blue-700"/>
                    </div>
                    {/* Text Content */}
                    <div>
                        <p className="text-lg font-bold text-gray-700 dark:text-gray-400">Strategy Solution</p>
                        <p className="text-sm text-gray-600 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services