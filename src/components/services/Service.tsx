import React from "react";

interface ServiceStep {
  id: string;
  title: string;
  imageLabel: string;
  description: string;
}

const steps: ServiceStep[] = [
  {
    id: "1",
    title: "Precision Batch Dyeing",
    imageLabel: "The Dye Master at Work",
    description:
      "The **Dye Master** is responsible for mixing and matching the colors, with each dye blend taking a full day to prepare. This commitment ensures flawless color fidelity and consistency across every batch of yarn.",
  },
  {
    id: "2",
    title: "Natural Sun Drying & Curing",
    imageLabel: "Yarns Drying on Rooftop",
    description:
      "After dyeing, the yarns are spread out on the **rooftops of Kathmandu**, where they dry naturally in the sunlight. This traditional method cures the dyes, locking in the color and enhancing the wool's inherent luster.",
  },
  {
    id: "3",
    title: "Design Blueprint & Pattern Graph",
    imageLabel: "Weaver Following Pattern Graph",
    description:
      "A design **blueprint is placed behind the loom** to guide the weavers, showing the exact placement and color of each knot. This document translates the custom design into a tangible, knot-by-knot instruction set.",
  },
  {
    id: "4",
    title: "Hand-Knotting Technique",
    imageLabel: "Artisans Hand-Knotting the Rug",
    description:
      "Using the **traditional Tibetan knotting method**, skilled artisans carefully knot yarn around the warp threads. A **higher knot density** means a finer, more intricate rug.",
  },
  {
    id: "5",
    title: "Deep Cleansing & Water Pressing",
    imageLabel: "Washing Rug with Paddles",
    description:
      "The rugs are **thoroughly washed on both sides**. **Wooden paddles** press water through the pile, removing any residual dirt and increasing the softness and shine of the fibers.",
  },
  {
    id: "6",
    title: "Final Shear, Flattening & Edging",
    imageLabel: "Final Trimming and Finishing",
    description:
      "Once dried, the rug is flattened, and the pile is **hand-cut to the perfect height**. The final touches include **defining color transitions** and **smoothing height differences** before **wrapping edges with matching yarn**.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfb] py-32 flex justify-center">
      <div className="w-4/5">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                {step.title}
              </h2>

              <div className="bg-[#fdfcf8] border border-gray-200 rounded-lg flex items-center justify-center h-48 mb-6">
                <p className="text-gray-700 font-medium text-center">
                  Image: {step.imageLabel}
                </p>
              </div>

              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: step.description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
