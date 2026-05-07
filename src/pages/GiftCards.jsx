import React, { useState } from 'react';
import { assets } from '../assets/assets'; 


const GiftCardOrder = () => {
  const [selectedAmount, setSelectedAmount] = useState('50');

  // Yahan 'assets.image_name' ko apne actual file names se replace karein
  const cardStyles = [
    { id: 1,  img: assets.giftcard1},
    { id: 2,  img: assets.giftcard2 },
    { id: 3,  img: assets.giftcard3 },
    { id: 4,  img: assets.giftcard4 },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 font-sans text-zinc-800">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-serif text-center mb-10">
        Give the Perfect Gift for Any Occasion
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Selection & Info */}
        <div className="space-y-8">
          <div>
            <div className="flex gap-4 mb-6 border-b pb-2 text-sm">
              <button className="font-bold  pb-2 cursor-pointer ">Buy Card</button>
              <button className="text-zinc-500 pb-2 cursor-pointer">Check Balance</button>
            </div>
            
            {/* Card Preview Grid with Custom Images */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 mb-6">
              {cardStyles.map((card) => (
                <div 
                  key={card.id} 
                  className="relative h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:ring-2 ring-red-400 transition-all group"
                  style={{ 
                    backgroundImage: `url(${card.img})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }}
                >
                  {/* Overlay taake text saaf dikhe */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center p-2">
                    <span className="text-white font-bold text-sm md:text-base text-center drop-shadow-md">
                      {card.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-2">Order your gift card today</h2>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Give the gift of a delicious meal with our new restaurant gift cards! 
              Perfect for any occasion, our gift cards can be used for takeout or delivery.
            </p>
          </div>
        </div>

        {/* Right Column: Form (Same as before but fully responsive) */}
        <div className="bg-white space-y-6">
          <section>
            <h3 className="text-sm font-bold mb-3">Gift Card Amount</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              {['25', '50', '75', '100', 'Custom'].map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="amount" 
                    className="accent-red-500" 
                    checked={selectedAmount === val}
                    onChange={() => setSelectedAmount(val)}
                  />
                  <span>${val}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-bold">From</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" placeholder="Name *" className="w-full border p-2 rounded text-sm focus:outline-red-400" />
              <input type="email" placeholder="Email *" className="w-full border p-2 rounded text-sm focus:outline-red-400" />
            </div>
            <input type="text" placeholder="Note" className="w-full border p-2 rounded text-sm focus:outline-red-400" />
            <label className="flex items-center gap-2 text-xs text-zinc-600 cursor-pointer">
              <input type="checkbox" className="accent-red-500" />
              Send this gift card to myself
            </label>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-bold">To</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" placeholder="Name *" className="w-full border p-2 rounded text-sm focus:outline-red-400" />
              <input type="email" placeholder="Email *" className="w-full border p-2 rounded text-sm focus:outline-red-400" />
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold mb-2">When Should We Send It?</h3>
            <div className="flex gap-4 text-sm">
              <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="when" defaultChecked className="accent-red-500" /> Deliver Now</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="when" className="accent-red-500" /> Deliver Later</label>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-bold">Payment method</h3>
            <div className="relative">
              <input type="text" placeholder="Card number *" className="w-full border p-2 rounded text-sm focus:outline-red-400" />
              <span className="absolute right-2 top-2 text-[10px] bg-zinc-100 px-1 rounded border">💳 Link</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="MM/YY" className="border p-2 rounded text-sm focus:outline-red-400" />
              <input type="text" placeholder="CVC" className="border p-2 rounded text-sm focus:outline-red-400" />
            </div>
          </section>

          <div className="border-t pt-4 space-y-1 text-sm">
            <div className="flex justify-between text-zinc-500"><span>Subtotal</span><span>${selectedAmount}.00</span></div>
            <div className="flex justify-between text-zinc-500"><span>Fee</span><span>$2.50</span></div>
            <div className="flex justify-between font-bold text-lg pt-2 text-zinc-900">
              <span>Total</span>
              <span>${(parseFloat(selectedAmount === 'Custom' ? 0 : selectedAmount) + 2.5).toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-md transition-all shadow-lg active:scale-[0.98]">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCardOrder;