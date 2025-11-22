// src/components/Footer.tsx
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import { FaThreads } from "react-icons/fa6";



export default function Footer(): JSX.Element {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  /** KEEP YOUR FULL LEGAL TEXT CONTENT EXACTLY */
  const legalText = `At Modern Nature Design Nepal, your trust, privacy, and creativity are our top priorities. Here’s everything you need to know when interacting with our website and services:
  
  1. Privacy & Your Information
   •Your Info Stays Safe: Any details you share-through orders or inquiries-are completely confidential. We never sell or share your information for marketing. 
   •Secure & Protected: Our website is SSL encrypted, and all forms have spam protection to keep your data secure. 
   •Delivery Made Easy: To deliver your rugs, we may share your address and phone with trusted couriers-but only as needed to ensure smooth delivery. 
   •Your Designs, Your Rights: Your rug ideas and concepts are completely private. We only use them to craft your custom rugs, and photos are shared solely to update you on the production process. 
   
   2. Ethical & Cruelty-Free Commitment All our rugs are made from wool, silk, and natural fibers sourced responsibly: 
   •Sheep are sheared safely in spring without harm, supporting their health and well-being. 
   •No animals are harmed, killed, or subjected to cruelty in any part of our rug-making process. 
   •We uphold a strict ethical standard in every stage of production. 
   
   3. Copyright & Intellectual Property 
   •Our Content: All text, images, rug designs, and digital assets on our website are owned by Modern Nature Design Nepal and protected under copyright law. Unauthorized use is prohibited. 
   •Customer Designs: Your shared rug ideas or concepts remain your intellectual property. We never use them beyond creating your custom rugs. 
   •Website Use: You may view and share content for personal use only. Any reproduction or commercial use requires written permission. 
   •Photographs & Updates: Photos of your rugs are for informational purposes only and cannot be reused without consent. 
   •Trademarks: The name Modern Nature Design Nepal, our logo, and branding are trademarked and may not be used without permission. 
   
   At Modern Nature Design Nepal, we combine art, ethics, and care-for you, your rugs, and the animals. By using our website, you agree to respect our policies, your privacy, and the creative integrity of our designs.`;


  /** FOOTER animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const elements = ["brand", "links", "social", "bottom"];
          elements.forEach((el, idx) => {
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, el]));
            }, idx * 150);
          });
        }
      },
      { threshold: 0.1, rootMargin: "50px 0px -50px 0px" }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  /** UPDATED Footer link actions */
  const footerLinks = {
    links: {
      title: "Quick Links",
      links: [
        { name: "Collections", action: () => navigate("/collections") },
        { name: "About", action: () => navigate("/about") },
        { name: "Services", action: () => navigate("/services") },
        { name: "Contact", action: () => navigate("/contact") },
        { name: "Color Customizer", action: () => navigate("/products") },
      ],
    },

    about: {
      title: "About",
      links: [
        {
          name: "Our Story",
          action: () => navigate("/about", { state: { scrollTo: "ourstory-section" } }),
        },
        {
          name: "Craftmanship",
          action: () => navigate("/", { state: { scrollTo: "craftmanship-section" } }),
        },
        { name: "Terms & Policy", action: () => setShowModal(true) },
      ],
    },

    support: {
      title: "Contact",
      links: [
        { name: "+977-9801037585", icon: <Phone className="w-4 h-4 mr-2" />, action: () => { } },
        { name: "Thaiba-14, Lalitpur, Nepal", icon: <MapPin className="w-4 h-4 mr-2" />, action: () => { } },
        { name: "info@modernnaturedesignnepal.com", icon: <Mail className="w-4 h-4 mr-2" />, action: () => { } },
      ],
    },

  };

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/mndnepal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/profile.php?id=61558296209990" },
    { icon: <FaThreads className="w-4 h-4" />, href: "https://www.threads.com/@mndnepal" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-charcoal text-off-white relative overflow-hidden"
      style={{
        background: isVisible
          ? "linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 50%, #2c2c2c 100%)"
          : "#2c2c2c",
        transition: "background 1.2s ease-out",
      }}
    >
      <Container>
        <div className="py-8 lg:pt-8 lg:pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
            {/* BRAND */}
            <div
              className={`lg:col-span-2 transform transition-all duration-800 ease-out ${animatedElements.has("brand")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                }`}
            >
              <h2 className="font-serif text-xl mb-3">
                Modern Nature Design Nepal
              </h2>
              <p className="text-off-white/70 text-sm mb-4">
                Hand-Knotted in Nepal, each rug is a masterpiece of heritage and
                precision, seamlessly blending traditional weaving artistry with
                contemporary design. Crafted for discerning interiors around the
                world, Our rugs embody timeless elegance, exceptional quality and
                ethical craftmanship - a statement of sophistication for
                generations to come.
              </p>
            </div>

            {/* FOOTER NAV LINKS */}
            {Object.entries(footerLinks).map(([_, group], idx) => (
              <div
                key={idx}
                className={`transform transition-all duration-800 ${animatedElements.has("links")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                  }`}
              >
                <h3 className="font-medium mb-3 text-sm">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((l, index) => (
                    <li key={index} className="flex items-center">
                      {l.icon && <span className="">{l.icon}</span>}
                      <button
                        onClick={l.action}
                        className="text-off-white/70 hover:text-mint-green text-sm"
                      >
                        {l.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              className={`transform transition-all duration-800 ${animatedElements.has("social")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                }`}
            >
              <h3 className="font-medium mb-3 text-sm ml-28">Follow Us</h3>
              <div className="flex space-x-6 ml-24">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="w-4 h-8 flex items-center justify-center hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-off-white/20 py-4 text-center text-sm text-off-white/50">
          © {new Date().getFullYear()} Modern Nature Design Nepal. All rights
          reserved.
        </div>
      </Container>

      {/* TERMS & POLICY MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white text-black p-6 rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              Legal & Terms - Modern Nature Design Nepal
            </h2>

            <div style={{ whiteSpace: "pre-line" }} className="text-sm leading-relaxed">
              {legalText}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
