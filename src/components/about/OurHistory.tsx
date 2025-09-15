// src/components/OurHistoryPage.tsx
import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurHistoryPage: React.FC = () => {
  return (
    <motion.section
      className="bg-white py-16 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-5xl mx-auto space-y-6" variants={itemVariants}>
        <h2 className="text-4xl font-bold text-gray-800 text-center">Our History</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Modern Nature Design Nepal (MND Nepal) is a leading manufacturer and supplier of hand-knotted rugs,
          located in the heart of Lalitpur, Nepal. It was established in 1990 A.D. with the vision of manufacturing
          the best quality rugs around the globe and has gained the reputation of a versatile designer, an
          innovative manufacturer, and a leading exporter of Nepalese hand-knotted rugs.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          MND Nepal keeps an interest in collaboration with companies and designers for high-end rug requirements
          in the international market. It is a pleasure to weave different designs and concepts into a rug,
          which helps create rugs according to your design and specifications.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          The rugs manufactured by MND Nepal can be found in some five-star hotels, casinos, universities, restaurants,
          museums, and in some residential areas around the USA, Canada, Europe, and Australia. It provides jobs for
          more than 150 people. All staff are highly experienced and have been working for many years. The rugs manufactured
          by MND Nepal are 100% child labor-free. All natural materials are used to make rugs, and no machines are used.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default OurHistoryPage;
