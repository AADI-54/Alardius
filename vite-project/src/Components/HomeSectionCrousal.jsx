import React, { useEffect, useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { HomeSectionCard } from './HomeSectionCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { medicinesData } from '../Data/tablets.js';

export const HomeSectionCrousal = ({ direction = 'right', data = [] }) => {
  const carouselRef = useRef(null);
  const [randomItems, setRandomItems] = useState([]);

  const formatCategoryTitle = (categories) =>
    categories
      .map((cat) =>
        cat
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      )
      .join(' & ');

  const getRandomItems = (dataset, numItems = 10) => {
    const shuffled = [...dataset].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  useEffect(() => {
    const filteredItems = medicinesData.filter((medicine) =>
      data.some((category) => medicine.categories.includes(category))
    );
    setRandomItems(getRandomItems(filteredItems));
  }, [data]);

  const responsive = {
    0: { items: 1.2 },
    480: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1280: { items: 5 },
  };

  const items = randomItems.map((medicine) => (
    <div
      key={medicine.id}
      className="mx-2 rounded-xl p-2 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/5 backdrop-blur-md border border-white/10 flex justify-center"
    >
      <HomeSectionCard medicine={medicine} />
    </div>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 'right') {
        carouselRef.current?.slideNext();
      } else {
        carouselRef.current?.slidePrev();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-full py-8 px-4 sm:px-8">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
        {formatCategoryTitle(data)}
      </h2>

      {/* Carousel */}
      <AliceCarousel
        ref={carouselRef}
        items={items}
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        mouseTracking
      />

      {/* Left Arrow */}
      <button
        onClick={() => carouselRef.current?.slidePrev()}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/30 z-10"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => carouselRef.current?.slideNext()}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/30 z-10"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
};
