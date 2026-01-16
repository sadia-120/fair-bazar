import { FaStar, FaShoppingCart, FaEye, FaFilter } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

// Sample Women Products Data
const womenProducts = [
  {
    id: 6,
    title: "Women Floral Summer Dress",
    category: "Women",
    price: 39.99,
    discount: 12,
    rating: 4.7,
    stock: 110,
    image: "https://images.unsplash.com/photo-1520975682031-ae7b92d1f3ad",
    description: "Lightweight floral dress perfect for summer outings.",
  },
  {
    id: 7,
    title: "Women Elegant Evening Gown",
    category: "Women",
    price: 89.99,
    discount: 20,
    rating: 4.8,
    stock: 60,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    description: "Elegant evening gown with premium fabric and stylish design.",
  },
  {
    id: 8,
    title: "Women Casual Cotton Top",
    category: "Women",
    price: 24.99,
    discount: 10,
    rating: 4.4,
    stock: 140,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    description: "Soft cotton casual top for everyday comfort and style.",
  },
  {
    id: 9,
    title: "Women High Waist Jeans",
    category: "Women",
    price: 44.99,
    discount: 15,
    rating: 4.5,
    stock: 95,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    description: "Stylish high waist jeans with stretch fit for daily wear.",
  },
  {
    id: 6,
    title: "Women Floral Summer Dress",
    category: "Women",
    price: 39.99,
    discount: 12,
    rating: 4.7,
    stock: 110,
    image: "https://images.unsplash.com/photo-1520975682031-ae7b92d1f3ad",
    description: "Lightweight floral dress perfect for summer outings.",
  },
  {
    id: 7,
    title: "Women Elegant Evening Gown",
    category: "Women",
    price: 89.99,
    discount: 20,
    rating: 4.8,
    stock: 60,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    description: "Elegant evening gown with premium fabric and stylish design.",
  },
  {
    id: 8,
    title: "Women Casual Cotton Top",
    category: "Women",
    price: 24.99,
    discount: 10,
    rating: 4.4,
    stock: 140,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    description: "Soft cotton casual top for everyday comfort and style.",
  },
  {
    id: 9,
    title: "Women High Waist Jeans",
    category: "Women",
    price: 44.99,
    discount: 15,
    rating: 4.5,
    stock: 95,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    description: "Stylish high waist jeans with stretch fit for daily wear.",
  },
  {
    id: 10,
    title: "Women Sports Leggings",
    category: "Women",
    price: 29.99,
    discount: 18,
    rating: 4.6,
    stock: 120,
    image: "https://images.unsplash.com/photo-1520974735194-6c9e0c1adf54",
    description: "Breathable and stretchable leggings for gym and yoga.",
  },
  {
    id: 11,
    title: "Women Stylish Handbag",
    category: "Women",
    price: 54.99,
    discount: 25,
    rating: 4.7,
    stock: 70,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
    description:
      "Premium handbag with spacious compartments and modern design.",
  },
  {
    id: 12,
    title: "Women Running Sneakers",
    category: "Women",
    price: 69.99,
    discount: 22,
    rating: 4.6,
    stock: 85,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    description:
      "Lightweight sneakers designed for running and daily workouts.",
  },
  {
    id: 13,
    title: "Women Cozy Winter Jacket",
    category: "Women",
    price: 99.99,
    discount: 30,
    rating: 4.8,
    stock: 50,
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716c",
    description: "Warm and stylish winter jacket with premium insulation.",
  },
];

const Women = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  console.log(cart.length);

  const handleView = (product) => {
    // setCart()
    alert(`Viewing: ${product.title}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-pink-500">
        <img
          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
          alt="Women Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-primary text-4xl md:text-5xl font-bold">
            Women Collection
          </h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto py-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold"><span className="text-primary">Women</span> Products</h2>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          <FaFilter />
          Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenProducts.map((product) => (
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
                <Link 
                to={`/kidsDitails/${product.id}`}
                  // onClick={() => handleView(product)}
                  className="flex items-center gap-1 bg-white text-primary px-4 py-2 rounded-lg text-sm  cursor-pointer transition"
                >
                  <FaEye />
                  View
                </Link>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/80 cursor-pointer transition"
                >
                  <FaShoppingCart />
                  Add
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-4">
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
                  $
                  {(
                    product.price +
                    product.price * (product.discount / 100)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
