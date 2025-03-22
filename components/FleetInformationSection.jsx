"use client";
import React, { useState } from "react";

const FleetInformationSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("Swift");

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
          Our carefully selected vehicles in Mukteshwar, Uttarakhand, is
          tailored to meet your transportation needs. With our singular focus,
          we ensure your journey is characterized by comfort, safety, and
          convenience.
        </p>
        <div className="fleet text-[#fff] grid grid-cols-1 gap-y-5 mt-2 lg:mt-0">
          <div className="vehicle space-y-2 mt-10 relative rounded-[8px] px-4 pt-5 pb-5 bg-[#0a4959]">
            <div className="">
              {/* <h3
                  onClick={() => handleVehicleChange("Ertiga")}
                  className="text-white  underline cursor-pointer  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl"
                >
                  Ertiga
                </h3> */}
              {/* <h3 className="text-white  p-0 lg:p-4 rounded-[8px] font-bold text-2xl lg:text-3xl">
                  |
                </h3> */}

              <div className="list-inside ml-0 lg:ml-5 pt-4 pb-5  grid grid-cols-1 lg:grid-cols-2 text-[14px] lg:text-[17px] gap-y-4 lg:gap-y-5 font-semibold list-disc">
                <p className="flex  items-center">
                  {" "}
                  <img
                    src="/check.png"
                    alt="check"
                    className="w-[24px] mr-2"
                  />{" "}
                  Comfortable seatings
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
              <div className="flex flex-col space-y-5 lg:space-y-5 lg:space-x-0 mt-5">
                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5">
                  <img
                    src="/4.jpeg"
                    alt="Swift Dzire"
                    className="lg:w-[50%] h-[200px] lg:h-auto object-cover lg:object-contain rounded-[8px]"
                  />
                  <img
                    src="/5.jpeg"
                    alt="Swift Dzire"
                    className="lg:w-[48.5%] h-[200px] lg:h-auto aspect-video object-cover rounded-[8px]"
                  />
                </div>
                <img
                  src="/3.jpeg"
                  alt="Swift Dzire"
                  className="lg:w-full  h-auto lg:h-auto object-contain lg:object-cover rounded-[8px]"
                />
                <div className="flex flex-col  space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5">
                  <img
                    src="/Swift.jpeg"
                    alt="Swift Dzire"
                    className="lg:w-[50%] h-[400px] lg:h-[400px] object-cover rounded-[8px]"
                  />
                  <img
                    src="/2.jpeg"
                    alt="Swift Dzire"
                    className="lg:w-[48.5%] h-[400px] lg:h-[400px] object-cover rounded-[8px]"
                  />
                </div>

                {/* <img
                  src="/Alto2.jpg"
                  alt="Image 1"
                  className="lg:w-[50%] h-[400px] object-cover rounded-[8px]"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetInformationSection;
