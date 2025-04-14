import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="footer" className="pt-16 pb-16">
        <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* 1st part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold"> Solution</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    Enterprice
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    By Work flow
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    By Team
                </p>
            </div>
                {/* 2nd part */}
                <div className="space-y-5">
                <h1 className="text-lg font-bold"> Company</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    About Us
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    News & Press
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    Our Customer
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    Leadership
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    Careers
                </p>
            </div>
            {/* 3rd part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Resources</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    Blog
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    Webinar & Events
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    podcast
                </p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 dark:text-white">
                    E-book & Guides
                </p>
            </div>
             {/* 4th part */}
             <div className="space-y-5">
                <h1 className="text-lg font-bold dark:text-white">Contact Us</h1>
                <div className="mt-6">
                    <h1 className="text-sm text-gray-600 dark:text-white">Our Mobile Number</h1>
                    <h1 className="text-base font-bold text-blue-950 mt-1 dark:text-sky-200">
                        +0123 456 789
                    </h1>
                </div>
                <div className="mt-6">
                    <h1 className="text-sm text-gray-600 dark:text-white">Our Email</h1>
                    <h1 className="text-base font-bold text-blue-950 mt-1 dark:text-sky-200">
                        example@gmail.com
                    </h1>
                </div>
            </div>
        </div>
        {/* bottom part */}
        <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center texr-gray-600 text-sm">
            <p className="text-center md:text-left">
                Copuright @ 2024 Webdev. All rights reserved
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span>Social : </span>
                <span className="text-gray-500 hover:text-gray-800 dark:text-gray-100 dark:hover:text-amber-200">
                    <FaFacebook />
                </span>
                <span className="text-gray-500 hover:text-gray-800 dark:text-gray-100 dark:hover:text-amber-200">
                    <FaTwitter />
                </span>
                <span className="text-gray-500 hover:text-gray-800 dark:text-gray-100 dark:hover:text-amber-200">
                    <FaDribbble />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer