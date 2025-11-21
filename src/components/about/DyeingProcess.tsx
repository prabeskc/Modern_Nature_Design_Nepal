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
  image?: string;
  description: string;
  detailedDescription?: string;
}

const steps: Step[] = [
  {
    title: "Warm Water Washing",
    image: "assets/images/about/1.jpeg",
    description: "✨ Pure. Safe. Vibrant. Crafted to last.",
    detailedDescription:
      `Before dyeing, yarns are gently washed to remove impurities, ensuring deep, even color absorption and a radiant finish.`,
  },
  {
    title: "Precision Color Sampling",
    image: "assets/images/about/2.jpg",
    description: "✨ Pure. Safe. Vibrant. Crafted to last.",
    detailedDescription: `
Dye master prepares a small sample tuft to match your desired shade. Once approved, the same formula is used for the full batch-guaranteeing consistency and perfection. The dyeing is done manually, heating pots gradually to 90-95°C. Yarns are then sun-dried naturally, giving them a luminous, lasting shine.

1. Swiss Chrome Dyes
Made in Switzerland, these dyes are metal-free, non-toxic, and colorfast, ensuring brilliance without harming your health or the planet.

2. Vegetable Dyes
Derived from plants and minerals such as walnut, indigo, madder root, and henna, these dyes create organic tones with a natural, abstract charm. 100% eco-friendly and beautifully imperfect.

3. Color Communication
We use the ARS color system and can match any sample you provide-ensuring your rug’s color is exactly as you envision.`,
  },
];

const DyingProcessPage: React.FC = () => {
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
          Dying Process
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Every color is carefully crafted to bring your rugs to life, blending artistry with precision. We use Swiss Chrome AZO-free dyes and natural vegetable dyes - safe, vibrant, and eco-friendly - for colors that are rich, lasting, and beautifully natural.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
              variants={fadeInUp}
              onClick={() => setSelectedStep(step)}
            >
              {step.image && (
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
              )}
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

      {/* Detail Modal */}
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
              {selectedStep.image && (
                <div className="md:w-1/2 w-full">
                  <img
                    src={selectedStep.image}
                    alt={selectedStep.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              )}

              {/* Right Side - Description */}
              <div className={`flex flex-col justify-center overflow-y-auto max-h-[80vh] pr-2 ${selectedStep.image ? "md:w-1/2" : "w-full"}`}>
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

export default DyingProcessPage;
