// Testimonials.js

import React from "react";

const Testimonials = () => {
  return (
    <section className="custom-background py-10 lg:py-20">
      <div className="container max-container  lg:px-20">
        <h2 className="text-[36px] lg:text-5xl font-bold text-center mb-2 lg:mb-10">
          Testimonials
        </h2>
        <div className="">
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <div className="w-[100%] lg:w-[1/3] px-4 mb-8">
              <div className="bg-[#0a4959] p-6 rounded-lg shadow-lg">
                <p className="text-lg text-white leading-relaxed mb-4">
                  "Kedarvasi Tour and Travels, Mukteshwar, provided me with
                  exceptional service during my recent trip to Uttarakhand.
                  Their drivers were punctual, courteous, and knowledgeable
                  about the area. I highly recommend their services to anyone
                  visiting Mukteshwar."
                </p>
                <p className="text-lg font-medium text-[#f5f5f5]">
                  - Ramesh, India
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[1/3] px-4 mb-8">
              <div className="bg-[#0a4959] p-6 rounded-lg shadow-lg">
                <p className="text-lg text-white leading-relaxed mb-4">
                  "I had a wonderful experience with Kedarvasi Tour and Travels,
                  Mukteshwar. The booking process was seamless, and their rates
                  were very competitive. The driver was friendly and helped me
                  explore the local attractions. I will definitely use their
                  services again."
                </p>
                <p className="text-lg font-medium text-[#f5f5f5]">
                  - Seema, India
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[1/3] px-4 mb-8">
              <div className="bg-[#0a4959] p-6 rounded-lg shadow-lg">
                <p className="text-lg text-white leading-relaxed mb-4">
                  "Highly impressed with Kedarvasi Tour and Travels, Mukteshwar!
                  Their professionalism and dedication to customer satisfaction
                  are commendable. I felt safe and comfortable throughout my
                  journey. Definitely the best taxi service in town!"
                </p>
                <p className="text-lg font-medium text-[#f5f5f5]">
                  - Arya, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
