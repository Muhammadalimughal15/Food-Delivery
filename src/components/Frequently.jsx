import React, { useState } from "react"

const faqs = [
  {
    question: "What are you known for?",
    answer:
      "We are known for Biryani, Dal Makhani, Spring Rolls, Naan, Samosas, Fried Rice, Chicken Tikka Masala, Vindaloo, Butter Chicken, Butter Naan, Gulab Jamun, Rogan Josh, Raita, Curry, Garlic Naan, Tandoori Chicken, Lassi, Chicken Korma, Pakora, Paratha, and Dal."
  },
  {
    question: "What meals do you serve?",
    answer: "We serve Lunch and Dinner"
  },
  {
    question: "Do you offer delivery or takeout?",
    answer: "Yes, we offer Delivery and Takeout"
  },
  {
    question: "Where are you located?",
    answer:
      "We are located in North Brunswick Township, NJ at 2215 U.S. Rte 1 SOUTH"
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve North Brunswick, Adams, Maple Meade, Red Lion, Franklin, Black Horse, Franklin Park, Farrington Lake Heights, Six Mile Run, Cottageville, New Brunswick, Clyde, Deans, Milltown, East Franklin, Fresh Ponds, Pleasant Plains, Feaster Park, Fairview Knolls, Herberts."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 ">

      {/* Heading */}
      <h2 className="text-[22px] sm:text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-2">
        {faqs.map((item, index) => (
          <div key={index} className="border-b">

            {/* Question */}
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center cursor-pointer py-4"
            >
              <h3 className="text-base sm:text-lg font-medium pr-4">
                {item.question}
              </h3>

              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="bg-gray-100 p-4 text-sm sm:text-base">
                {item.answer}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ