import { FaStar, FaShoppingCart, FaEye, FaFilter } from "react-icons/fa";
import { useState } from "react";

// Sample Men Products
const menProducts = [
     {
    id: 6,
    title: "men Floral Summer Dress",
    category: "men",
    price: 39.99,
    discount: 12,
    rating: 4.7,
    stock: 110,
    image: "https://images.unsplash.com/photo-1520975682031-ae7b92d1f3ad",
    description: "Lightweight floral dress perfect for summer outings.",
  },
  {
    id: 7,
    title: "men Elegant Evening Gown",
    category: "men",
    price: 89.99,
    discount: 20,
    rating: 4.8,
    stock: 60,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    description: "Elegant evening gown with premium fabric and stylish design.",
  },
  {
    id: 8,
    title: "men Casual Cotton Top",
    category: "men",
    price: 24.99,
    discount: 10,
    rating: 4.4,
    stock: 140,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    description: "Soft cotton casual top for everyday comfort and style.",
  },
  {
    id: 9,
    title: "men High Waist Jeans",
    category: "men",
    price: 44.99,
    discount: 15,
    rating: 4.5,
    stock: 95,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    description: "Stylish high waist jeans with stretch fit for daily wear.",
  },
  {
    id: 1,
    title: "Men Slim Fit Casual Shirt",
    category: "Men",
    price: 29.99,
    discount: 10,
    rating: 4.5,
    stock: 120,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    description: "Premium cotton slim fit casual shirt for everyday comfort.",
  },
  {
    id: 2,
    title: "Men Regular Fit Jeans",
    category: "Men",
    price: 49.99,
    discount: 15,
    rating: 4.3,
    stock: 90,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    description: "Classic regular fit denim jeans with durable fabric.",
  },
  {
    id: 3,
    title: "Men Hooded Sweatshirt",
    category: "Men",
    price: 34.99,
    discount: 10,
    rating: 4.4,
    stock: 110,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description: "Soft fleece hoodie perfect for casual wear.",
  },
  {
    id: 4,
    title: "Men Leather Wallet",
    category: "Men",
    price: 19.99,
    discount: 5,
    rating: 4.2,
    stock: 200,
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61",
    description: "Genuine leather wallet with multiple card slots.",
  },
];

const Men = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  const handleView = (product) => {
    alert(`Viewing: ${product.title}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-blue-500">
        <img
          src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
          alt="Men Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-primary text-4xl md:text-5xl font-bold">
            Men Collection
          </h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold"><span className="text-primary">Men</span> Products</h2>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          <FaFilter />
          Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-primary hover:shadow-xl transition overflow-hidden group relative"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Overlay Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleView(product)}
                  className="flex items-center gap-1 bg-white text-primary cursor-pointer px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                >
                  <FaEye />
                  View
                </button>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/60 cursor-pointer transition"
                >
                  <FaShoppingCart />
                  Add
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-3">
              <h3 className="text-sm font-semibold line-clamp-1">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                {Array.from({ length: Math.floor(product.rating) }).map(
                  (_, i) => (
                    <FaStar key={i} />
                  )
                )}
                <span className="text-gray-700">{product.rating}</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-sm text-gray-500 line-through">
                  ${(product.price + product.price * (product.discount / 100)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
