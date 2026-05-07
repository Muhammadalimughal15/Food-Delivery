import React from "react";
import { assets } from "../assets/assets";

const GeneralTerm = () => {
  const data = [
    {
      id: 0,
      title: "Content Section",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: assets.Guru1,
    },
    {
      id: 1,
      title: "Content Section",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: assets.Guru2,
    },

  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
    

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
        );
      })}
    </div>
  );
};

export default GeneralTerm;
