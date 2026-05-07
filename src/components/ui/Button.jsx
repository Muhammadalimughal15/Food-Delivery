import React from "react";

const Button = ({ text = "Order online", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group hidden items-center justify-center gap-1 rounded-lg bg-red-500 py-2 px-3 text-black hover:bg-red-400 md:flex text-base font-medium cursor-pointer"
    >
      {text}

      <span className="relative flex h-5 w-5 items-center justify-center">
        <ion-icon
          name="chevron-forward-outline"
          className="absolute transition-opacity duration-200 group-hover:opacity-0"
        ></ion-icon>

        <ion-icon
          name="arrow-forward-outline"
          className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        ></ion-icon>
      </span>
    </button>
  );
};

export default Button;