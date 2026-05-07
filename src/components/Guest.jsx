import React from "react";
import { assets } from "../assets/assets";

const testimonials = [
  {
    id: 1,
    name: "Digesh K.",
    text: "A great place to have an event; twice we hosted here, and it was excellent both times. The food is good, the service is good, and the staff is also good.",
    image: assets.Guest1,
  },
  {
    id: 2,
    name: "Shraddha S.",
    text: "The place is good, the main course is far better than the starters. Kadhai paneer needs a special mention. The staff is very friendly, helpful, and softly spoken.",
    image: assets.Guest2,
  },
  {
    id: 3,
    name: "Maria H.",
    text: "Great food. Super fast service. We had the place to ourselves. Looks like a catering hall. Pretty glitzy decor!",
    image: assets.Guest3,
  },
];

const Testimonials = () => {
  return (
    <div className="w-full px-4 py-12 md:py-16">
      
      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#e9e9e9] px-4 py-8 sm:px-6 md:px-10 md:py-12">
        
        {/* TITLE */}
        <h2 className="mb-8 text-center text-xl font-semibold sm:text-2xl md:text-3xl">
          What our guests are saying
        </h2>

        {/* CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6 shadow-sm min-h-[220px]"
            >
              
              {/* STARS */}
              <div className="mb-3 text-yellow-500 text-base sm:text-lg">
                {[...Array(5)].map((_, i) => (
                  <ion-icon key={i} name="star"></ion-icon>
                ))}
              </div>

              {/* TEXT */}
              <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-700">
                {item.text}
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <span className="text-sm sm:text-base text-gray-800">
                  {item.name}
                </span>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Testimonials;