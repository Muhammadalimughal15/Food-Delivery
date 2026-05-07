import React from "react"

const features = [
  { name: "Delivery", icon: "car-outline" },
  { name: "Dining", icon: "restaurant-outline" },
  { name: "Takeaway", icon: "bag-handle-outline" },
  { name: "Catering", icon: "fast-food-outline" },
  { name: "Reservation", icon: "calendar-outline" },
  { name: "Parking", icon: "car-sport-outline" },
  { name: "Free WiFi", icon: "wifi-outline" }
]

const Featuring = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      <div className="flex flex-col gap-6">

        <div className="text-center">
          <h2 className="text-[28px] font-semibold  h-8.75 w-[126px ] ">
            Featuring
          </h2>
        </div>

        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 
          gap-4 justify-items-center
        ">
          {features.map((item, index) => {
            let extraClass = ""

            if (index === 5) extraClass = "md:col-start-2"
            if (index === 6) extraClass = "md:col-start-4"

            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-1 text-center ${extraClass}`}
              >
                <div className="text-3xl text-black">
                  <ion-icon name={item.icon}></ion-icon>
                </div>

                <p className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Featuring