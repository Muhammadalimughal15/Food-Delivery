import React, { useContext, useState } from "react";
import header_logo from "../assets/header_logo.avif";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-30 h-23 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* LEFT - LOGO */}
        <Link to="/">
          <img
            src={header_logo}
            alt="logo"
            className="max-h-full cursor-pointer object-contain"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 ml-auto">
          {/* MORE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 rounded-md px-4 py-2 hover:bg-gray-100"
            >
              More
              <ion-icon name="chevron-down-outline"></ion-icon>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white p-2 shadow-md">
                <Link to="/menu" className="block px-4 py-2 hover:bg-gray-100">
                  Menu
                </Link>

                <Link
                  to="/banquets"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Banquets
                </Link>

                <Link
                  to="/catering"
                  className="hidden lg:block px-4 py-2 hover:bg-gray-100"
                >
                  Catering
                </Link>

                <Link
                  to="/our-story"
                  className="hidden lg:block px-4 py-2 hover:bg-gray-100"
                >
                  Our Story
                </Link>

                <Link
                  to="/events"
                  className="hidden lg:block px-4 py-2 hover:bg-gray-100"
                >
                  Events
                </Link>

                <Link
                  to="/giftcards"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Gift Cards
                </Link>

                <Link
                  to="/hiring"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  We're Hiring
                </Link>

                <Link to="/terms" className="block px-4 py-2 hover:bg-gray-100">
                  General Terms & Conditions
                </Link>
              </div>
            )}
          </div>

          {/* SIGN IN */}
          <Link
            to="/sign-in"
            className="hidden md:block rounded-lg px-3 py-2 shadow hover:bg-gray-100"
          >
            Sign in
          </Link>

          {/* CART BUTTON */}
          <button
            onClick={() => setShowCart(true)}
            className="hidden md:flex items-center gap-1 rounded-lg px-3 py-2 shadow hover:bg-gray-100 cursor-pointer relative"
          >
            <ShoppingCart size={18} />

            {/* CART COUNT */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl md:hidden"
          >
            <ion-icon
              name={mobileMenu ? "close-outline" : "menu-outline"}
            ></ion-icon>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="space-y-3 bg-white px-6 py-4 shadow md:hidden">
          <Link className="block px-4 py-2 hover:bg-gray-100">Sign in</Link>

          <button
            onClick={() => setShowCart(true)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Cart
          </button>

          <Link className="block px-4 py-2 hover:bg-gray-100">Menu</Link>

          <Link className="block px-4 py-2 hover:bg-gray-100">Banquets</Link>
        </div>
      )}

      {/* OVERLAY */}
      {showCart && (
        <div
          onClick={() => setShowCart(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* CART SIDEBAR */}
      {showCart && (
        <div className="fixed top-0 right-0 w-[350px] h-screen bg-white shadow-2xl p-5 z-50 overflow-y-auto">
          {/* TOP */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Cart Items</h2>

            <button
              onClick={() => setShowCart(false)}
              className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* EMPTY CART */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="border-b py-4">
                  <div className="flex gap-4">
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    {/* INFO */}
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>

                      <p className="text-sm text-gray-500">${item.price}</p>

                      {/* QUANTITY */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          +
                        </button>
                      </div>

                      {/* ITEM TOTAL */}
                      <p className="mt-2 font-bold">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      {/* REMOVE BUTTON */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* GRAND TOTAL */}
              <div className="mt-6 border-t pt-4">
                <h2 className="text-xl font-bold">
                  Grand Total: ${totalPrice.toFixed(2)}
                </h2>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
