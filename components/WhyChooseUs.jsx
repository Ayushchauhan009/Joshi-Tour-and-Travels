// components/WhyChooseUsSection.js
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="custom-background">
      <div className="max-container lg:px-24 px-5 pb-[100px]">
        <h2 className="lg:text-[48px] text-[36px] font-bold text-center">
          Why Choose Us
        </h2>
        <div className="reasons space-y-6 lg:space-y-0 lg:space-x-6 items-center flex-col lg:flex-row flex mt-5">
          <div className="px-5 space-y-4 lg:w-1/3 rounded-[8px] text-[#fff] py-8 bg-[#0a4959]">
            <img src="/local-experience.png" alt="" className="w-12" />
            <h3 className="font-bold text-white text-xl">Local Expertise</h3>
            <p className="text-[#f5f5f5]">
              Benefit from our in-depth knowledge of Mukteshwar and Uttarakhand,
              ensuring a personalized and memorable experience.
            </p>
          </div>
          <div className="py-8 px-5 space-y-4 lg:w-1/3 rounded-[8px] text-[#fff] bg-[#0a4959]">
            <img src="/support.png" alt="" className="w-12" />
            <h3 className="font-bold text-white text-xl">24/7 Availability</h3>
            <p className="text-[#f5f5f5]">
              Explore Mukteshwar and Uttarakhand at any time of the day or night
              with our round-the-clock services.
            </p>
          </div>
          <div className="py-8 px-5 lg:w-1/3 space-y-4 rounded-[8px] text-[#fff] bg-[#0a4959]">
            <img src="/car.png" alt="" className="w-12" />
            <h3 className="font-bold text-white text-xl">
              Comfortable Transportation
            </h3>
            <p className="text-[#f5f5f5]">
              Travel in comfort and style with our modern fleet, designed to
              enhance your journey through Mukteshwar and Uttarakhand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
