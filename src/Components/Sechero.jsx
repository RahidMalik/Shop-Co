import React from 'react'
import img1 from '../images/Frameone.png'
import img2 from '../images/Frametwo.png'
import img3 from '../images/Framethree.png'
import img4 from '../images/Framefour.png'

export default function Srchero() {
    return (
        <>
            <div className='bg-white font-bold leading-tight sm:p-6 text-xl sm:text-2xl lg:text-3xl flex justify-center items-center'>
                <h1>TOP SELLING</h1>
            </div>
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8'>

                    {/* Product Card 1 */}

                    <div className='w-full'>
                        <div className='aspect-[4/5] w-full  overflow-hidden rounded-xl'>
                            <img className='w-full h-full object-cover' src={img1} alt="T-Shirt With Tape Details" />
                        </div>
                        <h1 className='mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-bold leading-tight'>T-Shirt With Tape Details</h1>
                        <div className='flex items-center space-x-1 sm:space-x-2 mt-2'>
                            <div className='flex space-x-1'>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                            </div>
                            <div className='flex ml-2 sm:ml-3 text-xs sm:text-sm font-medium leading-tight'>
                                <p>5.0/</p><p className='text-gray-400'>5</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 2 */}

                    <div className='w-full'>
                        <div className='aspect-[4/5] cursor-pointer w-full overflow-hidden rounded-xl'>
                            <img className='w-full h-full object-cover' src={img2} alt="T-Shirt With Tape Details" />
                        </div>
                        <h1 className='mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-bold leading-tight'>T-Shirt With Tape Details</h1>
                        <div className='flex items-center space-x-1 sm:space-x-2 mt-2'>
                            <div className='flex space-x-1'>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                            </div>
                            <div className='flex ml-2 sm:ml-3 text-xs sm:text-sm font-medium leading-tight'>
                                <p>5.0/</p><p className='text-gray-400'>5</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 3 */}

                    <div className='w-full'>
                        <div className='aspect-[4/5] cursor-pointer w-full overflow-hidden rounded-xl'>
                            <img className='w-full h-full object-cover' src={img3} alt="T-Shirt With Tape Details" />
                        </div>
                        <h1 className='mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-bold leading-tight'>T-Shirt With Tape Details</h1>
                        <div className='flex items-center space-x-1 sm:space-x-2 mt-2'>
                            <div className='flex space-x-1'>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                            </div>
                            <div className='flex ml-2 sm:ml-3 text-xs sm:text-sm font-medium leading-tight'>
                                <p>5.0/</p><p className='text-gray-400'>5</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 4 */}

                    <div className='w-full'>
                        <div className='aspect-[4/5] cursor-pointer w-full overflow-hidden rounded-xl'>
                            <img className='w-full h-full object-cover' src={img4} alt="T-Shirt With Tape Details" />
                        </div>
                        <h1 className='mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-bold leading-tight'>T-Shirt With Tape Details</h1>
                        <div className='flex items-center space-x-1 sm:space-x-2 mt-2'>
                            <div className='flex space-x-1'>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                                <ion-icon className="text-yellow-500 text-sm sm:text-base" name="star-sharp"></ion-icon>
                            </div>
                            <div className='flex ml-2 sm:ml-3 text-xs sm:text-sm font-medium leading-tight'>
                                <p>5.0/</p><p className='text-gray-400'>5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex justify-center pb-10'>
                    <button className='border px-20 cursor-pointer p-3 flex items-center justify-center rounded-full'>View All</button>
                </div>
            </div>
        </>
    )
}