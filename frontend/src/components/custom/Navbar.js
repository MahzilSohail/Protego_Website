"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { IoSearch, IoBagOutline } from "react-icons/io5";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantity, setIsCartOpen } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    const text = query.toLowerCase().trim();
    if (!text) return;

    if (text.includes("pro")) {
      router.push("/Promodel/");
    } else if (text.includes("lite")) {
      router.push("/Litemodel/");
    } else if (text.includes("std") || text.includes("student")) {
      router.push("/Stdmodel/");
    } else {
      router.push(`/search?query=${text}`);
    }

    setShowSearch(false);
    setQuery("");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-7 py-2 flex justify-between items-center">

        {/* Logo */}
        <img src="/logo.jpg" className="w-16 h-16 rounded-full hidden md:block" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">

          <li className="hover:text-blue-900">
            <Link href="/">Home</Link>
          </li>

          <li
            className="relative cursor-pointer hover:text-blue-900"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center">
              Categories <FaChevronDown size={14} className="ml-1" />
            </div>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
                <li><Link href="/Promodel/" className="px-4 py-2 hover:bg-gray-100">Pro Model</Link></li>
                <li><Link href="/Litemodel/" className="px-4 py-2 hover:bg-gray-100">Lite Model</Link></li>
                <li><Link href="/Stdmodel/" className="px-4 py-2 hover:bg-gray-100">Student Model</Link></li>
              </ul>
            )}
          </li>

          <Link href="/Aboutus/" className="hover:text-blue-900">About Us</Link>
          <Link href="/Contact/" className="hover:text-blue-900">Contact Us</Link>

          {/* Search Icon */}
          <li className="hover:text-blue-900">
            <IoSearch
              className="cursor-pointer text-2xl"
              onClick={() => setShowSearch(!showSearch)}
            />
          </li>

          {/* Account */}
          <li className="hover:text-blue-900">
            <Link href="/Signin/">
              <VscAccount className="cursor-pointer text-2xl" />
            </Link>
          </li>

          {/* Cart */}
          <li className="relative hover:text-blue-900">
            <IoBagOutline
              onClick={() => setIsCartOpen(true)}
              className="cursor-pointer text-2xl"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full px-1.5 py-0.5">
                {totalQuantity}
              </span>
            )}
          </li>
        </ul>

        {/* Search Bar for Desktop */}
        {showSearch && (
          <div className="absolute top-full left-0 w-full bg-white p-3 shadow-md flex items-center justify-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-3/4 p-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <button
              onClick={handleSearch}
              className="ml-3 px-4 py-2 bg-blue-900 text-white rounded-md"
            >
              Search
            </button>
          </div>
        )}

        {/* mobile menu */}
        <div className="flex items-center justify-between w-full md:hidden px-4 py-2 bg-white shadow-sm">
          {/* Left: Menu Button */}
          <button
            className="text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Center: Logo */}
          <div className="grid grid-cols-1">
            <span className="text-[22px] font-bold text-blue-900 flex justify-center items-center">PROTEGO</span>
            <span className="text-[16px] text-blue-900">Protection on the Go </span>
            {/* <img
              src="/logo.jpg"
              alt="Protego"
              className="w-14 h-14 rounded-full"
            /> */}
          </div>

          {/* Right: Search & Cart Icons */}
          <div className="flex items-center space-x-4 text-gray-700">
            <IoSearch
              size={22}
              className="cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />
            <Link href={"/Signin/"}>
              <VscAccount className="cursor-pointer text-2xl" /></Link>
            <IoBagOutline
              size={22}
              className="cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            />
          </div>
          {showSearch && (
            <div className="absolute top-full left-0 w-full bg-white p-3 shadow-md flex items-center justify-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-3/4 p-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button
                onClick={handleSearch}
                className="ml-3 px-4 py-2 bg-blue-900 text-white rounded-md"
              >
                Search
              </button>
            </div>
          )}

        </div>

        {/* Mobile Side Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold text-blue-900">Menu</h2>
            <FaTimes
              size={22}
              className="cursor-pointer text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <ul className="flex flex-col text-gray-700 font-medium mt-4">
            <Link href="/" className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Home</Link>

            <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full"
              >
                Categories
                <FaChevronDown
                  size={14}
                  className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-1">
                  <li><Link href={"/Promodel/"} className="py-1 px-2 hover:text-blue-700 cursor-pointer">
                    Pro Model
                  </Link></li>
                  <li><Link href={"/Litemodel/"} className="py-1 px-2 hover:text-blue-700 cursor-pointer">Lite Model</Link></li>
                  <li><Link href={"/Stdmodel/"} className="py-1 px-2 hover:text-blue-700 cursor-pointer">Student Model</Link></li>
                </ul>
              )}
            </li>

            <Link href={"/Aboutus/"} className="px-6 py-2 hover:bg-gray-100 cursor-pointer">About Us</Link>
            <Link href={"/Contact/"} className="px-6 py-2 hover:bg-gray-100 cursor-pointer">
              Contact Us
            </Link>
          </ul>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
