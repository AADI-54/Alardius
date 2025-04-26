import React from "react";
import { motion } from "framer-motion";

import img1 from "../Data/img/mission.jpg";
import img2 from "../Data/img/story.jpg";

const AboutUs = () => {
  return (
    <div className="px-6 py-10 w-full bg-gray-950">
      {/* Our Mission */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Our Mission</h2>
          <p className="text-lg text-gray-300">
            At Alardius Healthcare, our mission is to bring hope to life through
            innovative and <strong>affordable</strong> healthcare solutions. Established in 2017
            in Jagadhari, we are committed to delivering <strong>high-quality
            pharmaceutical products</strong> that promote healthier and more productive
            lives. With WHO and GMP-certified manufacturing, we ensure
            excellence in every product. Through our PCD Pharma Franchise and
            <strong> Third Party Manufacturing services</strong>, we aim to expand access to
            trusted medicines across India.
          </p>
        </div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={img1}
            alt="Our Mission"
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={img2}
            alt="Our Story"
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </motion.div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Our Story</h2>
          <p className="text-lg text-gray-300">
            Founded in <strong> 2017 </strong> in Jagadhari, Haryana, <strong>Alardius Healthcare</strong> began with a
            clear vision—to make quality healthcare accessible and affordable
            for all. Backed by years of industry expertise and a commitment to
            excellence, we quickly grew into a trusted name in the
            pharmaceutical sector. Our journey started with a focused range of
            syrups, tablets, and others, and expanded into a
            full-fledged pharmaceutical company offering PCD Pharma Franchise
            and Third Party Manufacturing services. Led by <strong>Mr. Mukesh Kumar</strong> , our
            dedicated team continues to innovate and evolve to meet the growing
            healthcare needs of patients across India. With certified
            manufacturing units, reliable distribution, and a passion for
            service, we are proud to be among the pharma companies in the
            region.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-900 text-white py-16 rounded-2xl shadow-md mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center px-6">
          <div className="space-y-4">
            <div className="text-5xl">🇮🇳</div>
            <h3 className="text-2xl font-semibold">All Over India</h3>
            <p className="text-gray-300">
              Serving clients across every major city and region in India.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">✅</div>
            <h3 className="text-2xl font-semibold">Top Quality</h3>
            <p className="text-gray-300">
              We deliver premium solutions that meet the highest standards.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🤝</div>
            <h3 className="text-2xl font-semibold">Trusted Partnerships</h3>
            <p className="text-gray-300">
              Long-lasting client relationships built on trust and results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-10 mb-20">
        <h2 className="text-4xl font-bold text-center text-white">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-gray-800 rounded-2xl shadow-md p-6 text-center"
            >
              <img
                src={`/team-member-${id}.jpg`}
                alt={`Team member ${id}`}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">
                Team Member {id}
              </h3>
              <p className="text-gray-400">Role/Title</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
        <p className="text-lg text-gray-300 mb-6">
          Become part of a community that believes in growing better, together.
        </p>
        <a href="/contact">
          <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition">
            Contact Us
          </button>
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
