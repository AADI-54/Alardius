import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = { name, email, query };

    try {
      const response = await fetch("http://localhost:5000/submit-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setResponseMessage("Thank you! Your query has been submitted.");
        setName("");
        setEmail("");
        setQuery("");
      } else {
        setResponseMessage("Error submitting query. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Error submitting query. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen text-white px-4 py-10"
      style={{
        backgroundImage: "url('https://imgs.search.brave.com/Ph4nGzNK2OVTuCkzJFwIVI5no_SZ9IYzBzX97Ayfx90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b250YWN0LXVzLWNv/bW11bmljYXRpb24t/c3VwcG9ydC1zZXJ2/aWNlLWFzc2lzdGFu/Y2UtY29uY2VwdF81/Mzg3Ni0xMjgxMDMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA')", // Replace with your image URL
      }}
    >
      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center justify-center">
        <div
          className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-400 via-white to-purple-500 
                bg-[length:400%_400%] animate-[glow_6s_linear_infinite] shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] overflow-hidden"
        >
          <div className="bg-gray-900 p-11 rounded-lg shadow-lg">
            <MapPin className="mx-auto text-cyan-300 mb-2" size={32} />
            <h4 className="font-semibold text-lg">OUR MAIN OFFICE</h4>
            <p className="text-sm text-gray-400 mt-1">
              SHOP NO.- 16, NEW GRAIN MARKET, JAGADHRI YAMUNA NAGAR-135001
            </p>
          </div>
        </div>
        <div
          className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-400 via-white to-purple-500 
                bg-[length:400%_400%] animate-[glow_6s_linear_infinite] shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] overflow-hidden"
        >
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <Phone className="mx-auto text-cyan-300 mb-2" size={32} />
            <h4 className="font-semibold text-lg">PHONE NUMBER</h4>
            <p className="text-sm text-gray-400 mt-1">
              09996625922
              <br />
              09812225922
              <br />
              07027925922
              <br />
              7027445922
            </p>
          </div>
        </div>
        <div
          className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-400 via-white to-purple-500 
                bg-[length:400%_400%] animate-[glow_6s_linear_infinite] shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] overflow-hidden"
        >
          <div className="bg-gray-900 p-13.5 rounded-lg shadow-lg">
            <Mail className="mx-auto text-cyan-300 mb-2" size={32} />
            <h4 className="font-semibold text-lg">EMAIL</h4>
            <p className="text-sm text-gray-400 mt-1">
              <a href="mailto:info.alardiushealthcare@gmail.com">
                info.alardiushealthcare@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-cyan-400 via-white to-purple-500 
     bg-[length:400%_400%] animate-[glow_6s_linear_infinite] shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] overflow-hidden max-w-3xl mx-auto mb-10">
        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              required
              placeholder="Enter a valid email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              required
              placeholder="Enter your message"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
            {responseMessage && (
              <div className="text-center text-gray-300">{responseMessage}</div>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-lg text-white font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;
