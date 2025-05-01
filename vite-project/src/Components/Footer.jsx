import React from 'react';
import { Mail } from 'lucide-react';  // Keeping Mail from lucide-react
import { FaWhatsapp } from 'react-icons/fa';  // Import WhatsApp icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-500 pb-2">About Alardius Healthcare</h3>
            <p className="text-gray-300">
              Incepted in 2017 at Jagadhari (Haryana, India), we are the leading manufacturer of premium quality 
              Pharmaceutical Syrups, Pharmaceutical Tablets, and more.
            </p>
            <p className="text-gray-300">
              We offer Distributorship and Third Party Manufacturing to our esteemed clients.
            </p>
            <p className="text-gray-300">
              Under the headship of <strong className="text-white">Mr. Mukesh Kumar</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-blue-400 transition">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition">About-us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Corporate Office:</strong></p>
              <p>SHOP NO.- 16, NEW GRAIN MARKET, JAGADHRI YAMUNA NAGAR-135001</p>
              <p>Tel: <strong className="text-white">9996625922</strong></p>
              <p>Email: <a href="mailto:alardiushealthcare@gmail.com" className="text-blue-400">alardiushealthcare@gmail.com</a></p>
              <p>Web: <a href="http://www.alardiushealthcare.com" className="text-blue-400">www.alardiushealthcare.com</a></p>
            </div>
            <div className="space-y-2 text-gray-300">
              <p><strong>Manufacturing Unit:</strong></p>
              <p> <strong> Unit-1</strong> Rampur Jattan, Trilokpur Road, Kala-Amb</p>
              <p>  <strong> Unit-2</strong>  Sec-38, HSIIDC,Industrial Area, Sonipat</p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Our Mission</h3>
            <p className="text-gray-300">
              "Bringing hope to life through research and serve for healthy life". We are committed to delivering products 
              that help people enjoy longer healthier and more productive lives.
            </p>
            <p className="text-gray-300">
              Our products are manufactured at WHO and GMP certified units with well-equipped laboratories.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Alardius Healthcare. All Rights Reserved
            </div>
          </div>

          {/* Social and Contact Icons */}
          <div className="flex justify-center gap-8 mt-4">
            <a href="mailto:alardiushealthcare@gmail.com" className="text-gray-400 hover:text-white text-3xl">
              <Mail />
            </a>
            <a href="https://wa.me/919996625922" className="text-gray-400 hover:text-white text-3xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
