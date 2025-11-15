import React, { useState } from "react";

type Item = {
  id: string;
  title: string;
  short: string;
  photo: string;
  design: string;
  carpet: string;
};

const ITEMS: Item[] = [
  {
    id: "m1",
    title: "Lake and Himalayas",
    short: "Inspired by the morning light at Manaslu",
    photo: "/assets/images/home/InspirationGallery/1.png",
    design: "/assets/images/home/InspirationGallery/2.png",
    carpet: "/assets/images/home/InspirationGallery/3.png",
  },
];

export default function InspirationGallery() {
  const [active, setActive] = useState<number | null>(null);

  function open(i: number) {
    setActive(i);
    document.body.style.overflow = "hidden"; // lock scroll
  }

  function close() {
    setActive(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold mb-8">
        "From Nature’s Palette to Timeless Hand-Knotted Rugs"
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((item, i) => (
          <div
            key={item.id}
            onClick={() => open(i)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border"
          >
            <div className="h-52 relative">
              <img
                src={item.design}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.short}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal card */}
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
            
            {/* Header */}
            <div className="p-6 border-b flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  {ITEMS[active].title}
                </h3>
                <p className="text-sm text-gray-600">
                  {ITEMS[active].short}
                </p>
              </div>
              <button
                onClick={close}
                className="text-gray-500 hover:text-black text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-10">

              {/* 1. Inspiration */}
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <img
                  src={ITEMS[active].photo}
                  className="w-full lg:w-1/3 rounded-xl object-cover shadow"
                />
                <div className="lg:w-2/3">
                  <h4 className="text-xl font-bold mb-2">Inspiration</h4>
                  <p className="text-gray-600">
                    The natural scene captured during your trek—the moment
                    that sparked the idea.
                  </p>
                </div>
              </div>

              {/* 2. Design Sketch */}
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <img
                  src={ITEMS[active].design}
                  className="w-full lg:w-1/3 rounded-xl object-contain bg-gray-50 p-4 shadow"
                />
                <div className="lg:w-2/3">
                  <h4 className="text-xl font-bold mb-2">
                    Artistic Translation
                  </h4>
                  <p className="text-gray-600">
                    Your design sketch interpreting the natural elements
                    into patterns and textures.
                  </p>
                </div>
              </div>

              {/* 3. Final Carpet */}
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <img
                  src={ITEMS[active].carpet}
                  className="w-full lg:w-1/3 rounded-xl object-cover shadow"
                />
                <div className="lg:w-2/3">
                  <h4 className="text-xl font-bold mb-2">Hand-Knotted Result</h4>
                  <p className="text-gray-600">
                    The final carpet brought to life by skilled Nepali artisans.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
