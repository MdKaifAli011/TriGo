import TourCard from "./TourCard";

const tours = [
  {
    title: "Westminster Bridge",
    country: "UK",
    price: 10000,
    image: "https://loremflickr.com/400/300/london",
    rating: 4.5,
  },
  {
    title: "Bali Beaches",
    country: "Indonesia",
    price: 12000,
    image: "https://loremflickr.com/400/300/beach,bali",
    rating: 4.8,
  },
  {
    title: "Swiss Alps",
    country: "Switzerland",
    price: 18000,
    image: "https://loremflickr.com/400/300/mountains,snow",
    rating: 4.7,
  },
  {
    title: "Tokyo Temples",
    country: "Japan",
    price: 15000,
    image: "https://loremflickr.com/400/300/tokyo,temple",
    rating: 4.6,
  },
  {
    title: "Desert Safari",
    country: "Dubai",
    price: 13000,
    image: "https://loremflickr.com/400/300/desert,safari",
    rating: 4.3,
  },
];


const FeaturedTours = () => (
  <section className="py-12 px-4">
    <h2 className="text-center text-2xl font-bold mb-4">
      Our Featured <span className="text-blue-500">Tours</span>
    </h2>
    <p className="text-center text-sm text-gray-600 mb-6 max-w-xl mx-auto">
      Unforgettable journeys tailored to your interests.
    </p>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {tours.map((tour, index) => (
        <TourCard key={index} {...tour} />
      ))}
    </div>
  </section>
);

export default FeaturedTours;   