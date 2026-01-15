import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const featuredProducts = [
  {
    id: 1,
    title: "Men Slim Fit Shirt",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    id: 2,
    title: "Women Summer Dress",
    price: 39.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 69.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 89.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 container px-4 mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary">Featured Products</h2>
        <p className="text-gray-500 mt-2">
          Handpicked items just for you
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl border border-primary hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-full object-cover"
              />

              {/* Wishlist */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500 transition">
                <FaHeart />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <h3 className="text-sm font-semibold line-clamp-1">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                <FaStar />
                <span className="text-gray-700">{product.rating}</span>
              </div>

              {/* Price + Cart */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold">
                  ${product.price}
                </span>

                <button className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded-lg text-sm hover:bg-gray-800 transition">
                  <FaShoppingCart />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
