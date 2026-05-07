import React, { useState } from "react";

const CareersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    file: null,
  });

  const [showToast, setShowToast] = useState(false);

  // handle change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check all fields filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.comment ||
      !formData.file
    ) {
      alert("Please fill all fields");
      return;
    }

    // show toast
    setShowToast(true);

    // hide toast after 3 sec
    setTimeout(() => setShowToast(false), 3000);

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
      file: null,
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center py-10 px-4">

      {/* TOAST */}
      {showToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Submitted Successfully ✅
        </div>
      )}

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Join a growing team with a love for food
      </h1>

      {/* Main Card */}
      <div className="bg-[#eaeaea] rounded-2xl w-full max-w-6xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Why work with us?</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            We are always hiring A players who work hard, love helping others,
            and do great work. Fill out the 2 minute form below with your resume
            and a few sentences about you.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Location */}
          <div className="bg-white rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Location</p>
            <p className="font-semibold">GURU PALACE</p>
            <p className="text-xs text-gray-500">245 US, Rte 1 South</p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-4 space-y-4">

            <div>
              <label className="text-xs">Full name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ali"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none"
              />
            </div>

            <div>
              <label className="text-xs">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none"
              />
            </div>

            <div>
              <label className="text-xs">Phone number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 555-5555"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none"
              />
            </div>

            <div>
              <label className="text-xs">Comment</label>
              <textarea
                rows="3"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Anything to share as we consider your application?"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none"
              ></textarea>
            </div>

            <div>
              <label className="text-xs">Attachment</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
              <p className="text-[10px] text-gray-400 mt-1">
                Upload PDF resume. Max file size 2MB.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium"
          >
            Submit →
          </button>

        </form>
      </div>
    </div>
  );
};

export default CareersForm;