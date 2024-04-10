import React from "react";

const Header = () => {
  return (
    <div className="headerBg ">
      <div className="bg-black py-36 lg:py-44 h-auto bg-opacity-50">
        <div className="px-5 lg:px-24 max-container   flex flex-col justify-center">
          <h1 className="font-bold text-[32px] lg:text-[65px] lg:leading-[75px]">
            Explore Incredible <br /> Mukteshwar
          </h1>
          <p className="font-medium mt-2 text-lg text-[#f5f5f5] lg:text-xl">
            Experience the breath-taking beauty and vibrant culture of{" "}
            <br className="hidden lg:block" />
            Uttarakhand with Joshi Tour and Travels.
          </p>
          <p>
            <a href="tel:+918393986577">
              <button className="px-4 py-3 mt-6 hover:text-[#F89339] font-semibold text-white text-[18px] transition-all bg-[#F89339] rounded-[8px]  hover:bg-white">
                Book Now
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
