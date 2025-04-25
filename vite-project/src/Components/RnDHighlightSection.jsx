import React from "react";
import { motion } from "framer-motion";
import img1 from "../Data/img/img1.jpg";
import img2 from "../Data/img/img2.jpg";
import img3 from "../Data/img/img3.jpg";

const tiltHoverEffect = {
  whileHover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const RnDHighlightSection = () => {
  return (
    <section className="text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center md:text-left">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Welcome to Alardius Healthcare
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl text-white">
            Pharma Franchise Company in Ambala
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            {...tiltHoverEffect}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white via-blue-300 to-teal-400 shadow-[0_0_25px_3px_rgba(255,255,255,0.2)]"
          >
            <div
              className="rounded-2xl overflow-hidden h-60"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full flex items-center justify-center bg-black/50 text-white text-center p-4">
                <h3 className="text-xl font-bold drop-shadow-lg">
                  Premium Pharma Manufacturing
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            {...tiltHoverEffect}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white via-blue-300 to-teal-400 shadow-[0_0_25px_3px_rgba(255,255,255,0.2)]"
          >
            <div
              className="rounded-2xl overflow-hidden h-60"
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full flex items-center justify-center bg-black/50 text-white text-center p-4">
                <h3 className="text-xl font-bold drop-shadow-md mb-2">
                  PCD Pharma Franchise
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Video */}
          <motion.div
            {...tiltHoverEffect}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white via-blue-300 to-teal-400 shadow-[0_0_25px_3px_rgba(255,255,255,0.2)]"
          >
            <div className="rounded-2xl overflow-hidden h-60 bg-black relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/bKfZf3EWv64?autoplay=1&mute=1&controls=0&loop=1&playlist=bKfZf3EWv64&modestbranding=1&rel=0&showinfo=0"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Card 4 - Gradient Highlight */}
          <motion.div
            {...tiltHoverEffect}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white via-blue-300 to-teal-400 shadow-[0_0_25px_3px_rgba(255,255,255,0.2)]"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white flex flex-col justify-between h-full">
              <div>
                <p className="text-sm uppercase mb-1 font-medium">
                  Who & GMP Certified
                </p>
                <h3 className="text-xl font-semibold">
                  Certified Manufacturing Units In Excise-Free Zones
                </h3>
              </div>
              <a
                href="/about"
                className="mt-4 text-sm text-white underline hover:text-teal-200 transition"
              >
                Learn more →
              </a>
            </div>
          </motion.div>

          {/* Card 5 - Certification */}
          <motion.div
            {...tiltHoverEffect}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white via-blue-300 to-teal-400 shadow-[0_0_25px_3px_rgba(255,255,255,0.2)]"
          >
            <div
              className="rounded-2xl overflow-hidden p-6 text-black h-full"
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-lg font-semibold mb-2">Trusted Since 2017</h3>
              <p className="text-sm">
                Based in Ambala, Haryana – Alardius Healthcare
                <br />
                Serving quality across India
              </p>
            </div>
          </motion.div>

          {/* Card 6 - CTA */}
          <motion.div
            {...tiltHoverEffect}
            className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white via-blue-300 to-teal-400 shadow-[0_0_25px_3px_rgba(255,255,255,0.2)]"
          >
            <div className="bg-[#1f2937] p-6 rounded-2xl h-full flex flex-col justify-center items-center text-white">
              <h3 className="text-lg font-semibold mb-2">Join Us</h3>
              <a
                href="/contact"
                className="bg-teal-400 hover:bg-teal-500 text-white text-sm py-2 px-4 rounded-lg transition mt-2"
              >
                Contact Us →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inject raw CSS animation safely */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .animate-spin-slow {
              animation: spin 8s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,
        }}
      />
    </section>
  );
};

export default RnDHighlightSection;
