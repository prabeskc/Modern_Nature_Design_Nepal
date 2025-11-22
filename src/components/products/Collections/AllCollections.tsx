import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface Carpet {
  id: string;
  name: string;
  imageUrl: string;
}

const carpets: Carpet[] = [
  { id: 'rug-001', name: 'Aankhi Jhyal', imageUrl: '/assets/images/products/AankhiJhyal.jpg' },
  { id: 'rug-002', name: 'Attraction', imageUrl: '/assets/images/products/Attraction.jpg' },
  { id: 'rug-003', name: 'Baasn', imageUrl: '/assets/images/products/baasn.jpg' },
  { id: 'rug-004', name: 'Bayleaves', imageUrl: '/assets/images/products/BayLeaves.jpg' },
  { id: 'rug-005', name: 'Bubbles', imageUrl: '/assets/images/products/Bubbles.jpg' },
  { id: 'rug-006', name: 'Burning Rope', imageUrl: '/assets/images/products/BurningRope.jpg' },
  { id: 'rug-007', name: 'Cells', imageUrl: '/assets/images/products/Cells.jpg' },
  { id: 'rug-008', name: 'Childhood', imageUrl: '/assets/images/products/Childhood.jpg' },
  { id: 'rug-010', name: 'Festival', imageUrl: '/assets/images/products/Festival.jpg' },
  { id: 'rug-011', name: 'Fountain Water', imageUrl: '/assets/images/products/FountainWater.jpg' },
  { id: 'rug-012', name: 'Gurung', imageUrl: '/assets/images/products/Gurung.jpg' },
  { id: 'rug-013', name: 'Holi', imageUrl: '/assets/images/products/Holi.jpg' },
  { id: 'rug-014', name: 'Imagination', imageUrl: '/assets/images/products/Imagination.jpg' },
  { id: 'rug-016', name: 'Jungle Tribes', imageUrl: '/assets/images/products/JungleTribes.jpg' },
  { id: 'rug-017', name: 'Lakhe Face', imageUrl: '/assets/images/products/LakheFace.jpg' },
  { id: 'rug-018', name: 'Majesty', imageUrl: '/assets/images/products/Majesty.jpg' },
  { id: 'rug-019', name: 'Manaslu Circuit', imageUrl: '/assets/images/products/ManasluCircut.jpg' },
  { id: 'rug-020', name: 'Maze', imageUrl: '/assets/images/products/Maze.jpg' },
  { id: 'rug-021', name: 'Mirror', imageUrl: '/assets/images/products/Mirror.jpg' },
  { id: 'rug-023', name: 'Monkey Temple', imageUrl: '/assets/images/products/MonkeyTemple.jpg' },
  { id: 'rug-024', name: 'Morning Sun', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737260/Morning_Sun_8_x_10_1_Photorealistic_mxbmte.jpg' },
  { id: 'rug-025', name: 'Nagh Daha', imageUrl: '/assets/images/products/NaghDaha.jpg' },
  { id: 'rug-026', name: 'Namche Bazar', imageUrl: '/assets/images/products/NamcheBazar.jpg' },
  { id: 'rug-027', name: 'On Board', imageUrl: '/assets/images/products/OnBoard.jpg' },
  { id: 'rug-028', name: 'On The Road', imageUrl: '/assets/images/products/OnTheRoad.jpg' },
  { id: 'rug-029', name: 'Begnas Lake', imageUrl: '/assets/images/products/BegnasLake.png' },
  { id: 'rug-030', name: 'Path', imageUrl: '/assets/images/products/Path.jpg' },
  { id: 'rug-031', name: 'Rain Forest', imageUrl: '/assets/images/products/RainForest.jpg' },
  { id: 'rug-032', name: 'Retro', imageUrl: '/assets/images/products/Retro.jpg' },
  { id: 'rug-033', name: 'Sherpa Love', imageUrl: '/assets/images/products/SherpaLove.jpg' },
  { id: 'rug-034', name: 'Shreepanch', imageUrl: '/assets/images/products/Shreepanch.jpg' },
  { id: 'rug-035', name: 'Shyala', imageUrl: '/assets/images/products/Shyala.jpg' },
  { id: 'rug-036', name: 'Sweet16', imageUrl: '/assets/images/products/Sweet16.jpg' },
  { id: 'rug-037', name: 'Terai Farm', imageUrl: '/assets/images/products/TeraiFarm.jpg' },
  { id: 'rug-038', name: 'Thoughts', imageUrl: '/assets/images/products/Thoughts.jpg' },
  { id: 'rug-039', name: 'Tides', imageUrl: '/assets/images/products/Tides.jpg' },
  { id: 'rug-040', name: 'Trek', imageUrl: '/assets/images/products/Trek.jpg' },
  { id: 'rug-041', name: 'Tsum Valley Patan', imageUrl: '/assets/images/products/TsumValleyPatan.jpg' },
  { id: 'rug-042', name: 'Undefined Universe', imageUrl: '/assets/images/products/UndefinedUniverse.jpg' },
  { id: 'rug-043', name: 'Vines', imageUrl: '/assets/images/products/Vines.jpg' },
  { id: 'rug-044', name: 'Water Brust', imageUrl: '/assets/images/products/WaterBrust.jpg' },
  { id: 'rug-045', name: 'Water Coin', imageUrl: '/assets/images/products/WaterCoin.jpg' },
  { id: 'rug-046', name: 'Weave', imageUrl: '/assets/images/products/Weave.jpg' },
  { id: 'rug-047', name: 'Pari', imageUrl: '/assets/images/products/Pari.jpg' },
  { id: 'rug-048', name: 'Chakati', imageUrl: '/assets/images/products/Chakati.jpg' },
  { id: 'rug-049', name: 'Chino', imageUrl: '/assets/images/products/Chino.jpg' },
  { id: 'rug-050', name: 'Kaath', imageUrl: '/assets/images/products/Kaath.jpg' },
  { id: 'rug-051', name: 'Landmark', imageUrl: '/assets/images/products/Landmark.jpg' },
  { id: 'rug-052', name: 'Paisa', imageUrl: '/assets/images/products/Paisa.jpg' },
  { id: 'rug-053', name: 'Ping', imageUrl: '/assets/images/products/Ping.jpg' },
  { id: 'rug-054', name: 'Purano Jhyal', imageUrl: '/assets/images/products/PuranoJhyal.jpg' },
  { id: 'rug-055', name: 'Smoke', imageUrl: '/assets/images/products/Smoke.jpg' },
  { id: 'rug-056', name: 'Mandro', imageUrl: '/assets/images/products/Mandro.jpg' },
  { id: 'rug-057', name: 'Tihar', imageUrl: '/assets/images/products/Tihar.jpg' },
  { id: 'rug-058', name: 'The Wall', imageUrl: '/assets/images/products/TheWall.jpg' },
  { id: 'rug-059', name: 'Ring', imageUrl: '/assets/images/products/Ring.jpg' },
  { id: 'rug-060', name: 'Lalitpur', imageUrl: '/assets/images/products/Lalitpur.jpg' },
  { id: 'rug-061', name: 'Broken Mirror', imageUrl: '/assets/images/products/BrokenMirror.jpg' },
  { id: 'rug-062', name: 'Illusion', imageUrl: '/assets/images/products/Illusion.jpg' },
  { id: 'rug-063', name: 'Beehive', imageUrl: '/assets/images/products/Beehive.jpg' },
  { id: 'rug-064', name: 'Kunda', imageUrl: '/assets/images/products/Kunda.jpg' },
  { id: 'rug-065', name: 'Budi Aunla', imageUrl: '/assets/images/products/BudiAunla.jpg' },
  { id: 'rug-066', name: 'Sukool', imageUrl: '/assets/images/products/Sukool.jpg' },
  { id: 'rug-067', name: 'Water Lilies', imageUrl: '/assets/images/products/WaterLilies.jpg' },
  { id: 'rug-068', name: 'Birendra Taal', imageUrl: '/assets/images/products/BirendraTaal.jpg' },
  { id: 'rug-069', name: 'Echo', imageUrl: '/assets/images/products/Echo.jpg' },
  { id: 'rug-070', name: 'Kapaal', imageUrl: '/assets/images/products/Kapaal.jpg' },
  { id: 'rug-071', name: 'Phulchoki', imageUrl: '/assets/images/products/Phulchoki.jpg' },
  { id: 'rug-072', name: 'Thaali', imageUrl: '/assets/images/products/Thaali.jpg' },
];


const AllCollections: React.FC = () => {
  const [activeCarpet, setActiveCarpet] = useState<Carpet | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const totalPages = Math.ceil(carpets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCarpets = carpets.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#fdfdfb] py-20">
        {/* Container with 80% width centered */}
        <div className="w-4/5 mx-auto">

          <div className="flex justify-between items-center mt-10 mb-10 px-4">
            {/* Heading - Left */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
              All Collections
            </h1>

            {/* Search Input - Right */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search products"
                className="border border-gray-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-sm"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                Search
              </button>
            </div>
          </div>



          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCarpets.map((carpet) => (
              <motion.div
                key={carpet.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col"
                onClick={() => setActiveCarpet(carpet)}
              >
                {/* UPDATED — Image now fills entire card width */}
                <div className="flex justify-center items-center bg-gray-200 h-[400px]">
                  <img
                    src={carpet.imageUrl}
                    alt={carpet.name}
                    className="w-full h-full"
                  />
                </div>

                {/* Carpet name container */}
                <div className="p-1 text-center bg-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {carpet.name}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-2">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg transition ${currentPage === index + 1
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Modal (UNCHANGED) */}
        <AnimatePresence>
          {activeCarpet && (
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key={activeCarpet.id}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
              >
                {/* Close Button */}
                <div className="absolute top-0 right-0 m-2 bg-white rounded-full z-10">
                  <button
                    onClick={() => setActiveCarpet(null)}
                    className="p-1 text-gray-600 hover:text-gray-900 transition"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Image and zoom controls */}
                <TransformWrapper>
                  {({ zoomIn, zoomOut }) => (
                    <>
                      <TransformComponent>
                        <img
                          src={activeCarpet.imageUrl}
                          alt={activeCarpet.name}
                          className="object-contain max-h-[80vh] max-w-[90vw]"
                        />
                      </TransformComponent>
                      {/* Carpet name with zoom controls */}
                      <div className="flex items-center justify-between py-4 bg-gray-200 px-4">
                        <button
                          onClick={() => zoomOut()}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full transition"
                        >
                          <Minus size={20} />
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-800">
                          {activeCarpet.name}
                        </h2>
                        <button
                          onClick={() => zoomIn()}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full transition"
                        >
                          <Plus size={20} />
                        </button>
                      </div>
                    </>
                  )}
                </TransformWrapper>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>

  );
};

export default AllCollections;

