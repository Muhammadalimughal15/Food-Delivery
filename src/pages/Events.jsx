import React from "react";

const Events = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Heading */}
      <h1 className="text-[32px] my-10 sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-left mb-10">
        Upcoming events near you
      </h1>

      {/* Empty State Card */}
      <div className="w-full bg-gray-200 rounded-xl min-h-62.5 sm:min-h-75 md:min-h-87.5 flex items-center justify-center p-6">

        <div className="text-center">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
            There are no events right now
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Check back later to see if we've added any
          </p>
        </div>

      </div>
    </div>
  );
};

export default Events;