// src/components/ProductionProcessPage.tsx
import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const steps = [
  {
    title: "1. WOOL SORTING AND WASHING",
    image: "assets/images/about/1.jpeg",
    description:
      "Shearing the sheep yields wool. This is the raw material for the weavers. Initially, we sort the yarn by eliminating non-pure wool particles like wood and vegetables. We then separate them based on their respective colors. White ones from the darker shade color by hand, and then they get rinsed with warm water. The weavers thoroughly clean the pure wool before weaving it into the rug.",
  },
  {
    title: "2. CARDING",
    image: "assets/images/about/2.jpg",
    description:
      "This is the process that supports spinning yarns out of pure wool. Carding separates the fibers from intermingling, removes any foreign particles or residues, and makes the wool pure. We use a traditional steel tool, and a wooden hand comb helps create yarn.",
  },
  {
    title: "3. SPINNING",
    image: "assets/images/about/3.jpg",
    description:
      "The charkha, a traditional spinning wheel, draws and twists the threads to create yarn of the desired thickness. We use these stagnant pools of yarn to weave the rugs.",
  },
  {
    title: "4. DYEING",
    image: "assets/images/about/4.jpg",
    description:
      "To complete the dyeing process, we wash the spun yarn with warm water. They rinse it thoroughly and dye it in a large pot on the stove. They do this either with Swiss chrome azo-free dye or with vegetable dye, which is more in demand or requested by clients.",
  },
  {
    title: "5. WEAVING",
    image: "assets/images/about/5.jpeg",
    description:
      "The weavers then prepare the dyed yarn for weaving, using it to create rugs. They use traditional tools like scissors, comb heaters, iron rods, and levers to make the rugs. They see the designs before their eyes and work on a loom to have the design on the rug.",
  },
  {
    title: "6. CLIPPING AND CARVING",
    image: "assets/images/about/6.jpg",
    description:
      "The weavers unload the woven rugs from the handloom onto a surface, then use the khapsi, a traditional scissor, to clip the rough edges, ensuring a uniform level of the woven pile. They cut the designs at the edges, giving a sophisticated finish to the woven rugs.",
  },
  {
    title: "7. WASHING AND DRYING",
    image: "assets/images/about/7.jpeg",
    description:
      "We will now wash the rugs using the long wooden flappers, rubbing them off on the pile's surface to trap the water and leave it for later use. We use regular liquid soaps to wash the rugs. The cleaned carpets take four to seven days to dry.",
  },
  {
    title: "8. SECOND CLIPPING AND CARVING",
    image: "assets/images/about/8.jpg",
    description:
      "Once the rugs have dried, we clip them one final time to ensure the surface balance and finish. This is the final clipping and carving to get a finished result.",
  },
  {
    title: "9. STRETCHING",
    image: "assets/images/about/9.jpeg",
    description:
      "We will now stretch the rugs on all four sides using metal frames or hooks. We will lock the rugs into their edges and allow them to stand on the metal frames and clips for 24 hours. This will help the rug retain its shape and durability.",
  },
  {
    title: "10. FINALLY FINISHING AND CHECKING",
    image: "assets/images/about/10.jpg",
    description:
      "When the rugs come out of the frame, they go under the professionals' keen eyes to see any residues or shortcomings in the weaving and design. They regard key indicators such as size, shape, surface, structure, and stains as essential for the final product's quality standards.",
  },
  {
    title: "11. PACKING",
    image: "assets/images/about/11.png",
    description:
      "After the inspection, we pack the approved rugs in a heavy-duty plastic bag and cover them with waterproof sheets to prevent wear and tear. We pile them into burlap and prepare them for transportation to the market for sale.",
  },
  {
    title: "12. SHIPPING",
    image: "assets/images/about/12.jpg",
    description:
      "The rugs are shipped with the fastest courier service, which normally takes 3–4 business days.",
  },
];

const ProductionProcessPage: React.FC = () => {
  return (
    <motion.section
      className="bg-white py-16 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Production Process
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Modern Natural Design Nepal Rugs makes beautiful rugs from weavers' hands that are true to their craftsmanship. They have a few tools and a pre-designed blueprint in front of them, on which they work for days by hand to produce fine-quality, durable rugs in Nepal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
              variants={itemVariants}
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
