import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [closeBanner, setCloseBanner] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Check for logged in user on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUserIconClick = () => {
    if (currentUser) {
      setUserDropdown(!userDropdown);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setUserDropdown(false);
    navigate("/");
  };

  const handleProfile = () => {
    setUserDropdown(false);
    // Navigate to profile page (you can create this route)
    alert("Profile page coming soon!");
  };

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
            <h1 onClick={() => navigate("/")}
              className="font-[archivo-black] cursor-pointer text-xl md:text-2xl font-black">
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
            {/* Cart Icon */}
            <div className="cursor-pointer">
              <ion-icon name="cart-outline"
                onClick={() => navigate("/Addtocart")} ></ion-icon>
            </div>

            {/* User Icon with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="cursor-pointer flex items-center space-x-2">
                <ion-icon
                  onClick={handleUserIconClick}
                  name="person-circle-outline"
                ></ion-icon>
                {/* Show user name on desktop if logged in */}
                {currentUser && (
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {currentUser.name}
                  </span>
                )}
              </div>

              {/* User Dropdown Menu */}
              {userDropdown && currentUser && (
                <div className="absolute right-0 top-full mt-2 w-55 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {/* User Info Header */}
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{currentUser.name}</p>
                        <p className="text-sm text-gray-600">{currentUser.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <button
                      onClick={handleProfile}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <ion-icon name="person-outline"></ion-icon>
                      <span className="text-lg">My Profile</span>
                    </button>

                    <button
                      onClick={() => {
                        setUserDropdown(false);
                        navigate("/Addtocart");
                      }}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <ion-icon name="bag-outline"></ion-icon>
                      <span className="text-lg">My Orders</span>
                    </button>

                    <button
                      onClick={() => {
                        setUserDropdown(false);
                        alert("Settings page coming soon!");
                      }}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <ion-icon name="settings-outline"></ion-icon>
                      <span className="text-lg">Settings</span>
                    </button>

                    {/* Divider */}
                    <div className="border-t border-gray-100 my-2"></div>

                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    >
                      <ion-icon name="log-out-outline"></ion-icon>
                      <span className="text-lg">Logout</span>
                    </button>
                  </div>

                  {/* User Stats (Optional) */}
                  <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                    <p className="text-xs text-gray-500">
                      Member since {new Date(currentUser.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}
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

            {/* Mobile User Info */}
            {currentUser && (
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex items-center justify-between px-1 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{currentUser.name}</p>
                      <p className="text-xs text-gray-600">{currentUser.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 text-sm font-medium hover:text-red-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}