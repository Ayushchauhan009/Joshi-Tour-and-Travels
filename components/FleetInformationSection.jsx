"use client";
import React, { useState } from "react";

const FleetInformationSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("Ertiga");

  const handleVehicleChange = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <section className="custom-background">
      <div className="max-container px-5 lg:px-24 pb-[50px] lg:pb-[100px]">
        <h2 className="text-[36px] lg:text-[48px] font-bold text-center">
          Explore Our Fleet
        </h2>
        <p className="text-center w-[100%] text-[#f5f5f5]  lg:w-[850px] mx-auto">
          Our carefully selected vehicle in Mukteshwar, Uttarakhand, is tailored
          to meet your transportation needs. With our singular focus, we ensure
          your journey is characterized by comfort, safety, and convenience.
        </p>
        <div className="fleet text-[#fff] grid grid-cols-1 gap-y-5 mt-2 lg:mt-0">
          {selectedVehicle === "Ertiga" && (
            <div className="vehicle space-y-2 mt-10 relative rounded-[8px] px-4 pt-5 pb-5 bg-[#0a4959]">
              <div className="flex space-x-2">
                <h3
                  onClick={() => handleVehicleChange("Ertiga")}
                  className="text-white underline cursor-pointer  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl"
                >
                  Ertiga
                </h3>
                <h3 className="text-white  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl">
                  |
                </h3>
                <h3
                  onClick={() => handleVehicleChange("Alto")}
                  className="text-white underline cursor-pointer  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl"
                >
                  Alto
                </h3>
              </div>
              <p className=" lg:ml-5 text-base lg:text-lg lg:w-[90%] text-[#f5f5f5] py-0 lg:py-0 leading-[28px]">
                The Ertiga stands out as the epitome of comfort, affordability,
                and reliability, making it the perfect choice for small groups
                exploring Mukteshwar and Uttarakhand. Designed to cater to your
                every need, this versatile vehicle offers a host of features
                tailored to enhance your travel experience. Features include:
              </p>
              <div className="list-inside ml-0 lg:ml-5 pt-4 pb-5  grid grid-cols-1 lg:grid-cols-2 text-[14px] lg:text-[17px] gap-y-4 lg:gap-y-5 font-semibold list-disc">
                <p className="flex items-center">
                  {" "}
                  <img
                    src="/check.png"
                    alt="check"
                    className="w-[24px] mr-2"
                  />{" "}
                  Comfortable seating for up to six passengers
                </p>
                <p className="flex items-center">
                  <img src="/check.png" alt="check" className="w-[24px] mr-2" />{" "}
                  Air conditioning and heating
                </p>
                <p className="flex items-center">
                  <img src="/check.png" alt="check" className="w-[24px] mr-2" />{" "}
                  Ample legroom and luggage space
                </p>
                <p className="flex items-center">
                  <img src="/check.png" alt="check" className="w-[24px] mr-2" />{" "}
                  Entertainment system with music
                </p>
              </div>
              <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 mt-5">
                <img
                  src="/Ertiga1.jpg"
                  alt="Image 1"
                  className="lg:w-[50%] h-[400px] object-cover rounded-[8px]"
                />
                <img
                  src="/Ertiga2.jpg"
                  alt="Image 1"
                  className="lg:w-[50%] h-[400px] object-cover rounded-[8px]"
                />
              </div>
            </div>
          )}
          {selectedVehicle === "Alto" && (
            <div className="vehicle space-y-2 mt-10 relative rounded-[8px] px-4 pt-5 pb-5 bg-[#0a4959]">
              <div className="flex space-x-2">
                <h3
                  onClick={() => handleVehicleChange("Ertiga")}
                  className="text-white  underline cursor-pointer  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl"
                >
                  Ertiga
                </h3>
                <h3 className="text-white  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl">
                  |
                </h3>
                <h3
                  onClick={() => handleVehicleChange("Alto")}
                  className="text-white underline cursor-pointer  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl"
                >
                  Alto
                </h3>
              </div>
              <p className=" lg:ml-5 text-base lg:text-lg lg:w-[90%] text-[#f5f5f5] py-0 lg:py-0 leading-[28px]">
                The Alto is a compact and reliable option for solo adventurers
                or couples exploring Mukteshwar and Uttarakhand. With its
                compact design and fuel efficiency, the Alto is perfect for
                navigating through narrow streets and city traffic. Features
                include:
              </p>
              <div className="list-inside ml-0 lg:ml-5 pt-4 pb-5  grid grid-cols-1 lg:grid-cols-2 text-[14px] lg:text-[17px] gap-y-4 lg:gap-y-5 font-semibold list-disc">
                <p className="flex items-center">
                  {" "}
                  <img
                    src="/check.png"
                    alt="check"
                    className="w-[24px] mr-2"
                  />{" "}
                  Comfortable seating for up to four passengers
                </p>
                <p className="flex items-center">
                  <img src="/check.png" alt="check" className="w-[24px] mr-2" />{" "}
                  Air conditioning and heating
                </p>
                <p className="flex items-center">
                  <img src="/check.png" alt="check" className="w-[24px] mr-2" />{" "}
                  Compact design for easy maneuverability
                </p>
                <p className="flex items-center">
                  <img src="/check.png" alt="check" className="w-[24px] mr-2" />{" "}
                  Fuel-efficient engine
                </p>
              </div>
              <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 mt-5">
                <img
                  src="/Alto1.jpg"
                  alt="Image 1"
                  className="lg:w-[50%] h-[400px] object-cover rounded-[8px]"
                />
                <img
                  src="/Alto2.jpg"
                  alt="Image 1"
                  className="lg:w-[50%] h-[400px] object-cover rounded-[8px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FleetInformationSection;
