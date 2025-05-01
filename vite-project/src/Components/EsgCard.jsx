import { Eye } from "lucide-react";
import samplePDF from "../Data/Productlist.pdf"

export default function ESGHeroCard() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-700" />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-10 py-10 md:py-12 rounded-xl max-w-7xl mx-auto mt-10 text-white">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Our Environment, Social and<br />
            Governance Strategy
          </h2>
        </div>

        <button className="flex items-center gap-2 bg-white text-indigo-900 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-100 transition">
        <a
    href={samplePDF}
    download="Alardius-Product-List.pdf"
    className="flex items-center gap-2"
  >
    DOWNLOAD OUR PRODUCT LIST
    <Eye className="w-5 h-5 animate-pulse" />
  </a>
        </button>
      </div>
    </div>
  );
}
