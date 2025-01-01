"use client"
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi"; // Hamburger and close icons

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 text-white shadow-lg z-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
        {/* Logo */}
        <img
          src="/log.png"
          alt="Logo"
          className="w-40 h-auto rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110"
        />

        {/* Enhanced Search Bar */}
        <div className="w-full sm:w-3/4 lg:w-1/2 mt-6 lg:mt-0">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full p-4 pl-12 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-lg transition-all ease-in-out"
            />
            <AiOutlineSearch className="absolute left-4 text-gray-500" size={20} />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center mt-6 lg:mt-0">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <GiCrossMark size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>

        {/* Navigation Menu (Desktop and Mobile) */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-8 mt-6 lg:mt-0 w-full lg:w-auto items-center`}
        >
          <Link
            href="/products"
            className="relative group text-white font-medium hover:text-pink-500 transition-colors py-2 px-4"
          >
            Products
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="/categories"
            className="relative group text-white font-medium hover:text-pink-500 transition-colors py-2 px-4"
          >
            Categories
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="/about-us"
            className="relative group text-white font-medium hover:text-pink-500 transition-colors py-2 px-4"
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all"></span>
          </Link>
        </nav>

        {/* Account and Cart (Desktop and Mobile) */}
        <div className="flex items-center space-x-6 mt-6 lg:mt-0">
          <Link href="/account" className="flex items-center space-x-2 hover:text-pink-500 transition-colors w-full text-center py-2">
            <FiUser size={20} />
            <span className="hidden sm:block text-lg">Account</span>
          </Link>

          <Link href="/cart" className="relative flex items-center hover:text-pink-500 transition-colors w-full text-center py-2">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-black rounded-full text-xs px-2">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
