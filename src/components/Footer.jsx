import React from "react";
import Button from "../components/ui/Button";
import { assets } from "../assets/assets";
import qr from "../assets/qr.svg";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto   py-10 bg-white flex flex-col items-center">

      {/* MAIN CARD */}
      <div className="w-full  bg-gray-100 rounded-2xl  md:p-10">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={assets.header_logo}
              alt="logo"
              className="cursor-pointer  md:w-auto"
            />
          </div>

          {/* LINKS (UPDATED SECTION) */}
          <div className="flex flex-row sm:grid sm:grid-cols-3 gap-6 text-sm md:text-base text-gray-700 font-semibold justify-end sm:justify-start whitespace-nowrap overflow-x-auto">
            
            <div className="flex flex-col gap-2">
              <p>Menu</p>
              <p>Our Story</p>
              <p>We're Hiring</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Banquets</p>
              <p>Events</p>
              <p>General Terms & Conditions</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Catering</p>
              <p>Gift Cards</p>
            </div>

          </div>

          {/* Button */}
          <div className="lg:justify-end">
            <Button />
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* MIDDLE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* QR */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16">
              <img
                src={qr}
                alt="qr"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="text-xs md:text-sm text-gray-500">
                Download our app
              </p>
              <p className="text-sm md:text-base font-medium">
                Earn points for free food
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
            <p className="hover:underline cursor-pointer">
              Terms of Service
            </p>
            <p className="hover:underline cursor-pointer">
              Accessibility
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-xs md:text-sm text-gray-600 text-center md:text-left">

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        {/* Copyright */}
        <p>
          © 2026 Perfect Food Inc. All rights reserved.
        </p>

        {/* Made with Owner */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
          <span>Made with Owner</span>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>

      </div>

    </div>
  );
};

export default Footer;