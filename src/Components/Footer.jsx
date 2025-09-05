import React from 'react'
import img1 from '../images/master.png';
import img2 from '../images/visa.png';
import img3 from '../images/applepay.png';
import img4 from '../images/Gpay.png';
import img5 from '../images/paypal.png';

export default function Footer() {
    return (
        <>
            <div className="border border-white relative ">
                {/* FOOTER CONTENT */}
                <div className="mt-60 md:mt-40 pt-24 px-3 sm:px-13 bg-[#f0f0f0]">
                    {/* SHOP.CO (Mobile only) */}
                    <div className="sm:flex flex-col md:hidden lg:hidden mb-4">
                        <div className='btn'>
                            <h1 className="text-2xl pb-3 cursor-pointer">SHOP.CO</h1>
                        </div>
                        <div className="text-sm font-sans text-gray-500 pb-4">
                            <p>
                                We have clothes that suits your style and which you’re proud to
                                wear. From women to men.
                            </p>
                        </div>
                        <div className="flex gap-2 text-xl cursor-pointer">
                            <ion-icon name="logo-twitter"></ion-icon>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-github"></ion-icon>
                        </div>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 py-4">
                        {/* SHOP.CO (Desktop + Tablet) */}
                        <div className="hidden md:flex flex-col">
                            <div className='btn'>
                                <h1 className="text-2xl pb-3 cursor-pointer">SHOP.CO</h1>
                            </div>
                            <div className="text-sm font-sans text-gray-500 pb-6">
                                <p>
                                    We have clothes that suits your style and which you’re proud
                                    to wear. From women to men.
                                </p>
                            </div>
                            <div className="flex gap-2 text-xl cursor-pointer">
                                <ion-icon name="logo-twitter"></ion-icon>
                                <ion-icon name="logo-facebook"></ion-icon>
                                <ion-icon name="logo-instagram"></ion-icon>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                        </div>

                        {/* COLUMNS */}
                        <div>
                            <h1 className="font-semibold">C O M P A N Y</h1>
                            <p className="text-sm text-gray-500 my-3">About</p>
                            <p className="text-sm text-gray-500 my-3">Features</p>
                            <p className="text-sm text-gray-500 my-3">Works</p>
                            <p className="text-sm text-gray-500 my-3">Career</p>
                        </div>

                        <div>
                            <h1 className="font-semibold">H E L P</h1>
                            <p className="text-sm text-gray-500 my-3">Customer Support</p>
                            <p className="text-sm text-gray-500 my-3">Delivery Details</p>
                            <p className="text-sm text-gray-500 my-3">Terms & Conditions</p>
                            <p className="text-sm text-gray-500 my-3">Privacy Policy</p>
                        </div>

                        <div>
                            <h1 className="font-semibold">F A Q</h1>
                            <p className="text-sm text-gray-500 my-3">Account</p>
                            <p className="text-sm text-gray-500 my-3">Manage Delivery</p>
                            <p className="text-sm text-gray-500 my-3">Order</p>
                            <p className="text-sm text-gray-500 my-3">Payment</p>
                        </div>

                        <div>
                            <h1 className="font-semibold">R E S O U R C E S</h1>
                            <p className="text-sm text-gray-500 my-3">Free eBook</p>
                            <p className="text-sm text-gray-500 my-3">
                                Development Tutorial
                            </p>
                            <p className="text-sm text-gray-500 my-3">How to - Blog</p>
                            <p className="text-sm text-gray-500 my-3">Youtube Playlist</p>
                        </div>
                    </div>

                    <div className="py-5 text-gray-300">
                        <hr />
                    </div>

                    {/* Copyright claim  */}

                    <div className='grid grid-cols-1 lg:grid-cols-2 pb-8 pt-4 items-center'>
                        <div className='text-sm text-gray-500 flex lg:justify-start font-serif justify-center'>
                            <p>© 2000-2021, All rights reserved</p>
                        </div>
                        <div className='flex justify-center py-4 lg:py-0 lg:justify-end'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                        </div>
                    </div>

                </div>

                {/* EMAIL SUBSCRIBE */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-black px-6 sm:px-10 py-10 rounded-2xl gap-6 items-center">
                        {/* Text */}
                        <div className="text-lg sm:text-2xl font-extrabold leading-tight text-white">
                            <h1>
                                STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                            </h1>
                        </div>

                        {/* Input */}
                        <div className="w-full">
                            <div className="relative flex items-center bg-white rounded-full overflow-hidden">
                                {/* Icon */}
                                <span className="absolute left-4 top-3 text-gray-500 text-lg">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </span>

                                {/* Input */}
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full pl-10 pr-4 py-3 rounded-full outline-none text-gray-700"
                                />
                            </div>
                            <button className='py-3 justify-center mt-4 flex items-center bg-white w-full rounded-full overflow-hidden font-bold leading-tight'>
                                Subscribe For Newsletter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
