import React from "react"
import { assets } from "../assets/assets"
import Button from "./ui/Button"


const OrderwithEase = () => {
  return (
    <div className="relative w-full p-8 md:p-8">
  {/* IMAGE CONTAINER */}
  <div className="relative mx-auto flex h-125 md:h-200 max-w-380 items-center justify-center overflow-hidden rounded-2xl">
    
    <img
      src={assets.Ease}
      alt="Order with Ease"
      className="h-full w-full object-cover"
    />

    {/* OVERLAY CARD */}
    <div className="absolute inset-0 flex items-center justify-start p-6 md:p-56 rounded-2xl">
      
      {/* CARD */}
      <div className="flex w-full md:w-full max-w-157 flex-col gap-6 rounded-2xl bg-[#ECEEDF] p-6 md:p-8 text-black backdrop-blur-md">
        
        <h2 className="text-xl md:text-3xl font-semibold">
          Order with Ease
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-black">
          Enjoy our food the way that works best for you. Whether you’re
          stopping in for a casual dine-in experience, picking up your meal
          on the go, or choosing delivery for added convenience, Guru Palace
          makes it simple. Browse our menu online, place your order quickly,
          and enjoy the same high-quality Indian cuisine wherever you are.
          Your next meal is only a few clicks away.
        </p>

        <Button />

      </div>
    </div>
  </div>
</div>
  )
}

export default OrderwithEase
