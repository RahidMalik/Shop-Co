import React from 'react';
import img1 from '../images/imagb1.png';
import img2 from '../images/imagb2.png';
import img3 from '../images/imagb3.png';
import img4 from '../images/imagb4.png';
export default function BrowseByStyle() {
    return (
        <div className='flex  justify-center items-center'>
            <div className="max-w-6xl font-sans">
                {/* Title */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">
                        BROWSE BY DRESS STYLE
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="bg-[#f0f0f0] rounded-3xl p-6 sm:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">

                        {/* Casual */}
                        <div className="col-span-1 relative group cursor-pointer">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg h-full">
                                <img
                                    src={img1}
                                    alt="Casual wear collection"
                                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-black text-xl font-semibold">Casual</span>
                                </div>
                            </div>
                        </div>

                        {/* Formal */}
                        <div className="col-span-1 md:col-span-2 relative group cursor-pointer">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg h-full">
                                <img
                                    src={img3}
                                    alt="Formal wear collection"
                                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-black text-xl font-semibold">Formal</span>
                                </div>
                            </div>
                        </div>

                        {/* Party */}
                        <div className="col-span-1 md:col-span-2 relative group cursor-pointer">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg h-full">
                                <img
                                    src={img2}
                                    alt="Party wear collection"
                                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-black text-xl font-semibold">Party</span>
                                </div>
                            </div>
                        </div>

                        {/* Gym */}
                        <div className="col-span-1 relative group cursor-pointer">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg h-full">
                                <img
                                    src={img4}
                                    alt="Gym wear collection"
                                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-black text-xl font-semibold">Gym</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

