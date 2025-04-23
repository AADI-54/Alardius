import { Eye } from "lucide-react";

export default function ESGHeroCard() {
  return (
    <>
      <style>{`
        @keyframes pulseEye {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .animate-pulseEye {
          animation: pulseEye 1s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>

      <div className="flex items-center justify-between px-10 py-12 rounded-xl bg-gradient-to-r from-indigo-900 to-purple-700 text-white max-w-7xl mx-auto mt-10">
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Our Environment, Social and<br />
            Governance Strategy
          </h2>
        </div>
        <button className="flex items-center gap-2 bg-white text-indigo-900 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition">
          DOWNLOAD 2023 ESG REPORT
          <Eye className="w-5 h-5 animate-pulseEye" />
        </button>
      </div>
    </>
  );
}
