import React, { useContext, useEffect, useRef, useState } from "react";
import { Clock, MapPin, Search } from "lucide-react";
import { assets } from "../assets/assets";
import { CartContext } from "../context/CartContext";

const GuruPalaceMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  const observer = useRef(null);

  const { addToCart } = useContext(CartContext);

  const sidebarItems = [
    { id: "popular", label: "Popular" },
    { id: "appetizersVeg", label: "Appetizers (Vegetarian)" },
    { id: "appetizersNonVeg", label: "Appetizers (Non-Vegetarian)" },
    { id: "specials", label: "Specials" },
    { id: "riceBiryani", label: "Rice & Biryani" },
    { id: "tandooriOven", label: "Tandoori Oven" },
    { id: "vegetableCurries", label: "Vegetable Curries" },
    { id: "chickenCurries", label: "Chicken Curries" },
    { id: "lambGoatCurries", label: "Lamb & Goat Curries" },
    { id: "seafoodCurries", label: "Seafood Curries" },
    { id: "breads", label: "Breads" },
    { id: "accompaniments", label: "Accompaniments" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ];

  // SCROLLSPY
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sidebarItems.find(
              (item) => item.id === entry.target.id,
            );

            if (found) {
              setActiveCategory(found.label);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -70% 0px",
      },
    );

    sidebarItems.forEach((item) => {
      const el = document.getElementById(item.id);

      if (el) {
        observer.current.observe(el);
      }
    });

    return () => observer.current.disconnect();
  }, []);

  // SCROLL FUNCTION
  const scrollToCategory = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-white font-sans overflow-hidden mx-auto max-w-7xl">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 border-r border-gray-100 h-screen overflow-y-auto p-4 hidden md:block sticky top-0">
          {/* SEARCH */}
          <div className="relative mb-6">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search menu"
              className="w-full bg-gray-50 border-none rounded-md py-2 pl-10 pr-4 text-sm outline-none"
            />
          </div>

          {/* SIDEBAR MENU */}
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollToCategory(item.id)}
                className={`px-3 py-2 text-[14px] cursor-pointer rounded-md transition-all duration-300 ${
                  activeCategory === item.label
                    ? "bg-black text-white font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </div>
            ))}
          </nav>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1 h-screen overflow-y-auto p-6 lg:p-10 scroll-smooth">
          <div className="max-w-250">
            {/* HEADER */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Guru Palace Menu</h1>

              <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  North Brunswick Township, NJ
                </span>

                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <Clock size={14} />
                  Open now
                </span>
              </div>
            </div>

            {/* SECTIONS */}
            {sidebarItems.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="mb-12 pt-4"
              >
                {/* TITLE */}
                <h2 className="text-xl font-bold mb-6 border-b border-gray-50 pb-2">
                  {category.label}
                </h2>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => {
                    const item = {
                      id: `${category.id}-${i}`,
                      name: `${category.label} Dish ${i}`,
                      price: 14.95,
                      image: assets.Feature1,
                    };

                    return (
                      <div
                        key={i}
                        className="flex justify-between border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group"
                      >
                        {/* LEFT */}
                        <div className="flex-1 pr-4">
                          <h3 className="font-semibold text-[15px] group-hover:text-red-600 transition-colors">
                            {item.name}
                          </h3>

                          <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                            Deliciously prepared with authentic spices and fresh
                            ingredients.
                          </p>

                          <p className="font-bold text-gray-900 mt-2">
                            ${item.price}
                          </p>
                        </div>

                        {/* RIGHT */}
                        <div className="relative">
                          <img
                            src={item.image}
                            className="w-24 h-24 rounded-lg object-cover shadow-sm"
                            alt="food"
                          />

                          {/* ADD TO CART BUTTON */}
                          <button
                            onClick={() => addToCart(item)}
                            className="absolute -bottom-2 -right-2 bg-white p-1 rounded shadow-md border border-gray-100 hover:bg-gray-200 hover:text-black transition-colors cursor-pointer"
                          >
                            <ion-icon name="add-outline"></ion-icon>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default GuruPalaceMenu;
