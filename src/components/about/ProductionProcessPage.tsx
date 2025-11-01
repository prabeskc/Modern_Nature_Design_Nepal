
import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface Step {
  title: string;
  image: string;
  description: string;
  detailedDescription?: string;
}

const steps: Step[] = [
  {
    title: "Wool Sorting & Washing",
    image: "assets/images/about/1.jpeg",
    description:
      "Raw wool is carefully sorted, impurities removed, and thoroughly cleaned.",
    detailedDescription:
      "Shearing the sheep yields wool. This is the raw material for the weavers. Initially, we sort the yarn by eliminating non-pure wool particles like wood and vegetables. We then separate them based on their respective colors. White ones from the darker shade color by hand, and then they get rinsed with warm water. The weavers thoroughly clean the pure wool before weaving it into the rug. They do not blend well with other wool brands."
  },
  {
    title: "Carding",
    image: "assets/images/about/2.jpg",
    description:
      "Fibers are combed to remove residues and prepare for spinning.",
    detailedDescription:
      "This is the process that supports spinning yarns out of pure wool. Carding separates the fibers from intermingling, removes any foreign particles or residues, and makes the wool pure. We use a traditional steel tool, and a wooden hand comb helps create yarn."
  },
  {
    title: "Spinning",
    image: "assets/images/about/3.jpg",
    description:
      "Traditional spinning wheels twist threads into yarn.",
    detailedDescription:
      "The charkha, a traditional spinning wheel, draws and twists the threads to create yarn of the desired thickness. We use these stagnant pools of yarn to weave the rugs."
  },
  {
    title: "Dyeing",
    image: "assets/images/about/4.jpg",
    description:
      "Yarns are dyed with Swiss chrome azo-free or vegetable dyes.",
    detailedDescription:
      "Dyeing To complete the dyeing process, we wash the spun yarn with warm water. They rinse it thoroughly and dye it in a large pot on the stove. They do this either with Swiss chrome azo-free dye or with vegetable dye, which is more in demand or requested by clients."
  },
  {
    title: "Weaving",
    image: "assets/images/about/5.jpeg",
    description:
      "Weavers handcraft rugs using looms and traditional tools.",
    detailedDescription:
      "The weavers then prepare the dyed yarn for weaving, using it to create rugs. They use traditional tools like scissors, comb heaters, iron rods, and levers to make the rugs. They see the designs before their eyes and work on a loom to have the design on the rug."
  },
  {
    title: "Clipping & Carving",
    image: "assets/images/about/6.jpg",
    description:
      "Edges are clipped and designs refined for a smooth finish.",
    detailedDescription:
      "The weavers unload the woven rugs from the handloom onto a surface, then use the khapsi, a traditional scissor, to clip the rough edges, ensuring a uniform level of the woven pile. They cut the designs at the edges, giving a sophisticated finish to the woven rugs."
  },
  {
    title: "Washing & Drying",
    image: "assets/images/about/7.jpeg",
    description:
      "Rugs are washed with soap and left to dry naturally.",
    detailedDescription:
      "We will now wash the rugs using the long wooden flappers, rubbing them off on the pile's surface to trap the water and leave it for later use. We use regular liquid soaps to wash the rugs. The cleaned carpets take four to seven days to dry."
  },
  {
    title: "Final Clipping",
    image: "assets/images/about/8.jpg",
    description: "Surfaces are clipped again for uniformity.",
    detailedDescription:
      "Once the rugs have dried, we clip them one final time to ensure the surface balance and finish. This is the final clipping and carving to get a finished result."
  },
  {
    title: "Stretching",
    image: "assets/images/about/9.jpeg",
    description: "Rugs are stretched on frames to lock their shape.",
    detailedDescription:
      "We will now stretch the rugs on all four sides using metal frames or hooks. We will lock the rugs into their edges and allow them to stand on the metal frames and clips for 24 hours. This will help the rug retain its shape and durability."
  },
  {
    title: "Finishing & Checking",
    image: "assets/images/about/10.jpg",
    description: "Experts inspect rugs for size, texture, and quality.",
    detailedDescription:
      "When the rugs come out of the frame, they go under the professionals' keen eyes to see any residues or shortcomings in the weaving and design. They regard key indicators such as size, shape, surface, structure, and stains as essential for the final product's quality standards."
  },
  {
    title: "Packing",
    image: "assets/images/about/11.png",
    description:
      "Rugs are packed in waterproof sheets for safe transport.",
    detailedDescription:
      "After the inspection, we pack the approved rugs in a heavy-duty plastic bag and cover them with waterproof sheets to prevent wear and tear. We pile them into burlap and prepare them for transportation to the market for sale."
  },
  {
    title: "Shipping",
    image: "assets/images/about/12.jpg",
    description: "Dispatched worldwide with trusted couriers.",
    detailedDescription:
      "Shipping The rugs are shipped with the fastest courier service, which normally takes 3–4 business days."
  },
];

const ProductionProcessPage: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

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

        {/* Grid Layout (same as your original) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
              variants={fadeInUp}
              onClick={() => setSelectedStep(step)}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
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

      {/* Detail Card Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-[90%] p-6 relative flex flex-col md:flex-row gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                ×
              </button>

              {/* Left Side - Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={selectedStep.image}
                  alt={selectedStep.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>

              {/* Right Side - Description */}
              <div className="md:w-1/2 w-full flex flex-col justify-center overflow-y-auto max-h-[80vh] pr-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {selectedStep.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {selectedStep.detailedDescription || selectedStep.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProductionProcessPage;



