import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import ChatbotWidget from "@/components/home/ChatbotWidget";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MajesticPersian from "./components/products/Customize/MajesticPersian";
import AankhiJhyal from "./components/products/Customize/AankhiJyal";
import Attraction from "./components/products/Customize/Attraction";
import Bamboos from "./components/products/Customize/Bamboos";
import BayLeaves from "./components/products/Customize/Bayleaves";
import Bubbles from "./components/products/Customize/Bubbles";
import BurningRope from "./components/products/Customize/BurningRope";
import Cells from "./components/products/Customize/Cells";
import Childhood from "./components/products/Customize/Childhood";
import FarmHouse from "./components/products/Customize/FarmHouse";
import Festival from "./components/products/Customize/Festival";
import FountainWater from "./components/products/Customize/FountainWater";
import Gurung from "./components/products/Customize/Gurung";
import Holi from "./components/products/Customize/Holi";
import Imagination from "./components/products/Customize/Imagination";
import JungleSafari from "./components/products/Customize/JungleSafari";
import JungleTribes from "./components/products/Customize/JungleTribes";
import LakheFace from "./components/products/Customize/LakheFace";
import Majesty from "./components/products/Customize/Majesty";
import ManasluCircuit from "./components/products/Customize/ManasluCircuit";
import Maze from "./components/products/Customize/Maze";
import Mirror from "./components/products/Customize/Mirror";
import ModernFern from "./components/products/Customize/ModernFern";
import MonkeyTemple from "./components/products/Customize/MonkeyTemple";
import MorningSun from "./components/products/Customize/MorningSun";
import NaghDaha from "./components/products/Customize/NaghDaha";
import NamcheBazar from "./components/products/Customize/NamcheBazar";
import OnBoard from "./components/products/Customize/OnBoard";
import OnTheRoad from "./components/products/Customize/OnTheRoad";
import Paint from "./components/products/Customize/Paint";
import Path from "./components/products/Customize/Path";
import RainForest from "./components/products/Customize/RainForest";
import Retro from "./components/products/Customize/Retro";
import SherpaLove from "./components/products/Customize/SherpaLove";
import Shreepanch from "./components/products/Customize/Shreepanch";
import Shyala from "./components/products/Customize/Shyala";
import Sweet16 from "./components/products/Customize/Sweet16";
import TeraiFarm from "./components/products/Customize/TeraiFarm";
import Thoughts from "./components/products/Customize/Thoughts";
import Tides from "./components/products/Customize/Tides";
import Trek from "./components/products/Customize/Trek";
import TsumValleyPatan from "./components/products/Customize/TsumValleyPatan";
import UndefinedUniverse from "./components/products/Customize/UndefinedUniverse";
import Vines from "./components/products/Customize/Vines";
import WaterBrust from "./components/products/Customize/WaterBrust";
import WaterCoin from "./components/products/Customize/WaterCoin";
import Weave from "./components/products/Customize/Weave";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />

        <Route path="/customize/majesticpersian" element={<MajesticPersian />} />
        <Route path="/customize/aankhijhyal" element={<AankhiJhyal/>} />
        <Route path="/customize/attraction" element={<Attraction/>} />
        <Route path="/customize/bamboos" element={<Bamboos/>} />
        <Route path="/customize/bayleaves" element={<BayLeaves/>} />
        <Route path="/customize/bubbles" element={<Bubbles/>} />
        <Route path="/customize/burningrope" element={<BurningRope/>} />
        <Route path="/customize/cells" element={<Cells/>} />
        <Route path="/customize/childhood" element={<Childhood/>} />
        <Route path="/customize/farmhouse" element={<FarmHouse/>} />
        <Route path="/customize/festival" element={<Festival/>} />
        <Route path="/customize/fountainwater" element={<FountainWater/>} />
        <Route path="/customize/gurung" element={<Gurung/>} />
        <Route path="/customize/holi" element={<Holi/>} />
        <Route path="/customize/imagination" element={<Imagination/>} />
        <Route path="/customize/junglesafari" element={<JungleSafari/>} />
        <Route path="/customize/jungletribes" element={<JungleTribes/>} />
        <Route path="/customize/lakheface" element={<LakheFace/>} />
        <Route path="/customize/majesty" element={<Majesty/>} />
        <Route path="/customize/manaslucircuit" element={<ManasluCircuit/>} />
        <Route path="/customize/maze" element={<Maze/>} />
        <Route path="/customize/mirror" element={<Mirror/>} />
        <Route path="/customize/modernfern" element={<ModernFern/>} />
        <Route path="/customize/monkeytemple" element={<MonkeyTemple/>} />
        <Route path="/customize/morningsun" element={<MorningSun/>} />
        <Route path="/customize/naghdaha" element={<NaghDaha/>} />
        <Route path="/customize/namchebazar" element={<NamcheBazar/>} />
        <Route path="/customize/onboard" element={<OnBoard/>} />
        <Route path="/customize/ontheroad" element={<OnTheRoad/>} />
        <Route path="/customize/paint" element={<Paint/>} />
        <Route path="/customize/path" element={<Path/>} />
        <Route path="/customize/rainforest" element={<RainForest/>} />
        <Route path="/customize/retro" element={<Retro/>} />
        <Route path="/customize/sherpalove" element={<SherpaLove/>} />
        <Route path="/customize/shreepanch" element={<Shreepanch/>} />
        <Route path="/customize/shyala" element={<Shyala/>} />
        <Route path="/customize/sweet16" element={<Sweet16/>} />
        <Route path="/customize/teraifarm" element={<TeraiFarm/>} />
        <Route path="/customize/thoughts" element={<Thoughts/>} />
        <Route path="/customize/tides" element={<Tides/>} />
        <Route path="/customize/trek" element={<Trek/>} />
        <Route path="/customize/tsumvalleypatan" element={<TsumValleyPatan/>} />
        <Route path="/customize/undefineduniverse" element={<UndefinedUniverse/>} />
        <Route path="/customize/vines" element={<Vines/>} />
        <Route path="/customize/waterbrust" element={<WaterBrust/>} />
        <Route path="/customize/watercoin" element={<WaterCoin/>} />
        <Route path="/customize/weave" element={<Weave/>} />
 
        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ChatbotWidget />
    </Router>
  );
}
