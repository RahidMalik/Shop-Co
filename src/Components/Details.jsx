import { create } from 'zustand';
import React, { useState } from 'react';
import { ChevronRight, Star, Minus, Plus } from 'lucide-react';
import img1 from "../images/detl1.png"
import img3 from "../images/detl3.png"
import img4 from "../images/delt4.png"
import { useNavigate } from 'react-router-dom';




const useCartStore = create(set => ({
    count: 1,
    increase: () => set(state => ({ count: Math.min(10, state.count + 1) })),
    decrease: () => set(state => ({ count: Math.max(1, state.count - 1) }))
}));

export default function ProductDetailPage() {

    const navigate = useNavigate()
    // Quintity 1 to 10 max
    const { count, increase, decrease } = useCartStore();

    // images concept 

    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        img1, img3, img4
    ];
    const handleImageClick = (index) => {
        setSelectedImage(index)
    }

    // select color 
    const [selectedColor, setSelectedColor] = useState('#6B7B3A');

    const [selectsize, setselectsize] = useState("large");


    // price management 

    const baseprice = 24

    const totalprce = baseprice * count;


    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                <button className="hover:text-gray-900 transition-colors">Home</button>
                <ChevronRight className="w-4 h-4" />
                <button className="hover:text-gray-900 transition-colors">Shop</button>
                <ChevronRight className="w-4 h-4" />
                <button className="hover:text-gray-900 transition-colors">Men</button>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900">T-shirts</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images */}
                <div className="flex flex-col-reverse md:flex-row gap-4">
                    {/* Thumbnail Images */}
                    <div className="flex  md:flex-col md:space-y-3 space-x-3 md:space-x-0 mt-4 md:mt-0">
                        {/* First Thumbnail */}
                        <div
                            className={`w-30 h-25 rounded-lg border-2 cursor-pointer overflow-hidden ${selectedImage === 0 ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                                }`}
                            onClick={() => handleImageClick(0)}
                        >
                            <img
                                src={images[0]}
                                alt="Product view 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div
                            className={`w-30 h-25 rounded-lg border-2 cursor-pointer overflow-hidden ${selectedImage === 1 ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                                }`}
                            onClick={() => handleImageClick(1)}
                        >
                            <img
                                src={images[1]}
                                alt="Product view 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Third Thumbnail */}
                        <div
                            className={`w-30 h-25 rounded-lg border-2 cursor-pointer overflow-hidden ${selectedImage === 2 ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                                }`}
                            onClick={() => handleImageClick(2)}
                        >
                            <img
                                src={images[2]}
                                alt="Product view 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="flex-1">
                        <div className="sm:w-[400px] h-80 w-full bg-gray-100 rounded-lg overflow-hidden">
                            <img src={images[0]}

                                alt="ONE LIFE GRAPHIC T-SHIRT"
                                className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    {/* Product Title and Rating */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            ONE LIFE GRAPHIC T-SHIRT
                        </h1>
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
                            </div>
                            <span className="text-sm text-gray-600">4.5/5</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold text-gray-900">${totalprce}</span>
                        <span className="text-xl text-gray-400 line-through">$300</span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                            -40%
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                        breathable fabric, it offers superior comfort and style.
                    </p>

                    {/* Color Selection */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Select Colors</h3>
                        <div className="flex space-x-3">
                            <button onClick={() => setSelectedColor('#6B7B3A')}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === '#6B7B3A' ? 'border-black' : 'border-gray-300 hover:border-gray-400 transition-all duration-200'
                                    }`}
                                style={{ backgroundColor: '#6B7B3A' }}
                                title="Olive"
                            />
                            <button onClick={() => setSelectedColor('#2D5016')}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === '#2D5016' ? 'border-black' : 'border-gray-300 hover:border-gray-400 transition-all duration-200'}`}
                                style={{ backgroundColor: '#2D5016' }}
                                title="Forest"
                            />
                            <button onClick={() => setSelectedColor('#1E3A8A')}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === '#1E3A8A' ? 'border-black' : 'border-gray-300 hover:border-gray-400 transition-all duration-200'}`}
                                style={{ backgroundColor: '#1E3A8A' }}
                                title="Navy"
                            />
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Choose Size</h3>
                        <div className="flex space-x-2 flex-wrap">
                            <button
                                onClick={() => setselectsize("Small")}
                                className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-medium ${selectsize === "Small"
                                    ? "bg-black text-white border-black transition-all duration-100"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                Small
                            </button>

                            <button
                                onClick={() => setselectsize("Medium")}
                                className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-medium ${selectsize === "Medium"
                                    ? "bg-black text-white border-black transition-all duration-100"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                Medium
                            </button>
                            <button
                                onClick={() => setselectsize("large")}
                                className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-medium ${selectsize === "large"
                                    ? "bg-black text-white border-black transition-all duration-200"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                Large
                            </button>
                            <button
                                onClick={() => setselectsize("Xlarge")}
                                className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-medium ${selectsize === "Xlarge"
                                    ? "bg-black text-white border-black transition-all duration-200"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                X-Large
                            </button>
                        </div>
                    </div>


                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center space-x-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center bg-gray-100 rounded-full">
                            <button onClick={decrease} className="p-2 hover:bg-gray-200 rounded-full">
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 min-w-[50px] text-center">{count}</span>
                            <button onClick={increase} className="p-2 hover:bg-gray-200 rounded-full">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button onClick={() => navigate('/Addtocart')}
                            className="flex-1 bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-colors font-medium">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
