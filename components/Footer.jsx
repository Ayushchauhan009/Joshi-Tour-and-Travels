// Footer.js

import React from "react";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="custom-background text-white py-8">
      <div className="container max-container px-4 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex w-full lg:w-auto  justify-between  mb-5 lg:mb-0 items-center">
            <Link href="/">
              <img
                src="/JoshiTourandTravels.png"
                alt="Joshi Tour and Travels"
                className="w-48 object-cover lg:w-72"
              />
            </Link>
            <ul className="flex lg:hidden space-x-4 ">
              {/* <li><a href="#" className="text-white hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Terms of Service</a></li> */}
              <li>
                <a
                  href="tel:+917018440120"
                  className="text-white hover:text-gray-400 flex items-center"
                >
                  <FaPhone className="mr-1 rotate-[90deg]" /> Call Here
                </a>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex space-x-4 ">
            {/* <li><a href="#" className="text-white hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Terms of Service</a></li> */}
            <li>
              <a
                href="tel:+917018440120"
                className="text-white whitespace-nowrap hover:text-gray-400 flex items-center"
              >
                <FaPhone className="mr-1 rotate-[90deg]" />
                <p className="whitespace-nowrap"> Call Here</p>
              </a>
            </li>
          </ul>
          <p className="text-sm text-center lg:text-left mt-3 lg:mt-0 lg:text-lg">
            © 2024 Joshi Tour and Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
