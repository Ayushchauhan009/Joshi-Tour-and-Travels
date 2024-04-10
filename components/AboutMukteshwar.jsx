// About.js

import React from "react";

const About = () => {
  return (
    <section className="custom-background py-10">
      <h2 className="text-[36px] px-4 lg:px-0 lg:text-5xl font-bold text-center mb-2 lg:mb-10">
        About Us
      </h2>
      <div className="container mx-auto max-w-[1440px] px-5 lg:px-24 mt-2 lg:mt-10 lg:space-x-5 flex-col lg:flex-row flex  items-start">
        <div className="w-full md:w-1/2 mb-6  md:mb-0">
          <p className="text-lg text-[#f5f5f5] text-center leading-[30px] lg:text-left">
            Discover Joshi Tour and Travels & Cab Services, your trusted
            companion for seamless travel experiences in the enchanting
            Mukteshwar, Uttarakhand. Our extensive range of services encompasses
            airport transfers, local sightseeing excursions, and outstation
            journeys, among others. Rest assured, our fleet comprises
            meticulously maintained vehicles, operated by skilled and courteous
            drivers who prioritize your safety and satisfaction.
          </p>
          <p className="text-lg hidden lg:block text-[#f5f5f5] text-center leading-[30px] lg:text-left mt-4">
            Whether you're an avid explorer soaking in the splendor of
            Mukteshwar or a resident in need of reliable transportation, we're
            dedicated to offering you premium-quality taxi services at
            competitive rates. Sit back, unwind, and immerse yourself in the
            breathtaking vistas while we cater to all your travel needs with
            utmost professionalism and care.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          {/* Google Maps embed */}
          <iframe
            className="w-full h-64 rounded-[12px] md:h-[420px]"
            title="Mukteshwar Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.204742101071!2d79.6294208!3d29.4680321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bbfdf924848f%3A0x72b5b5db99b0efdb!2sMukteshwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647495689354!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Grid of pictures */}
      <div className="container mx-auto max-w-[1440px] px-5 lg:px-24 mt-10">
        {/* <h3 className="text-2xl font-bold text-center mb-6">Our Gallery</h3> */}
        <div className="grid  grid-cols-1 gap-4 lg:grid-cols-4">
          {/* Replace the image URLs with your actual image URLs */}
          <div className="relative hover:scale-105 transition-all hoveringDiv flex justify-center h-[370px] items-center ">
            <img
              src="/bhalugaad2.jpg"
              alt="Bhalugaad Waterfalls"
              className="rounded-lg h-[370px]  w-full"
            />
            <div className="absolute hoveredDiv bg-opacity-70 h-[370px] rounded-[8px] pl-[13%] pt-80 w-full bg-black ">
              <h3 className="text-xl font-bold">Bhalugaad Waterfalls</h3>
            </div>
          </div>
          <div className="relative hover:scale-105 transition-all hoveringDiv flex justify-center h-[370px] items-center ">
            <img
              src="/Dol-Ashram.jpg"
              alt="Dol Ashram"
              className="rounded-lg  object-cover w-full h-[370px]"
            />
            <div className="absolute hoveredDiv bg-opacity-70 h-[370px] rounded-[8px] pl-[30%] pt-80 w-full bg-black ">
              <h3 className="text-xl font-bold">Dol Ashram</h3>
            </div>
          </div>
          <div className="relative hover:scale-105 transition-all hoveringDiv flex justify-center h-[370px] items-center ">
            <img
              src="/jageshwar-1.jpg"
              alt="Jageshwar Dham"
              className="rounded-lg object-cover w-full h-[370px]"
            />
            <div className="absolute hoveredDiv bg-opacity-70 h-[370px] rounded-[8px] pl-[20%] pt-80 w-full bg-black ">
              <h3 className="text-xl font-bold">Jageshwar Dham</h3>
            </div>
          </div>
          <div className="relative hover:scale-105 transition-all hoveringDiv flex justify-center h-[370px] items-center ">
            <img
              src="/bhalugaadwaterfalls.jpg"
              alt="Bhalugaad Waterfalls"
              className="rounded-lg object-cover w-full h-[370px]"
            />
            <div className="absolute hoveredDiv bg-opacity-70 h-[370px] rounded-[8px] pl-[13%] pt-80 w-full bg-black ">
              <h3 className="text-xl font-bold">Bhalugaad Waterfalls</h3>
            </div>
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;
