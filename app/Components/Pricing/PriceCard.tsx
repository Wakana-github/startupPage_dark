import React from 'react'

type Props ={
    time:string;
    price: string;
}

const PriceCard = ({price, time}: Props) => {
  return (
    <div className="bg-white rounded-lg p-8 relative border-t-4 border-rose-300 dark:bg-gray-600">
        <h1 className="text-sky-500 text-xl font-bold dark:text-sky-300">{time} membership</h1>
        <p className="mt-4 text-gray-600 font-medium dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ipsam nam similique sunt totam fugit minus.</p>
        {/* {price} */}
        <div className="mt-8">
            <div className="text-gray-700 font-semibold text-lg dark:text-white">
                <p><span className="text-4xl font-bold text-black dark:text-white">${price}</span> / Month</p>
            </div>
        </div>
        {/* Button */}
        <div className="mt-12">
            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-2.5 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Update Now</span>
            </a>
        </div>
    </div>
  )
}

export default PriceCard