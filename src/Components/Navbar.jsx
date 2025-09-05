import React, { useState } from "react";

export default function Navbar() {
  const [closeBanner, setCloseBanner] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Black Banner */}
      {closeBanner && (
        <div className="bg-black text-white p-3 hidden relative md:flex lg:flex justify-center">
          <p className="text-center text-lg sm:text-sm font-medium">
            Sign up and get 20% off your first order.
            <a className="hover:underline ml-1" href="#">
              Sign Up Now
            </a>
          </p>
          <button
            onClick={() => setCloseBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
      )}

      {/* Navbar */}
      <div className="bg-white lg:px-15 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side: Hamburger (mobile) + Logo */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Hamburger button - mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl flex items-center"
            >
              <ion-icon name={menuOpen ? "close-outline" : "menu-outline"}></ion-icon>
            </button>

            {/* Logo */}
            <h1 className="font-[archivo-black] text-xl md:text-2xl font-black">
              SHOP.CO
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex lg:space-x-6 md:space-x-4 text-black text-sm md:text-base">
              <li className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer whitespace-nowrap">
                Shop
                <ion-icon className="cursor-pointer" name="chevron-down-outline"></ion-icon>
              </li>
              <li className="hover:text-blue-500 cursor-pointer whitespace-nowrap">On Sale</li>
              <li className="hover:text-blue-500 cursor-pointer whitespace-nowrap">New Arrivals</li>
              <li className="hover:text-blue-500 cursor-pointer whitespace-nowrap">Brands</li>
            </ul>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block mx-4 flex-1">
            <div className="bg-[#f0f0f0] rounded-full w-full max-w-[577px] min-w-[200px] pl-3 flex items-center">
              <ion-icon className="text-[#929090] text-lg" name="search-outline"></ion-icon>
              <input
                type="text"
                placeholder="Search for product"
                className="p-2 outline-none w-full max-w-[577px] min-w-[200px] bg-transparent"
              />
            </div>
          </div>

          <div className="flex space-x-3 md:space-x-4 text-xl md:text-2xl items-center">
            <div className="cursor-pointer">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <div className="cursor-pointer">
              <ion-icon name="person-circle-outline"></ion-icon>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 px-2 pb-2">
            <div className="bg-[#f0f0f0] rounded-full w-full max-w-[577px] min-w-[200px] pl-3 flex items-center">
              <ion-icon className="text-[#929090] text-lg" name="search-outline"></ion-icon>
              <input
                type="text"
                placeholder="Search for product"
                className="p-2 outline-none w-full max-w-[577px] min-w-[200px] bg-transparent"
              />
            </div>
            <ul className="flex flex-col space-y-3 text-black">
              <li className="hover:text-blue-500 cursor-pointer py-2 px-1 text-base">Shop</li>
              <li className="hover:text-blue-500 cursor-pointer py-2 px-1 text-base">On Sale</li>
              <li className="hover:text-blue-500 cursor-pointer py-2 px-1 text-base">New Arrivals</li>
              <li className="hover:text-blue-500 cursor-pointer py-2 px-1 text-base">Brands</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}