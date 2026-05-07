import React from "react";
import { assets } from "../assets/assets";

const Banquets = () => {
  const banquetData = [
    {
      title: "Guru Banquet — 50 to 100 People Gathering",
      description:
        "Elegant, sophisticated, and infinitely customizable - this is where your dreams come true. Let your special day shine in a lavishly decorated hall, personalized to your vision by your chosen decorator.",
      image: assets.banquets1,
      featureTitle: "Featuring",
      featureText:
        "Designer LED Lights, Pristine Banquet Hall, Professional Catering & Impeccable Menu",
    },
    {
      title: "Shagun Hall — 100 to 250 People Gathering",
      description:
        "Elegant, sophisticated, and infinitely customizable - this is where your dreams come true. Let your special day shine in a lavishly decorated hall, personalized to your vision by your chosen decorator.",
      image: assets.banquets2,
      featureTitle: "Featuring",
      featureText:
        "Designer LED Lights, Pristine Banquet Hall, Professional Catering & Impeccable Menu",
    },
    {
      title: "Crystal Room — 40 to 80 People Gathering",
      description:
        "Elegant, sophisticated, and infinitely customizable - this is where your dreams come true. Let your special day shine in a lavishly decorated hall, personalized to your vision by your chosen decorator.",
      image: assets.banquets3,
      featureTitle: "Featuring",
      featureText:
        "Designer LED Lights, Pristine Banquet Hall, Professional Catering & Impeccable Menu",
    },
  ];
  return (
    <>
      <div className="relative w-full p-8 md:p-8">
        {/* IMAGE CONTAINER */}
        <div className="relative mx-auto flex h-125 md:h-200 max-w-380 items-center justify-center overflow-hidden rounded-2xl">
          <img
            src={assets.banquets1}
            alt="Order with Ease"
            className="h-full w-full object-cover"
          />

          {/* OVERLAY CARD */}
          <div className="absolute inset-0 flex items-center justify-end p-6 md:p-56 rounded-2xl">
            {/* CARD */}
            <div className="flex w-full md:w-full max-w-157 flex-col gap-6 rounded-2xl bg-[#ffffff] p-6 md:p-8 text-black backdrop-blur-md">
              <h2 className="text-xl md:text-3xl font-semibold">
                Elevate Your Celebrations at Guru Palace Banquets
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-black">
                We offer our expertise in the area of choosing the perfect site,
                having had the privilege to cater and plan magnificent events
                over the past 20 years.
                <br />
                <br />
                <br />
                To book a tour or inquire about our banquet halls and services,
                give us a call at (732) 398-9022 or send us an email at
                gurupalace@hotmail.com!
              </p>
            </div>
          </div>
        </div>
      </div>

      {banquetData.map((item, index) => (
        <div key={index}>
          {/* TEXT SECTION */}
          <div className="mx-auto max-w-7xl bg-white px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              {item.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full p-8">
            <div className="relative mx-auto flex h-125 md:h-175 max-w-7xl items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt="banquet"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-start p-6 md:p-20">
                <div className="flex w-full max-w-xl flex-col gap-6 rounded-2xl bg-white p-6 md:p-8 text-black">
                  <h2 className="text-xl md:text-3xl font-semibold">
                    {item.featureTitle}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed">
                    {item.featureText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Banquets;
