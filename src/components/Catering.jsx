import React from "react"
import { assets } from "../assets/assets"
import Button from "./ui/Button"

const data = [
  {
    id: 0,
    title: "Catering Made Simple",
    desc: "Guru Palace offers catering services that fit every occasion. From intimate gatherings to events serving over 2,000 guests, we bring fresh food and seamless service to your celebration. Our team adapts menus to meet your preferences, including dietary needs, ensuring every guest leaves happy. For weddings, parties, or corporate events, our catering is designed to make your event stress-free and unforgettable.",
    image: assets.Catering1,
  },
  {
    id: 1,
    title: "Banquets for Every Celebration",
    desc: "Our banquet halls can host up to 300 guests and are designed for elegance, comfort, and flexibility. With beautiful décor and personalized setups, Guru Palace is the perfect place for birthdays, weddings, corporate meetings, and family gatherings. Enjoy full-service dining in a casual yet sophisticated atmosphere, tailored to meet your events needs and make your special day shine in style.",
     image: assets.Catering2,
  },
  {
    id: 2,
    title: "Visit Guru Palace",
    desc: "Step into Guru Palace, where locals, families, tourists, and food lovers gather to share delicious Indian meals. With 10+ professional chefs, award-winning recipes, and service that makes you feel at home, our restaurant has welcomed more than 5,000 clients. Stop by today and see why we are one of New Jersey’s most trusted dining spots.",
     image: assets.Catering3,
  },
]

const Catering = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {data.map((item, index) => {

        const isEven = index % 2 === 0
        const showButton = item.id === 0

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
                {showButton && (
                  <Button text={index === 1 ? "View Menu" : "Book Catering"} />
                )}
              </div>

            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Catering