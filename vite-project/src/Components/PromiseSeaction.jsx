import React from 'react';
import { motion } from 'framer-motion';
import { LucideCheckCircle, LucideWallet, LucideShare2 } from 'lucide-react';

const cardVariants = {
  whileHover: {
    scale: 1.08,
    rotateX: -5,
    rotateY: 5,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  initial: {
    rotateX: 0,
    rotateY: 0,
  },
};

const PromiseSection = () => {
  return (
    <section className="text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Welcome to Alardius Healthcare
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            Pharma Franchise Company in Ambala
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="rounded-2xl p-6 shadow-xl bg-[#1f2937] flex flex-col items-center text-center"
            variants={cardVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <LucideCheckCircle className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-400 text-sm">
              Our non-compromising approach ensures high-quality standards in all our products manufactured in WHO & GMP certified units.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="rounded-2xl p-6 shadow-xl bg-[#1f2937] flex flex-col items-center text-center"
            variants={cardVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <LucideWallet className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Affordability</h3>
            <p className="text-gray-400 text-sm">
              We offer affordable and innovative drugs for all, with competitive pricing for franchises and third-party manufacturing.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="rounded-2xl p-6 shadow-xl bg-[#1f2937] flex flex-col items-center text-center"
            variants={cardVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <LucideShare2 className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p className="text-gray-400 text-sm">
              Serving across India with a strong distribution setup, bringing hope to life through accessible healthcare solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
