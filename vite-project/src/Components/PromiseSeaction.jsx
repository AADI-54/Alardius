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
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            Our Promise to You
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <LucideCheckCircle className="text-blue-500 mb-4" size={40} />,
              title: 'Quality',
              desc: 'Our non-compromising approach ensures high-quality standards in all our products manufactured in WHO & GMP certified units.',
            },
            {
              icon: <LucideWallet className="text-blue-500 mb-4" size={40} />,
              title: 'Affordability',
              desc: 'We offer affordable and innovative drugs for all, with competitive pricing for franchises and third-party manufacturing.',
            },
            {
              icon: <LucideShare2 className="text-blue-500 mb-4" size={40} />,
              title: 'Accessibility',
              desc: 'Serving across India with a strong distribution setup, bringing hope to life through accessible healthcare solutions.',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              initial="initial"
              whileHover="whileHover"
            >
              {/* Glowing Animated Border */}
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-white to-purple-500 
                bg-[length:400%_400%] animate-[glow_6s_linear_infinite] shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] overflow-hidden">
                
                {/* Card Content */}
                <div className="bg-[#1f2937] rounded-2xl p-6 shadow-xl flex flex-col items-center text-center group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.15)] transition-shadow duration-500">
                  {card.icon}
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Keyframes for animation (inject via Tailwind's arbitrary syntax) */}
      <style>
        {`
          @keyframes glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default PromiseSection;
