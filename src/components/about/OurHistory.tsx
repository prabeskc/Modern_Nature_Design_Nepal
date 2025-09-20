import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurHistoryPage: React.FC = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
          Our History
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Modern Nature Design Nepal (MND Nepal), established in{" "}
          <span className="font-semibold text-gray-800">1990 A.D.</span>, has
          become a leading manufacturer and supplier of hand-knotted rugs in
          Lalitpur, Nepal. We are known as versatile designers, innovative
          manufacturers, and leading exporters of Nepalese hand-knotted rugs.
        </p>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          We collaborate with companies and designers worldwide to weave
          high-end rugs tailored to unique concepts and specifications.
        </p>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Our rugs have found homes in{" "}
          <span className="font-semibold text-gray-800">
            five-star hotels, casinos, universities, restaurants, museums
          </span>{" "}
          and residences across the USA, Canada, Europe, and Australia. With
          over 150 highly skilled employees, we proudly ensure{" "}
          <span className="font-semibold text-gray-800">100% child-labor-free</span>{" "}
          and eco-friendly production.
        </p>
      </div>
    </motion.section>
  );
};

export default OurHistoryPage;
