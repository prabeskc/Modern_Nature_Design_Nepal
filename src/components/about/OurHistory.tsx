import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurHistoryPage: React.FC = () => {
  return (
    <motion.section
      className="mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="mt-4 max-w-5xl mx-auto space-y-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
          Decades of Weaving Excellence from the Heart of Nepal
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Founded in <span className="font-semibold text-gray-800">2016 A.D.</span>, Modern Nature Design Nepal (MND Nepal)
          has grown into one of Nepal’s leading manufacturers and exporters of hand-knotted rugs.
          Based in Lalitpur — the artistic hub of Nepal — MND Nepal was built with a clear vision:
          to share Nepal’s finest craftsmanship with the world.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Today, MND Nepal collaborates with international designers and global brands, bringing
          creative visions to life through exquisite woven masterpieces. Whether custom-made or from
          our curated collections, every rug reflects artistic precision and timeless beauty.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Our creations grace <span className="font-semibold text-gray-800">
          five-star hotels, museums, universities, casinos, restaurants,</span> and luxurious
          residences across the USA, Canada, Europe, and Australia.
        </p>

        <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>✨ <span className="font-semibold">100% child labor–free</span></p>
          <p>🌿 <span className="font-semibold">Committed to sustainable, all-natural materials</span></p>
          <p>🧶 <span className="font-semibold">Dedicated to handmade craftsmanship — no machines used</span></p>
        </div>

        {/* <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          MND Nepal employs over 150 skilled artisans and staff, many of whom have spent decades
          mastering their craft. Their dedication transforms every rug into a living piece of Nepal’s
          cultural legacy.
        </p> */}
      </div>
    </motion.section>
  );
};

export default OurHistoryPage;
