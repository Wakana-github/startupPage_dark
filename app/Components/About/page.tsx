import Image from 'next/image'
import React from 'react'
import BoxText from '../Helper/BoxText'

const About = () => {
  return (
    <div id="about" className="pt-16 pb-16">
        <div className="w-[80%] mx-auto grid grid-cols1 lg:grid-cols-2 gap-10 items-center">
            {/* Image content */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" >
                <Image src="/images/growth-curve.svg" alt="about" width={450} height={450} />
            </div>

            {/* Text content */}
            <div>
                <BoxText>About Us</BoxText>
                <h1 className="text-2xl sm:text-3al font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem] dark:text-gray-300">Everyting You Need To Grow Your Business</h1>
                <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas quidem dolorem error vero accusamus, architecto pariatur fuga, ipsum sed accusantium ad ea autem? Accusantium eveniet laudantium iure laboriosam reiciendis!</p>
                <button className="mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967]">Learn More &#8594;</button>
                <div className="mt-8 border-1-2 border-gray-200">
                    <div className="ml-6">
                        <p className="text-gray-700 font-medium dark:text-white"> &quot; The many integrations thay can be linked really help me see data from other tools I also use.&quot;</p>
                        <div className="flex items-center space-x-6 mt-6">
                            <Image 
                                src="/images/u1.jpg" 
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full" 
                                />
                            <div>
                                <p className="font-medium dark:text-white">Jessica Doe</p>
                                <p className="text-gray-700 text-sm dark:text-white">Web Developer @TechDev</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About