import React from 'react';
import { motion } from 'framer-motion';

const tiltHoverEffect = {
  whileHover: {
    scale: 1.03,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const RnDHighlightSection = () => {
  return (
    <section className="text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center md:text-left">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-wide mb-2">
            Welcome to Alardius Healthcare
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl">
            Pharma Franchise Company in Ambala
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Image */}
          <motion.div
            className="bg-[#1f2937] rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            {...tiltHoverEffect}
          >
            <img
              src="/path-to-image1.jpg"
              alt="Manufacturing Excellence"
              className="rounded-lg object-cover w-full h-40 mb-4"
            />
            <h3 className="text-lg font-semibold">Premium Pharma Manufacturing</h3>
          </motion.div>

          {/* Card 2 - Image */}
          <motion.div
            className="bg-[#1f2937] rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            {...tiltHoverEffect}
          >
            <img
              src="/path-to-image2.jpg"
              alt="Franchise Opportunity"
              className="rounded-lg object-cover w-full h-40 mb-4"
            />
            <h3 className="text-lg font-semibold">PCD Pharma Franchise</h3>
          </motion.div>

          {/* Card 3 - Video */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-black"
            {...tiltHoverEffect}
          >
            <video controls className="w-full h-52 object-cover rounded-xl">
              <source src="/path-to-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Card 4 - Gradient Highlight */}
          <motion.div
            className="bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between"
            {...tiltHoverEffect}
          >
            <div>
              <p className="text-sm uppercase mb-1 font-medium">Who & GMP Certified</p>
              <h3 className="text-xl font-semibold">
                Certified Manufacturing Units In Excise-Free Zones
              </h3>
            </div>
            <a href="#" className="mt-4 text-sm text-blue-200 underline hover:text-white transition">Learn more →</a>
          </motion.div>

          {/* Card 5 - Certification */}
          <motion.div
            className="bg-[#1f2937] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            {...tiltHoverEffect}
          >
            <h3 className="text-lg font-semibold mb-2">Trusted Since 2017</h3>
            <p className="text-gray-400 text-sm">
              Based in Ambala, Haryana – Alardius Healthcare<br />Serving quality across India
            </p>
          </motion.div>

          {/* Card 6 - CTA */}
          <motion.div
            className="bg-[#1f2937] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center items-center"
            {...tiltHoverEffect}
          >
            <h3 className="text-lg font-semibold mb-2">Join Our Franchise Network</h3>
            <a
              href="https://alardiushealthcare.com"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition mt-2"
            >
              Contact Us →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RnDHighlightSection;
