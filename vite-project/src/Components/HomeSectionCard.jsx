export const HomeSectionCard = ({ medicine }) => {
  return (
    <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md overflow-hidden mx-3 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
      <a href="#" className="relative">
        <img
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
          src={medicine.imageUrl}
          alt={medicine.name}
        />
        <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded-lg">
          {medicine.category}
        </div>
      </a>
      <div className="p-5 flex flex-col flex-grow">
        <a href="#">
          <h5 className="text-xl font-semibold text-white mb-1 transition-colors group-hover:text-blue-400 truncate">
            {medicine.name}
          </h5>
        </a>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {medicine.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-white">{medicine.price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-lg shadow-md transition-colors duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
