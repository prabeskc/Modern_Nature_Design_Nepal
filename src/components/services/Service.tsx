import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ServiceSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const services: ServiceSection[] = [
  {
    id: "1",
    title: "Strike-Offs & Samples",
    subtitle: "See. Feel. Perfect Your Design.",
    image: "/public/assets/images/services/strikeoffs-and-samples.png",
    description: `
      At Modern Nature Design Nepal, we know that perfection begins with the smallest detail. That’s why we offer strike-offs and samples — your opportunity to experience the true color, texture, and craftsmanship of your rug before full production.<br /><br />
      Our strike-offs showcase every element — yarn quality, pile height, and weaving precision — so you can confidently finalize your design. Available in <strong>30×30 cm</strong>, <strong>60×60 cm</strong>, or custom sizes, they ensure your rug turns out exactly as envisioned.<br /><br />
      We also offer expert color matching services, allowing us to perfectly replicate shades from swatches, yarn samples, tufts, or fabric references you provide. Every hue is matched with precision to bring your creative vision to life.<br />
      We value our clients and partners — that’s why we provide special discounts or even free strike-offs for regular clients, depending on sample value.<br /><br />
      ✨ From concept to craftsmanship, every detail is woven to perfection.
    `,
  },
  {
    id: "2",
    title: "Color Poms & Tufts",
    subtitle: "Bring Your Colors to Life",
    image: "/public/assets/images/services/colorpoms.png",
    description: `
      We match any shade — from fabric swatches, yarns, leather, or Pantone codes — in wool, silk, or other materials. Create your custom color kits or mini rug swatches for a perfect preview.<br /><br />
      Instant access to a world of shades:<br />
      <strong>ARS 1200 Wool Box</strong> – 1,200 colors<br />
      <strong>ARS 700 Viscose Box</strong> – 700 colors<br />
      <strong>ARS 1000 Viscose Box</strong> – 1,000 colors<br /><br />
      ✨ Turn your vision into vibrant reality — one perfect shade at a time.
    `,
  },
  {
    id: "3",
    title: "Online Color Customizer",
    subtitle: "Your Vision, Your Colors — Instantly",
    image: "/public/assets/images/services/online-color-customizer.png",
    description: `
      No color kits? No problem. Our Online Color Customizer lets you choose, adjust, and share your color preferences directly online — making communication seamless and precise. Whether you’re exploring new palettes or matching existing shades, our digital tool ensures your colors are clear, consistent, and ready for creation.<br /><br />
      ✨ Design from anywhere — we’ll bring your colors to life.
    `,
  },
  {
    id: "4",
    title: "Renderings & CAD",
    subtitle: "Where Imagination Meets Precision",
    image: "/public/assets/images/services/rendering.png",
    description: `
      Every great rug begins with a vision. Our exclusive rendering and CAD service transforms your ideas into detailed, lifelike designs that capture the essence of your concept before weaving begins.<br /><br />
      Whether inspired by fabric colors, artworks, wall hangings, or real photographs, our skilled designers translate any reference into elegant rug compositions that mirror your imagination with stunning accuracy.<br /><br />
      Each design is your exclusive property, safeguarded under your copyright.<br /><br />
      <strong>Note:</strong> Rendering and CAD services are offered only to clients who produce rugs with us. Designs are not sold separately.<br /><br />
      ✨ Your imagination, beautifully designed — the first step to a masterpiece.
    `,
  },
  {
    id: "5",
    title: "Shipment & Delivery",
    subtitle: "Your Rugs, Anywhere in the World",
    image: "/public/assets/images/services/shipping.png",
    description: `
      We ship your rugs as agreed — small orders via couriers (door-to-door) or air cargo, larger shipments via the same fast, reliable channels.<br /><br />
      <strong>FedEx, DHL, UPS:</strong> 3–5 days<br />
      <strong>Air cargo:</strong> 5–7 days to your nearest airport.<br /><br />
      Shipping cost depends on weight or volume, and we provide all documents — invoice, packing list, GSP form, and certificate of origin — for smooth customs clearance.<br /><br />
      Classified under <strong>HS Code 5701.10.4000</strong> and registered under the <strong>EU REX system</strong>, our rugs qualify for generalized tariff preferences.<br /><br />
      ✨ Fast, compliant, and ready to deliver your handcrafted masterpiece anywhere in the world.
    `,
  },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceSection | null>(
    null
  );

  return (
    <section className="bg-[url('/public/assets/images/products/Cells.jpg')] min-h-screen bg-[#fdfdfb] py-28 flex justify-center">
      <div className="w-11/12 md:w-4/5">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h1>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gray-400 rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg cursor-pointer"
              onClick={() => setActiveService(service)}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-lg font-medium text-black-600">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key={activeService.id}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row"
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Left Image */}
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 p-8 overflow-y-auto max-h-[90vh]">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-semibold text-gray-900">
                      {activeService.title}
                    </h2>
                    <button
                      onClick={() => setActiveService(null)}
                      className="text-gray-400 hover:text-gray-700 transition"
                    >
                      <X size={28} />
                    </button>
                  </div>
                  <p className="text-lg font-medium text-black-600 mb-6">
                    {activeService.subtitle}
                  </p>
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: activeService.description,
                    }}
                  ></div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
