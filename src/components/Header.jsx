import React, { useState } from "react";
import header_logo from "../assets/header_logo.avif";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-23 bg-white ">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* LEFT - LOGO */}
        <div>
          <Link to="/">
            <img
              src={header_logo}
              alt="logo"
            className="max-h-full cursor-pointer items-center object-contain transition-opacity duration-300"
          />
            </Link>
        </div>

        {/* CENTER - DESKTOP MENU */}

        <div className="flex items-center">
          <nav className="hidden gap-2 font-medium text-gray-700 md:flex">
            <Link to="/menu" className="rounded-md px-4 py-2 hover:bg-gray-100">
              Menu
            </Link>

            <Link to="/banquets" className="px-4 py-2  hover:bg-gray-100">
              Banquets
            </Link>

            {/* hide from md and below */}
            <Link
              to="/catering"
              className="hidden rounded-md px-4 py-2 hover:bg-gray-100 lg:block"
            >
              Catering
            </Link>

            <Link
              to="/our-story"
              className="hidden rounded-md px-4 py-2 hover:bg-gray-100 lg:block"
            >
              Our Story
            </Link>

            <Link
              to="/events"
              className="hidden rounded-md px-4 py-2 hover:bg-gray-100 lg:block"
            >
              Events
            </Link>

            {/* MORE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex cursor-pointer items-center gap-1 rounded-md px-4 py-2 hover:bg-gray-100"
              >
                More
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl  bg-white p-2 shadow-md">
                  <Link
                    to="/giftcards"
                    className="block w-full rounded-md px-4 py-2 hover:bg-gray-100"
                  >
                    Gift Cards
                  </Link>

                  <Link
                    to="/hiring"
                    className="block w-full rounded-md px-4 py-2 hover:bg-gray-100"
                  >
                    We're Hiring
                  </Link>

                  <Link
                    to="/terms"
                    className="block w-full rounded-md px-4 py-2 hover:bg-gray-100"
                  >
                    General Terms & Conditions
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-3">
            {/* Desktop Sign in */}
            <Link to="/sign-in" className="hidden cursor-pointer rounded-lg  px-3 py-2 shadow hover:bg-gray-100 md:block">
              Sign in
            </Link>

            {/* Order online (always visible) */}
            <Button />

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-2xl transition-transform duration-200 active:scale-90 md:hidden"
            >
              <ion-icon
                name={mobileMenu ? "close-outline" : "menu-outline"}
                className="transition-all duration-200"
              ></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="space-y-3 shadow bg-white px-6 py-4 md:hidden">
          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            Sign in{" "}
          </Link>
          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            Menu
          </Link>
          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            Banquets
          </Link>
          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            Catering
          </Link>
          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            Our Story
          </Link>
          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            Events
          </Link>
          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            Gift Cards
          </Link>

          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            We're Hiring
          </Link>

          <Link className="block w-full rounded-md px-4 py-2 hover:bg-gray-100">
            General Terms & Conditions
          </Link>

          {/* Sign in moved here */}

          <button className="w-full rounded-lg bg-red-500 px-3 py-2 text-black hover:bg-red-400">
            Order online
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
