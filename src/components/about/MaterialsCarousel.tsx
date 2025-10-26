import React, { useMemo, useState, useCallback, useEffect } from "react";

type Material = {
  title: string;
  description: string;
};

const materials: Material[] = [
  {
    title: "Tibetan Wool",
    description:
      "The quality of soft and lustrous wool supplied to make rugs comes from highland sheep's coats. These sheep, called 'Changphel,' graze at 14,000 feet in the cold Himalayan region. The wool has distinctive marks with tensile strength, long fleeces, and lanolin richness, making it soft, durable, and luxurious. Rugs made from Tibetan wool are warm, furry, and available in two shades: pure white and dark grey.",
  },
  {
    title: "New Zealand Wool",
    description:
      "This wool comes from the fur coating of merino sheep found in Australia and New Zealand. Known for its soft, white color and fine crimp, it enhances the beauty and aesthetics of woven rugs. Often blended with Tibetan wool, silk, or synthetic fabrics, New Zealand wool contributes to high-quality, valuable rug finishes.",
  },
  {
    title: "Chinese Silk",
    description:
      "Produced by Bombyx mori silkworms in the cocoon stage, Chinese silk is renowned for its luxurious and soft quality. When combined with wool, it enhances rugs by adding both softness and shine.",
  },
  {
    title: "Lurex",
    description:
      "Lurex is a type of yarn with a metallic appearance. The yarn is made from synthetic film, onto which a metallic aluminium, silver, or gold layer has been vaporized."
  },
  {
    title: "Viscose",
    description:
      "Made from cellulose xanthate, viscose is a regenerated fiber that mimics the qualities of silk. When used in rugs, it provides a glossy, silken feel at a more economical price, making it a popular choice in Nepal’s rug-making industry.",
  },
  {
    title: "Tencel",
    description:
      "A synthetic fiber made by the Australian company Lenzing AG, Tencel is derived from wood pulp that is dried, chipped, and mixed with solvents before being spun into threads. Known for being smooth, soft, and sustainable, Tencel retains its properties even after repeated washes, making it an innovative choice for modern rugs.",
  },
];

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const MaterialsCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track mobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + materials.length) % materials.length);
  }, []);

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % materials.length);
  }, []);

  const layout = useMemo(() => {
    const STEP_X = 360; // horizontal spacing between cards
    const SCALE_FACTOR = 0.08; // scale reduction for side cards
    const MAX_VISIBLE = 1; // left/right cards relative to center

    return materials.map((_, i) => {
      let d = i - active;
      if (d > materials.length / 2) d -= materials.length;
      if (d < -materials.length / 2) d += materials.length;

      if (Math.abs(d) > MAX_VISIBLE) return { d, tx: 0, scale: 0, opacity: 0, z: 0 };

      const tx = d * STEP_X;
      const scale = 1 - Math.abs(d) * SCALE_FACTOR;
      const opacity = 1 - Math.abs(d) * 0.3;
      const z = 100 - Math.abs(d);

      return { d, tx, scale, opacity, z };
    });
  }, [active]);

  return (
    <section className="bg-white py-16 select-none">
      <div className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900">
          Materials We Offer
        </h2>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={goPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-slate-900">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={goNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-slate-900">
              <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          {/* Cards */}
          <div className="relative h-[400px] sm:h-[450px] flex justify-center items-center">
            {materials.map((m, i) => {
              const { tx, scale, opacity, z } = layout[i];
              if (opacity === 0) return null; // hide cards outside visible range

              return (
                <div
                  key={i}
                  className="absolute w-[300px] sm:w-[340px] h-[360px] sm:h-[400px] bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col justify-center transition-transform duration-500"
                  style={{
                    transform: `translateX(${tx}px) scale(${scale})`,
                    zIndex: z,
                    opacity,
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">{m.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 text-justify overflow-auto">
                    {m.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default MaterialsCarousel;
