"use client";

import React, { useState, useEffect } from "react";

const SwipeableCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="custom-background px-5 py-[82px] lg:py-[85px] lg:px-0">
      <div className="relative max-container">
        <h2 className="text-[36px] mb-5 lg:mb-10 lg:text-5xl text-center font-bold text-[#fff]">
          Our Gallery
        </h2>
        <div className="px-0 lg:px-24 flex space-x-2 lg:space-x-5">
          <div className="space-y-2 w-1/3 lg:space-y-5">
            <img
              src="/gallery1.png"
              alt=""
              className="w-full cursor-pointer rounded-tl-[8px]"
              onClick={() => handleImageClick("/gallery1.png")}
            />
            <img
              src="/gallery2.png"
              alt=""
              className="w-full cursor-pointer rounded-bl-[8px]"
              onClick={() => handleImageClick("/gallery2.png")}
            />
          </div>
          <div className="space-y-2 w-1/3 lg:space-y-5">
            <img
              src="/gallery3.png"
              alt=""
              className="w-full cursor-pointer"
              onClick={() => handleImageClick("/gallery3.png")}
            />
            <img
              src="/gallery7.jpg"
              alt=""
              className="w-full cursor-pointer h-[74%] lg:h-[74.2%] object-cover"
              onClick={() => handleImageClick("/gallery7.jpg")}
            />
          </div>
          <div className="space-y-2 w-1/3 lg:space-y-5">
            <img
              src="/gallery5.png"
              alt=""
              className="w-full cursor-pointer rounded-tr-[8px]"
              onClick={() => handleImageClick("/gallery5.png")}
            />
            <img
              src="/gallery6.png"
              alt=""
              className="w-full cursor-pointer rounded-br-[8px]"
              onClick={() => handleImageClick("/gallery6.png")}
            />
          </div>
        </div>
      </div>
      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="relative ">
            <button
              className="absolute top-0 right-0 m-4 text-white text-xl"
              onClick={handleCloseModal}
            >
              <img src="/cross.png" alt="cancel" className="w-10 invert" />
            </button>
            {/* Display the selected image */}
            <img
              src={selectedImage}
              alt=""
              className="w-[370px] lg:w-[700px] h-[400px] object-cover"
            />
            {/* Add navigation buttons here */}
            {/* Example: */}
            {/* <button onClick={navigateToPreviousImage}>Previous</button> */}
            {/* <button onClick={navigateToNextImage}>Next</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SwipeableCarousel;
