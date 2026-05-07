import React, { useState } from "react";

const SignIn = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone) {
      alert("Please enter mobile number");
      return;
    }

    alert("Number Submitted ✅");
    setPhone("");
  };

  return (
    <div className=" bg-[#ffffff] flex items-center justify-center px-4">
      
      <div className="w-full max-w-xl">
        
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center mb-8">
          Sign in or create account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="text-sm">Mobile number</label>
            <input
              type="text"
              placeholder="(555) 555-5555"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 border rounded-lg px-4 py-3 outline-none"
            />
          </div>

          {/* Benefits Box */}
          <div className="bg-[#eaeaea] rounded-2xl p-5 space-y-3">
            <h2 className="font-medium">Access exclusive benefits</h2>

            <p className="text-sm flex items-center gap-2">
              🎁 Earn points towards free food
            </p>

            <p className="text-sm flex items-center gap-2">
              🔒 Get exclusive deals & discounts
            </p>

            <p className="text-sm flex items-center gap-2">
              ⚡ Save your info for faster checkout
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Continue
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignIn;