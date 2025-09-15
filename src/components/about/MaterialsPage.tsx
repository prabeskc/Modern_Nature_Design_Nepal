// src/components/MaterialsPage.tsx
import React from "react";
import { motion, Variants, easeInOut, easeOut } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeOut } },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: easeInOut } },
};

const materials = [
  {
    title: "Tencel",
    description:
      "Lenzing AG, an Australian company, manufactures Tencel, a synthetic fiber. Its primary source differs from silkworms or sheep. They create the fabric by drying, chipping, and mixing wood pulp with a solvent, resulting in a wet mixture. They push the mixture through tiny holes to form threads that undergo a chemical treatment, spin the lengths to make yarn, and then weave them to create clothes. Modern Nature Design Nepal also uses them to make rugs that come off smooth and soft. Repeated washes and drying cycles retain these qualities.",
  },
  {
    title: "Viscose",
    description:
      "Cellulose xanthate forms the viscose rayon fiber. When used in rug production, it imbues the rugs with a glossy, silken feel, making them visually appealing for sale in the marketplace. This is more economical than other methods of making rugs in Nepal.",
  },
  {
    title: "New Zealand Wool",
    description:
      "The fur coating of merino sheep, found in Australia and New Zealand, yields wool, also known as New Zealand wool. They are soft white-colored wool and finely crimped, making the finishing of the woven rugs more beautiful and aesthetic. To create the end product and increase its sale value, they also blend it with Tibetan wool, silk, or other synthetic fabrics.",
  },
  {
    title: "Tibetan Wool",
    description:
      "Highland sheep's coats provide the quality of soft and lustrous wool required to make rugs. The sheep that produces this wool is called 'Changphel' and is found in the Himalayan region in the lands of nomads 14000 feet above, grazing in the cold weather. The wool from these sheep has distinctive marks because it has more tensile strength, longer fleeces, and lanolin, making the fur more woolly, soft, durable, and luxurious. The Tibetan wool comes in two different shades: one is pure white, and the other is dark grey.",
  },
  {
    title: "Chinese Silk",
    description:
      "During the cocoon stage, silkworms spin these fabrics. Bombyx mori is the Chinese silk's name, and the quality is luxurious and soft. When combined with wool from sheep, it makes the rugs more soft and shiny.",
  },
];

const MaterialsPage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      className="bg-gray-50 py-16 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Materials We Offer
        </h2>
        <Slider {...settings}>
          {materials.map((material, index) => (
            <div key={index} className="px-4">
              <motion.div
                className="bg-white shadow-md rounded-2xl p-6 h-[400px] flex flex-col justify-between"
                variants={itemVariants}
                whileHover="hover"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {material.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  {material.description}
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default MaterialsPage;
