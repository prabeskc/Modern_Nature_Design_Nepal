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
        
        {/* Left Content */}
        <div className="w-full lg:w-full max-w-5xl mx-auto space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm">
            Weaving Heritage into Modern Elegance
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Modern Nature Design Nepal (MND Nepal) weaves stories of tradition,
            craftsmanship, and creativity into every rug. Inspired by the ancient
            artistry of Tibet and brought to life by the skilled hands of Nepalese
            weavers, we create premium, export-quality hand-knotted rugs that unite
            timeless heritage with modern design sensibilities.
          </p>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Celebrated across international markets, our rugs are admired for their
            graphic elegance, intricate detailing, and lasting durability. With over{" "}
            <span className="font-semibold text-gray-800">2,000 color shades</span>{" "}
            and knot densities of <span className="font-semibold text-gray-800">
            60, 80, and 100–150 knots</span>, each rug is meticulously hand-knotted
            to a 5 mm thickness — showcasing precision and artistry in perfect harmony.
          </p>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We supply exclusively on a wholesale basis, crafting custom rugs to meet
            the unique needs of clients worldwide.
          </p>

          <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-1">
            <p>✨ <span className="font-semibold">100% child labor–free production</span></p>
            <p>🌿 <span className="font-semibold">All-natural materials</span> – high-quality sheep’s wool and eco-friendly fibers</p>
            <p>🧶 <span className="font-semibold">Entirely handmade</span>, preserving Nepal’s traditional weaving heritage</p>
          </div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Beyond business, we believe in empowerment and purpose — offering fair
            employment to skilled artisans and helping preserve Nepal’s cultural legacy.
            Every rug we create is a unique masterpiece — a fusion of artistry, ethics,
            and emotion — adorning prestigious interiors, homes, and hotels around the world.
          </p>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-gray-800">Modern Nature Design Nepal</span>, 
            we don’t just make rugs — we craft timeless expressions of Nepalese artistry 
            for the world to cherish.
          </p>
        </div>

        {/* Right Image */}
        {/* <div className="w-full lg:w-1/2">
          <img
            src="assets/images/about/12.jpg"
            alt="About Modern Nature Design Nepal"
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </div> */}

      </div>
    </motion.section>
  );
};

export default AboutUsPage;
