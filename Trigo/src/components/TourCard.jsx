import { useNavigate } from "react-router-dom";

const TourCard = ({ title, country, price, image, rating }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/booking", {
      state: { title, country, price, image, rating }, // 🔥 send tour info
    });
  };

  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{country}</p>
        <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
        <p className="text-sm text-gray-500">⭐ {rating}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm font-medium">
            ₹{price} <span className="text-xs text-gray-400">/person</span>
          </span>
          <button
            onClick={handleBook}
            className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
