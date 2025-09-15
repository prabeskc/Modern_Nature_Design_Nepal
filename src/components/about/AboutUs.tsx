// src/components/AboutUsPage.tsx
import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUsPage: React.FC = () => {
  return (
    <motion.section
      className="bg-gray-50 py-16 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-5xl mx-auto space-y-6" variants={itemVariants}>
        <h2 className="text-4xl font-bold text-gray-800 text-center">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Modern Nature Design Nepal produces the finest export-quality rugs using
          the traditional craftsmanship magic from Tibet and all over Nepal. The company
          sells its rugs in international markets, primarily targeting interiors with their
          graphic designs and intricate detail work. We have over 2000 color shades available
          in 60, 80, 120, and 150. These rugs are typically 5 mm thick, and we supply them wholesale,
          depending on the orders placed.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our company also employs weavers from uneducated backgrounds; roughly 70 percent of the country's
          population is looking for work opportunities. These dexterous people's end results are
          un-replicated masterpieces of rugs made from sheep's wool and synthetic fibers.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutUsPage;
