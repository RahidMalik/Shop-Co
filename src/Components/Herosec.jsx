import React from 'react'
import Rectangleimg2 from "../images/RectangleCenter.png"
export default function Herosection() {
    return (
        <>
            <div className='relative'>
                <div
                    className="relative bg-cover bg-center h-auto lg:h-[600px] grid grid-cols-1  bg-[#f2f0f1] lg:grid-cols-2 md:grid-cols-2 items-center px-6 lg:px-16 pb-15 pt-8">
                        
                    {/* Left Content */}

                    <div className="text-black space-y-4 order-1">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>
                        <p className="text-sm max-w-lg font-semibold text-gray-500">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <button className="bg-black w-full cursor-pointer md:w-auto text-white px-6 py-3 rounded-full font-medium">
                           Get Started
                        </button>
                    </div>

                    {/* Right Image (will go below on md) */}

                    <div className="relative order-2 lg:order-2 flex justify-center ">
                        <img src={Rectangleimg2} alt="Hero" className="w-full max-w-md" />
                    </div>

                </div>
                <div className='p-4 bg-black absolute bottom-0 z-10 w-full'>
                    <div className='flex  flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-medium'>
                        <h1>VERSACE</h1>
                        <h1>ZARA</h1>
                        <h1>GUCCI</h1>
                        <h1>PRADA</h1>
                        <h1 className='whitespace-nowrap'>CALVIN KLEIN</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
