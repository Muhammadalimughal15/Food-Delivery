import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const { Feature1, Feature2, Feature3, Feature4, Feature5, Feature6 } = assets;

  const navigate = useNavigate();

  const items = [
    { id: 1, img: Feature1, title: "Fish Amritsari" },
    { id: 2, img: Feature2, title: "Papper Chicken (Dry)" },
    { id: 3, img: Feature3, title: "Fish Apollo" },
    { id: 4, img: Feature4, title: "Chicken 65" },
    { id: 5, img: Feature5, title: "Chicken Majestic" },
    { id: 6, img: Feature6, title: "Drink" },
  ];

  return (
    <section className="mx-auto max-w-7xl bg-white py-10">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between px-6">
        <h2 className="text-2xl font-medium  text-black">Featured</h2>

        <button
          onClick={() => navigate("/GuruPalaceMenu")}
          className="group flex items-center gap-2 rounded-lg border px-3 py-2 shadow hover:bg-gray-100 cursor-pointer"
        >
          View Menu
          <ion-icon
            name="chevron-forward-outline"
            className="text-lg transition-transform duration-200 group-hover:translate-x-1 "
          ></ion-icon>
        </button>
      </div>

      {/* SCROLL */}
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-6">
        {items.map((item) => (
          <div key={item.id} className="min-w-[20%]  shrink-0">
            <div className="group relative h-48 overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.title}
                className=" object-cover w-60 h-60 transition duration-300 group-hover:scale-110"
              />

              <button className="absolute right-2 bottom-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white text-black shadow hover:bg-gray-200">
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>

            <h3 className="mt-2 font-medium  text-sm ">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
