import React from "react"
import { assets } from "../assets/assets"
import Button from "./ui/Button"

const data = [
  {
    id: 0,
    title: "Welcome to Guru Palace",
    desc: "At Guru Palace Indian Restaurant in North Brunswick, we bring you exquisite Indian cuisine in a warm and friendly setting. Our elegant décor, complete with striking details like waterfall walls, makes every visit memorable. With fresh dishes prepared daily, expert chefs, and impeccable service, dining with us is like experiencing India close to home. Join us today and enjoy an unforgettable meal with family, friends, or colleagues.",
    image: assets.Guru1,
  },
  {
    id: 1,
    title: "Freshness in Every Dish",
    desc: "Every plate at Guru Palace is made with the finest ingredients, keeping traditional recipes at the heart of what we do. Our chefs blend exotic spices and sauces into meals that bring out the true essence of Indian cooking. From bold curries to soft naan baked fresh, each dish is prepared with care to deliver food that feels both comforting and exciting. Come by and enjoy the flavors that make our restaurant stand apart in New Jersey.",
    image: assets.Guru2,
  },
  {
    id: 2,
    title: "Menu Highlights",
    desc: "Our menu is filled with signature Indian favorites that guests love. Start with crisp pani puri, enjoy fluffy naan straight from the tandoor, or choose from rich entrées layered with spices and aromas. Each bite brings you closer to the food traditions we are proud to serve. With options for everyone, our menu is designed to bring people together over fresh, flavorful meals that keep you coming back for more.",
    image: assets.Guru3,
  },
]

const Guru = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {data.map((item, index) => {

        const isEven = index % 2 === 0
        const showButton = item.id >= 1

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
                  max-w-[550px]
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

              <p className="text-gray-600 leading-relaxed mb-6 h-[154px] text-base gap-x-1 max-w-[554px]">
                {item.desc}
              </p>

              {/* BUTTON NEVER HIDE */}
              <div className="w-full flex justify-center lg:justify-start">
                {showButton && (
                  <Button text={index === 1 ? "View Menu" : "Explore Menu"} />
                )}
              </div>

            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Guru