// ContactUs.js

import React from "react";

const ContactUs = () => {
  return (
    <section className="custom-background pt-10 px-4 lg:px-0 pb-10 lg:pb-20">
      <div className="container bg-[#0a4959] bg-opacity-50 py-4 lg:py-10 rounded-[8px]  mx-auto w-auto lg:w-[82%] 2xl:w-[75%] px-4 lg:px-10">
        <div className="flex flex-col justify-center lg:space-x-10 lg:flex-row">
          <div className="w-auto lg:w-[70%] 2xl:w-[60%] ">
            <video
              src="/Contact.mp4"
              className=" rounded-[10px]"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div>
            <h2 className="text-[36px] pt-5 lg:pt-0 lg:text-5xl font-bold text-left mb-0 lg:mb-5">
              Contact Us
            </h2>
            <div className="flex flex-col md:flex-col items-start justify-start space-y-6 md:space-y-0 md:space-x-0">
              <div className="text-left  md:text-left">
                <p className="text-lg text-white leading-relaxed mb-2">
                  For inquiries and bookings, please contact us at:
                </p>
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                  <p className="text-lg text-white w-auto leading-relaxed mb-2">
                    Phone:{" "}
                    <a
                      href="tel:+918393986577"
                      className="text-[#F89339] hover:underline"
                    >
                      +918393986577
                    </a>
                    <span className="mx-1">/</span>
                    <a
                      href="tel:+917018440120"
                      className="text-[#F89339] hover:underline"
                    >
                      7018440120
                    </a>
                    <span className="mx-1">/</span>
                    <br className="block lg:hidden" />
                    <a
                      href="tel:+919410169816"
                      className="text-[#F89339] hover:underline"
                    >
                      9410169816
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-center lg:pt-16 md:text-left">
                <p className="text-xl lg:text-[24px] font-semibold text-white leading-relaxed mb-5">
                  Ready to explore Mukteshwar?
                </p>
                <a href="tel:+918393986577">
                  <button className="px-4 py-4 mx-auto lg:mx-0 font-semibold hover:text-[#F89339] text-white lg:text-[18px] transition-all bg-[#F89339] rounded-[8px]  hover:bg-white">
                    Book Your Cab Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
