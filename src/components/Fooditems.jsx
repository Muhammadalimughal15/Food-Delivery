import React, { useState } from "react";
import { assets } from "../assets/assets";

const Fooditems = () => {
  const images = [
    assets.Food1,
    assets.Food2,
    assets.Food3,
    assets.Food4,
    assets.Food5,
    assets.Food6,
    assets.Food7,
    assets.Food8,
    assets.Food9,
  ];

  // 🔥 state for lightbox
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="max-w-section-content max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20">
      
      {/* HEADER */}
      <div className="flex max-w-2xl flex-col gap-4">
        <h2 className="text-[28px] font-semibold">
          Food That Speaks for Itself
        </h2>

        <p className="text-base text-gray-600">
          Our gallery shows the vibrant colors and textures of our Indian dishes, from sizzling appetizers to hearty entrées.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt={`food-${index}`}
              className="h-[405px] w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* 🔥 LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          
          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            onClick={closeLightbox}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          {/* PREV */}
          <button
            className="absolute left-6 text-white text-4xl cursor-pointer"
            onClick={prevImage}
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={images[selectedIndex]}
            alt="preview"
            className="max-h-[80%] max-w-[90%] rounded-xl cursor-pointer"
          />

          {/* NEXT */}
          <button
            className="absolute right-6 text-white text-4xl cursor-pointer"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Fooditems;