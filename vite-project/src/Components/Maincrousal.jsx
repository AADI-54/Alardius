import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from './assetsCrousal/img1.png';
import img2 from './assetsCrousal/img2.png';
import img3 from './assetsCrousal/img3.png';
import img4 from './assetsCrousal/img4.png';
import img5 from './assetsCrousal/img5.png';

import mobileimg1 from './assetsCrousal/mobileimg1.png';
import mobileimg2 from './assetsCrousal/mobileimg2.png';
import mobileimg3 from './assetsCrousal/mobileimg3.png';
import mobileimg4 from './assetsCrousal/mobileimg4.png';
import mobileimg5 from './assetsCrousal/mobileimg5.png';

const homeCarouselData = [
  { desktopImage: img1, mobileImage: mobileimg1, path: '/' },
  { desktopImage: img2, mobileImage: mobileimg2, path: '/' },
  { desktopImage: img3, mobileImage: mobileimg3, path: '/' },
  { desktopImage: img4, mobileImage: mobileimg4, path: '/' },
  { desktopImage: img5, mobileImage: mobileimg5, path: '/' },
];

const responsive = {
  0: { items: 1 },
  600: { items: 1 },
  1024: { items: 1 },
};

export const Maincrousal = () => {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = homeCarouselData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
      viewport={{ once: true }}
      className="min-w-full w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden rounded-xl"
      onClick={() => (window.location.href = item.path)}
    >
      <img
        className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        src={isTabletOrMobile ? item.mobileImage : item.desktopImage}
        alt={`carousel-img-${index}`}
      />
    </motion.div>
  ));

  return (
    <div className="w-full mx-auto px-4 pt-6 relative z-[-1]">
      <motion.div
        className="mx-auto transition-all duration-700 overflow-hidden"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0.9 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        style={{ originX: 0.5 }}
      >
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AliceCarousel
            items={items}
            responsive={responsive}
            stagePadding={{ paddingLeft: 0, paddingRight: 0 }}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableDotsControls
            disableButtonsControls
          />
        </motion.div>
      </motion.div>

      {/* Branding Text Below Carousel */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider">
          Alardius Healthcare
        </h2>
        <p className="mt-2 text-gray-300 text-sm md:text-base tracking-wide max-w-2xl mx-auto">
          Empowering Health, Elevating Life. Alardius is a trusted partner in third-party pharmaceutical manufacturing,
          offering high-quality, affordable solutions tailored to your brand’s needs. From concept to creation,
          we deliver excellence, compliance, and innovation at every step.
        </p>
      </motion.div>
    </div>
  );
};
