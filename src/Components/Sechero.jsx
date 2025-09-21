import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/productsData";

export default function Srchero() {
    const navigate = useNavigate();
    const srcheroProducts = products.filter((p) => p.id >= 5 && p.id <= 8); // ✅ sirf 5-8

    return (
        <>
            <div className="bg-white font-bold leading-tight sm:p-6 text-xl sm:text-2xl lg:text-3xl flex justify-center items-center">
                <h1>TOP SELLING</h1>
            </div>

            <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                    {srcheroProducts.map((product) => (
                        <div key={product.id} className="w-full">
                            <div className="aspect-[4/5] cursor-pointer w-full overflow-hidden rounded-xl">
                                <img
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    className="w-full h-full object-cover"
                                    src={product.images[0]}   // ✅ yahan change kiya
                                    alt={product.title}
                                />
                            </div>
                            <h1 className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-bold leading-tight">
                                {product.title}
                            </h1>
                            <div className="flex items-center space-x-1 sm:space-x-2 mt-2">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <ion-icon
                                            key={i}
                                            className="text-yellow-500 text-sm sm:text-base"
                                            name="star-sharp"
                                        ></ion-icon>
                                    ))}
                                </div>
                                <div className="flex ml-2 sm:ml-3 text-xs sm:text-sm font-medium leading-tight">
                                    <p>5.0/</p>
                                    <p className="text-gray-400">5</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white flex justify-center pb-10">
                    <button className="border px-20 cursor-pointer p-3 flex items-center justify-center rounded-full">
                        View All
                    </button>
                </div>
            </div>
        </>
    );
}
