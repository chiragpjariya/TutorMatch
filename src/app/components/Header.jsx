"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";



const menus  =  ["Home", "Find Tutor", "For Students", "For Tutors", "About", "Contact"]


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <span className="text-black">Tutor</span>
            <span className="text-blue-600">Match</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menus.map(
              (item, index) => {
                const href = item == 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                const isActive = pathname === href || (pathname === "/" && item === "Home");
                return (
                  <Link key={index} href={href} className="relative text-gray-700 font-medium hover:text-blue-600 transition">
                    <span className={`${isActive ? "text-blue-600 font-semibold" : ""}`}>
                      {item}
                    </span>
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></span>
                    )}
                  </Link>
                );
              }
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">
              Log In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-col space-y-4">
            {["Home", "Find a Tutor", "For Students", "For Tutors", "About Us", "Contact"].map(
              (item, index) => (
                <Link key={index} href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="block text-gray-700 hover:text-blue-600 transition">{item}</span>
                </Link>
              )
            )}
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg w-full">
              Log In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
