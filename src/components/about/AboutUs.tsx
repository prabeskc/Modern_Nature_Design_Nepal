import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUsPage: React.FC = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-white via-gray-50 to-amber-50 py-20 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="flex flex-col lg:flex-row gap-20 w-4/5 mx-auto items-center justify-center">
        <div className="w-full lg:w-1/2 max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
            About Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Modern Nature Design Nepal produces the finest export-quality rugs
            using the traditional craftsmanship magic from Tibet and all over
            Nepal. Our rugs are sold in international markets, known for their
            graphic designs and intricate detail work. With over{" "}
            <span className="font-semibold text-gray-800">2000+ color shades</span>{" "}
            and multiple thickness options, we supply wholesale based on orders.
          </p>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We proudly employ skilled weavers from underprivileged backgrounds,
            giving them opportunities to create{" "}
            <span className="font-semibold text-gray-800">unreplicated masterpieces</span>{" "}
            from sheep’s wool and synthetic fibers — sustaining both tradition and livelihoods.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <img src="assets/images/about/12.jpg"></img>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsPage;
