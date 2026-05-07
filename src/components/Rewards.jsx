import React from "react"
import { assets } from "../assets/assets"
import Button from "./ui/Button"


const Rewards = () => {
  return (
    <div className="relative w-full p-8 md:p-8">
  {/* IMAGE CONTAINER */}
  <div className="relative mx-auto flex h-125 md:h-200 max-w-380 items-center justify-center overflow-hidden rounded-2xl">
    
    <img
      src={assets.Rewards}
      alt="Order with Ease"
      className="h-full w-full object-cover"
    />

    {/* OVERLAY CARD */}
    <div className="absolute inset-0 flex items-center justify-start p-6 md:p-56 rounded-2xl">
      
      {/* CARD */}
      <div className="flex w-full md:w-full max-w-157 flex-col gap-6 rounded-2xl bg-[#ECEEDF] p-6 md:p-8 text-black backdrop-blur-md">
        
        <h2 className="text-xl md:text-3xl font-semibold">
          Guru Palace Rewards
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-black">
         Join our rewards program, earn points every time you order online, and redeem your points for free food!
        </p>

        <Button  text="Join Guru Palace Rewards"/>

      </div>
    </div>
  </div>
</div>
  )
}

export default Rewards
