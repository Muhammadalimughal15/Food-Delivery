import React, { useEffect, useState } from "react"
import Hero_logo1 from "../assets/Hero_logo.avif"
import Hero_logo2 from "../assets/Hero2_logo.avif"
import Hero_logo3 from "../assets/Hero3_logo.avif"

import Button from "../components/ui/Button"

const Hero = () => {
  const images = [Hero_logo1, Hero_logo2, Hero_logo3]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 12000) // 3 seconds

    return () => clearInterval(interval)
  }, )

  return (
    <section className="relative h-195 w-full">
      {/* BACKGROUND IMAGE */}
      <img
        src={images[currentIndex]}
        alt="Hero"
        className="h-full w-full object-cover transition-all duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-end max-w-7xl mx-auto mb-10">
        <div className="px-4 text-center text-white">
          <h1 className="max-w-2xl text-left font-bold text-white">
            <span className=" font-serif block text-lg font-semibold md:text-xl">
              Best Indian Food in North Brunswick Township
            </span>

            <span className=" font-serif mt-2 block text-3xl leading-tight md:text-5xl">
              Elegant Dining With Authentic Recipes and Great Service
            </span>
          </h1>

          <Button />
        </div>
      </div>
    </section>

  )
}

export default Hero
