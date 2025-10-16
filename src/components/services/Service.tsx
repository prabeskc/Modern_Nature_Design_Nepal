// src/components/ProductionProcessPage.tsx
import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const steps = [
    {
        title: "STRIKE-OFF AND SAMPLES",
        image: "assets/images/about/1.jpeg",
        description:
            "We will be ready to accompany you in the pre-production of the rugs by providing you with the samples you want to buy with a clear picture of the stripe-offs that show the colour and material of your rug. The stripe-off examples are the cut-offs of the specimen rugs, usually 30 by 30 centimetres, 60 by 60 centimetres or as per your need. We also give samples of various types of knots we use in our rugs, pile weight, materials, and colours that are available with us to you. We provide discounts to our regular customers and free samples over strike-off samplKeeping the needs of our customers in mind, we provide our services to satisfy their needs and requirements and aim to deliver high-quality standards with some added benefits that can help them place their own custom orders. On the other hand, we can weave them and dispatch them to them their doorsteps on the required date and time of the year. ",
    },
    {
        title: "COLOR POMS AND TUFFS",
        image: "assets/images/about/2.jpg",
        description:
            "We also provide a sample of colour dyes used in various materials such as wool, silk or other fabric to have your customized rug. We ship the pieces in 7 days to your station. We also produce large quantities of colour poms from which you can choose the right shade on the rugs. From the poms, make your colour kit, and the cost of the equipment is on the number of colours available. We make two colour kits upon your order. One is at your disposal, and the other is for our own records. We also make swatches of small pieces of rug about five by 5 centimetres or on the custom order sizes. You can also make your kit if you want. On the customized orders, we depend on the colour threads, wool, silk, leather, wool or Pantone Colour codes that we match with our stock to start the work. You can also tag the samples of colour codes with the names on each colour sample.Our readymade colour kit has an ARS 1200 Wool box with 1200 colours of wool, an ARS 600 with 600 colours ARS 700 Viscose box with 700 shades. You can contact us for the order and cost.",
    },
    {
        title: "REDERINGS AND CAD services",
        image: "assets/images/about/3.jpg",
        description:
            " We offer CAD services to our regular clients by providing graphic designs from a graphic designer who can work according to the specimen you desire for cushions, curtains, paintings, wall hangings or simply on your floor. We create a 3D view of rugs in the client's home using CAD. It can be stored on Computers and hard drives in .jpeg, .png, and .pdf formats. It can also be printed in HD. These designs are in your copyright, and we don't replicate them without your consent.",
    },
    {
        title: "SHIPMENT AND DELIVERY",
        image: "assets/images/about/4.jpg",
        description:
            "We want to ensure all customized orders are duly dispatched to our customer's area. We use courier service (door delivery), cargo(Airport drug only), FedEx, DHL, and UPS take 3-5 days for delivery. Shipment to the nearest airport takes 5-7 days. Cost and charges depend on the package volume, and we also send the invoice bill and packaging list along with the GSPO forum and certificate of originality. Your product is secured by the harmonized code we use for tracking and safe dispatch. It is classified according to an international standardized system with names, numbers, sizes and handling instructions.For European Countries, the delivery is under the security of the EU REX system, which is registered. Exporters for Countries like European Union, Norway, Switzerland, and Turkey use generalized tariff preference. The charge also includes customs/ duty taxes in your Country. The custom brokers and authorized companies for carriage can give you their details upon request.",
    },
   
];

const ServicePage: React.FC = () => {
    return (
        <motion.section
            className="bg-white py-16 px-6 md:px-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Services We Provide.
                </h2>
                <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Keeping the needs of our customers in mind, we provide our services to satisfy their needs and requirements and aim to deliver high-quality standards with some added benefits that can help them place their own custom orders. On the other hand, we can weave them and dispatch them to them their doorsteps on the required date and time of the year.
                    Some of our services focus on these areas:
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

export default ServicePage;
