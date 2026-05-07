import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Catering = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = assets.pakage1; // change if needed
    link.href = assets.pakage2; // change if needed
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const images = [
    assets.Catering5,
    assets.Catering6,
    assets.Catering7,
    assets.Catering8,
    assets.Catering9,
    assets.Catering10,
 
  ];

  // 🔥 state for lightbox
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-10">
          {/* TEXT LEFT */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
              Catering Menu
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-138.5">
              We specialize in all types of catering, covering everything from
              basic food pickup orders for at least 30 guests to fully tailored
              catering experiences. Our advanced outdoor equipment and extensive
              production line make it possible to produce and serve meals for
              groups as large as 2,000 people. If you require a dish not listed
              on our menu, simply let us know and we will be happy to create it.
              We also serve clients with dietary requirements and adjust recipes
              to match unique preferences.
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={assets.Catering4}
              alt="Guru Palace"
              className="w-full max-w-137.5 h-auto rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-semibold">Catering & Party Trays</h1>

          <button
            onClick={handleDownload}
            className="px-5 py-2  rounded-lg hover:bg-gray-100 transition shadow"
          >
            Download →
          </button>
        </div>

        {/* CENTER IMAGES */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-6 ">
            {/* IMAGE 1 (TOP) */}
            <img
              src={assets.pakage1}
              alt="img1"
              className="w-full max-w-[600px]rounded-xl object-cover shadow rounded-xl"
            />

            {/* IMAGE 2 (BOTTOM) */}
            <img
              src={assets.pakage2}
              alt="img2"
              className="w-full max-w-[600px]rounded-xl object-cover shadow rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-section-content max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-20">
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

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl   overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="p-8  flex flex-col ">
            <h1 className="text-3xl font-bold mb-4">
              Guru Palace Catering Request Form
            </h1>
            <p className="text-gray-600">
              Please complete the form below to send us a catering request.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-8">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email *</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium">Phone *</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Date *</label>
                  <input
                    type="date"
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Time *</label>
                  <input
                    type="time"
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
              </div>

              {/* People */}
              <div>
                <label className="text-sm font-medium">
                  Number of People *
                </label>
                <input
                  type="number"
                  placeholder="Minimum 50 people"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>

              {/* Delivery */}
              <div>
                <label className="text-sm font-medium">
                  Delivery or Pickup *
                </label>
                <select className="w-full mt-1 p-2 border rounded-md">
                  <option>Delivery</option>
                  <option>Pickup</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-medium">Street Address</label>
                <input className="w-full mt-1 p-2 border rounded-md" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input placeholder="City" className="p-2 border rounded-md" />
                <input placeholder="State" className="p-2 border rounded-md" />
              </div>

              <input
                placeholder="Zip Code"
                className="w-full p-2 border rounded-md"
              />

              {/* Order */}
              <div>
                <label className="text-sm font-medium">
                  What would you like to order?
                </label>
                <textarea className="w-full mt-1 p-2 border rounded-md h-24"></textarea>
              </div>

              {/* Allergies */}
              <div>
                <label className="text-sm font-medium">
                  Dietary Instructions or Allergies
                </label>
                <input className="w-full mt-1 p-2 border rounded-md" />
              </div>

              {/* Notes */}
              <div>
                <label className="text-sm font-medium">
                  Additional Instructions
                </label>
                <textarea className="w-full mt-1 p-2 border rounded-md h-20"></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-black py-3 rounded-xl font-semibold"
              >
                SEND CATERING REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catering;
