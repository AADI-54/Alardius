import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import RnDHighlightSection from './RnDHighlightSection';
import PromiseSection from './PromiseSeaction';
import ESGHeroCard from './EsgCard';

export const Herosection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // allows re-triggering on scroll
      delay: 100,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="space-y-16">
      <div data-aos="fade-up">
        <RnDHighlightSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <PromiseSection />
      </div>

      <div data-aos="zoom-in" data-aos-delay="300">
        <ESGHeroCard />
      </div>
    </div>
  );
};
