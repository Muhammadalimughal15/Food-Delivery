import React from "react";
import { assets } from "../assets/assets";

const OurStory = () => {

    const data = [

  {
    id: 1,
    title: "Excellence in Every Dish",
    desc: "Behind every plate is a team of chefs with more than a decade of experience and recognition. Led by Chef Jasbir, their skill and passion show in the balance of spices, aromas, and textures you find at the table. Our kitchen has earned awards and welcomed thousands of guests, all while keeping one mission clear: to serve honest food with care in a setting where people can relax, connect, and celebrate together.",
    image: assets.Story1,
  },
  {
    id: 2,
    title: "More Than Just Dining",
    desc: "Our space is designed for every occasion. Families gather for casual meals, couples share quiet moments, and friends come together for celebrations. With banquet halls that host up to 300 guests, custom décor, and catering for groups of any size, we make sure each event feels special. Whether you're stopping by for dinner or planning a large gathering, our team is ready to welcome you with warmth and service you can trust.",
    image: assets.Story2,
  },
]
  return (
    <>
      

 <div className="mt-10 mx-auto max-w-7xl flex items-center justify-start px-4">
  <div className="max-w-2xl w-full flex flex-col gap-4">

    <h1 className="text-4xl md:text-5xl font-bold text-left leading-tight">
      About Us
    </h1>

    <p className="text-gray-600 text-left leading-relaxed">
      Enjoy exquisite Indian food in a casual, elegant setting. With fresh
      dishes, expert chefs, and outstanding service, every visit brings you
      closer to India's rich food culture.
    </p>

  </div>
</div>

      <div className="relative w-full p-8 md:p-8">
        {/* IMAGE CONTAINER */}
        <div className="relative mx-auto flex h-125 md:h-200 max-w-380 items-center justify-center overflow-hidden rounded-2xl ">
          <img
            src={assets.Story}
            alt="Order with Ease"
            className="h-full w-full object-cover"
          />

          {/* OVERLAY CARD */}
          <div className="absolute inset-0 flex items-center justify-end p-6 md:p-56 rounded-2xl">
            {/* CARD */}
            <div className="flex w-full md:w-full max-w-157 flex-col gap-6 rounded-2xl bg-[#E3E1E0] p-6 md:p-8 text-black backdrop-blur-md">
              <h2 className="text-xl md:text-3xl font-semibold">
               A Journey of Flavor and Care
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-black">
                Founded in 2007, our restaurant was built on the idea of bringing the rich traditions of India closer to home. Every dish is prepared with fresh ingredients and respect for culture, creating a dining experience that feels both comforting and exciting. From North Indian classics to Indo-Chinese and beyond, we take pride in serving food that connects people and tells a story worth sharing.
              </p>
            </div>
          </div>
        </div>
      </div>


         <div className="px-4 sm:px-6 lg:px-8">
      {data.map((item, index) => {

        const isEven = index % 2 === 0

        return (
          <div
            key={item.id}
            className={`
              max-w-7xl mx-auto
              flex flex-col
              ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
              items-center
              gap-8 lg:gap-12
              py-10
            `}
          >

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  max-w-137.5
                  h-auto
                  rounded-3xl
                  object-cover
                "
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

              <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
                {item.title}
              </h1>

              <p className="text-gray-600 leading-relaxed mb-6 h-38.5 text-base gap-x-1 max-w-138.5">
                {item.desc}
              </p>

              {/* BUTTON NEVER HIDE */}
              <div className="w-full flex justify-center lg:justify-start">
          
              </div>

            </div>

          </div>
        )
      })}
    </div>
    </>
  );
};

export default OurStory;
