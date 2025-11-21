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
      <div className="flex flex-col lg:flex-row gap-32 w-4/5 mx-auto items-center justify-center">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-5xl mx-auto space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
            Weaving Heritage into Modern Elegance
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Modern Nature Design Nepal (MND Nepal) blends heritage and contemporary artistry to create premium, hand-knotted rugs. Rooted in Tibetan weaving traditions and crafted by skilled Nepalese artisans, each rug reflects timeless craftsmanship and modern design.
            <br /> <br />
            Renowned worldwide for their refined patterns, durability, and over 2,000 color shades with 60–150 knot densities, our rugs are handwoven to a precise 5 mm thickness using natural sheep’s wool and eco-friendly fibers.
            <br /> <br />
            We operate exclusively on a wholesale, custom-order basis, ensuring every piece is ethically made — 100% child labor–free, handcrafted, and a tribute to Nepal’s weaving legacy. Beyond rugs, we weave purpose — empowering artisans and preserving culture through every creation.
          </p>
        </div>

        {/* Right Video (updated) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <video
            ref={videoRef}
            src="/public/assets/images/about/video.mov"
            controls
            className="rounded-2xl shadow-lg w-full h-[700px] object-cover"
          />
        </div>

      </div>
    </motion.section>
  );
};

export default AboutUsPage;
