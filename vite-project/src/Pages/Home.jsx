import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Maincrousal } from '../Components/Maincrousal';
import { Herosection } from '../Components/Herosection';

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // ⚠️ Set this to false to allow animation every scroll
      delay: 100,
    });

    // ✅ Trigger refresh to recalculate positions
    AOS.refresh();
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
        <Maincrousal />
      </div>

      <div data-aos="fade-up">
        <Herosection />
      </div>
    </div>
  );
};
