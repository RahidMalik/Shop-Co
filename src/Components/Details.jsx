import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Star, Minus, Plus } from "lucide-react";
import { products } from "../data/productsData";
import { useCartStore } from "../store/DataStore";

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#6B7B3A");
  const [selectSize, setSelectSize] = useState("Large");
  const [count, setCount] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return <h1 className="p-6 text-red-500">Product not found!</h1>;

  const totalPrice = product.price * count;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <button className="hover:text-gray-900">Home</button>
        <ChevronRight className="w-4 h-4" />
        <button className="hover:text-gray-900">Shop</button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col md:space-y-3 space-x-3 md:space-x-0 mt-4 md:mt-0">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`w-20 h-20 rounded-lg border-2 cursor-pointer overflow-hidden ${
                  selectedImage === index
                    ? "border-black"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="sm:w-[400px] h-80 w-full bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
            <span className="text-sm text-gray-600">4.5/5</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold">${totalPrice}</span>
            <span className="text-xl text-gray-400 line-through">$40</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
              -20%
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Colors */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Select Colors</h3>
            <div className="flex space-x-3">
              {["#6B7B3A", "#2D5016", "#1E3A8A"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Choose Size</h3>
            <div className="flex space-x-2 flex-wrap">
              {["Small", "Medium", "Large", "Xlarge"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectSize(size)}
                  className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-medium ${
                    selectSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-full">
              <button
                onClick={() => setCount(Math.max(1, count - 1))}
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 min-w-[50px] text-center">{count}</span>
              <button
                onClick={() => setCount(Math.min(10, count + 1))}
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => {
                addToCart({
                  ...product,
                  qty: count,
                  color: selectedColor,
                  size: selectSize,
                });
                navigate("/Addtocart");
              }}
              className="flex-1 bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
