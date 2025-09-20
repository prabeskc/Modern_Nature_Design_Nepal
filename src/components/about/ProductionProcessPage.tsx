import React from "react";
import { motion,Variants} from "framer-motion";

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const steps = [
  { title: "Wool Sorting & Washing", image: "assets/images/about/1.jpeg", description: "Raw wool is carefully sorted, impurities removed, and thoroughly cleaned." },
  { title: "Carding", image: "assets/images/about/2.jpg", description: "Fibers are combed to remove residues and prepare for spinning." },
  { title: "Spinning", image: "assets/images/about/3.jpg", description: "Traditional spinning wheels twist threads into yarn." },
  { title: "Dyeing", image: "assets/images/about/4.jpg", description: "Yarns are dyed with Swiss chrome azo-free or vegetable dyes." },
  { title: "Weaving", image: "assets/images/about/5.jpeg", description: "Weavers handcraft rugs using looms and traditional tools." },
  { title: "Clipping & Carving", image: "assets/images/about/6.jpg", description: "Edges are clipped and designs refined for a smooth finish." },
  { title: "Washing & Drying", image: "assets/images/about/7.jpeg", description: "Rugs are washed with soap and left to dry naturally." },
  { title: "Final Clipping", image: "assets/images/about/8.jpg", description: "Surfaces are clipped again for uniformity." },
  { title: "Stretching", image: "assets/images/about/9.jpeg", description: "Rugs are stretched on frames to lock their shape." },
  { title: "Finishing & Checking", image: "assets/images/about/10.jpg", description: "Experts inspect rugs for size, texture, and quality." },
  { title: "Packing", image: "assets/images/about/11.png", description: "Rugs are packed in waterproof sheets for safe transport." },
  { title: "Shipping", image: "assets/images/about/12.jpg", description: "Dispatched worldwide with trusted couriers." },
];

const ProductionProcessPage: React.FC = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-white via-gray-50 to-amber-50 py-20 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.div className="max-w-6xl mx-auto" variants={fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 drop-shadow-sm">
          Production Process
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Every rug is a masterpiece woven by hand — from raw wool to final
          finish, each step reflects dedication, tradition, and craftsmanship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
              variants={fadeInUp}
            >
              <a href={step.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProductionProcessPage;
