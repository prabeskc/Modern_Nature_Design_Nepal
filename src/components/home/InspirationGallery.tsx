import React from "react";

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

export default function InspirationGalleryMinimal() {
  const item = ITEMS[0];

  return (
    <div className="w-full bg-[#f7f7f7] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-3xl font-extrabold mt-1 leading-tight">
            From Nature’s Palette to Timeless Hand-Knotted Rugs
          </h2>
        </div>

        {/* 3 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-6 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
              <div className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-700">
                <span className="text-xl">▲</span>
              </div>

              <h3 className="text-lg font-semibold tracking-wide">
                INSPIRATION
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Captured during your trek — the moment that sparked the idea.
              </p>
            </div>

            <div className="w-full h-[360px] overflow-hidden rounded-lg shadow-sm">
              <img
                src={item.photo}
                className="w-full h-full"
              />
            </div>

          </div>

          {/* CENTER COLUMN (TALLER IMAGE) */}
          <div className="space-y-6 text-center">
            <div className="w-full h-[430px] overflow-hidden rounded-lg shadow-sm">
              <img
                src={item.design}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-700">
                <span className="text-xl">✦</span>
              </div>

              <h3 className="text-lg font-semibold tracking-wide">
                ARTISTIC TRANSLATION
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Your sketch transforming natural forms into artistic language.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 text-center md:text-right">
             <div className="flex flex-col items-center md:items-end gap-2">
              <div className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-700">
                <span className="text-xl">❉</span>
              </div>

              <h3 className="text-lg font-semibold tracking-wide">
                FINISHED CARPET
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                The final hand-knotted artwork crafted by Nepali artisans.
              </p>
            </div>
            
            <div className="w-full h-[360px] overflow-hidden rounded-lg shadow-sm">
              <img
                src={item.carpet}
                className="w-full h-full"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
