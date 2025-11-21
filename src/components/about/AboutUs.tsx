import React, { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUsPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.3 } // pause when <30% visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      className="relative bg-gradient-to-br from-white via-gray-50 to-amber-50 py-24 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="flex flex-col lg:flex-row w-4.5/5 mx-auto">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-5xl mx-auto space-y-6 lg:text-left">
          <h2 className="text-4xl md:text-3xl font-bold text-gray-800 drop-shadow-sm">
            Weaving Heritage into Modern Elegance
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify">
            Modern Nature Design Nepal (MND Nepal) weaves stories of tradition, craftsmanship, and creativity into every rug. Inspired by the ancient artistry of Tibet and brought to life by the skilled hands of Nepalese weavers, we create premium, export-quality hand-knotted rugs that unite timeless heritage with modern design sensibilities.
            <br/> <br/>
            Celebrated across international markets, our rugs are admired for their graphic elegance, intricate detailing, and lasting durability. With over 2,000 color shades and knot densities of 60, 80, and 100 150 knots, each rug is meticulously hand-knotted to a 5 mm thickness, showcasing precision and artistry in perfect harmony.
            We supply exclusively on a wholesale basis, crafting custom rugs to meet the unique needs of clients worldwide.
             <br/> <br/>
            At MND Nepal, craftsmanship goes hand-in-hand with conscience:
            ✨100% child labor-free production 
            🌿All-natural materials, high-quality sheep’s wool and eco-friendly fibers
            🧶Entirely handmade, preserving Nepal’s traditional weaving heritage 
             <br/> <br/>
            Beyond business, we believe in empowerment and purpose - offering fair employment to skilled artisans and helping preserve Nepal’s cultural legacy. Every rug we create is a unique masterpiece - a fusion of artistry, ethics, and emotion - adorning prestigious interiors, homes, and hotels around the world.
            At Modern Nature Design Nepal, we don’t just make rugs - we craft timeless expressions of Nepalese artistry for the world to cherish.
          </p>
        </div>

        {/* Right Video (updated) */}
        <div className="w-full lg:w-1/2 ml-12 flex justify-center">
          <video
            ref={videoRef}
            src="/public/assets/images/about/video.mov"
            controls
            className="rounded-2xl shadow-lg w-full h-[820px] object-cover"
          />
        </div>

      </div>
    </motion.section>
  );
};

export default AboutUsPage;
