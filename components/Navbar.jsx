// components/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 z-50 shadow-md fixed top-0 left-0 w-full  p-4">
      <div className="max-container px-0 lg:px-20 flex justify-between items-center">
        <Link href="/">
          <img
            src="/JoshiTourandTravels.png"
            alt="Joshi Tour and Travels"
            className="w-48 object-cover lg:w-60"
          />
        </Link>
        <a href="tel:+918393986577">
          <button className="px-4 py-2 font-semibold hover:text-[#F89339] text-white lg:text-[18px] transition-all bg-[#F89339] rounded-[8px]  hover:bg-white">
            Call Now
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
