import React from "react";
import Button from "../Components/ui/Button"

const Location = () => {
  return (
    <>
    <div className=" flex items-center justify-center">

    
    
    <div className="w-328     md:px-16  ">
      
      {/* Title */}
      <div className="font-semibold">

      <h2 className="text-2xl md:text-3xl text-[28px] mb-6  ">
        Our location
      </h2>
      </div>

      {/* Card */}
      <div className="bg-gray-100 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center">

        {/* Map */}
        <div className="w-full md:w-1/2 h-62.5 md:h-75 rounded-xl overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=North+Brunswick+Township,+NJ&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          {/* Top Row */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Guru Palace</p>
              <h3 className="text-xl font-semibold">
                North Brunswick Township, NJ
              </h3>
            </div>

            <button className="px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition cursor-pointer">
              Get directions
            </button>
          </div>

          {/* Address + Contact */}
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-700">

            <div>
              <p className="font-medium mb-1">Address</p>
              <p>2215 U.S. Rte 1 SOUTH</p>
              <p>North Brunswick Township, NJ 08902</p>
            </div>

            <div>
              <p className="font-medium mb-1">Contacts</p>
              <p>(732) 398-9022</p>
              <p>gurupalace@hotmail.com</p>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-center mt-4 flex-wrap gap-3">
            
            <p className="text-sm text-gray-600">
              Today: 11:00 AM - 10:00 PM
            </p>

            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-600 hover:underline cursor-pointer">
                See hours
              </button>

              <Button/>
            </div>

          </div>

        </div>
      </div>
    </div>

    </div>
    </>
  );
};


export default Location;