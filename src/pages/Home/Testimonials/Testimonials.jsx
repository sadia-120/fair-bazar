import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Verified Buyer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing product quality and fast delivery. Highly recommended!",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Happy Customer",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Loved the design and comfort. Customer support was very helpful.",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Repeat Customer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Best online shopping experience so far. Will shop again!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary">What Our Customers Say</h2>
          <p className="text-gray-500 mt-2">
            Real reviews from real buyers
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-primary text-2xl mb-4" />

              {/* Review */}
              <p className="text-gray-600 text-sm mb-4">
                “{item.review}”
              </p>

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
