import { FaCartPlus, FaEye } from "react-icons/fa";

const PCard = ({ title, category, price, discount, image }) => {
  // Calculate discounted price
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      
      {/* Product Image */}
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-5 flex flex-col justify-between">
        {/* Category */}
        <p className="text-sm text-primary font-semibold">{category}</p>

        {/* Title */}
        <h2 className="card-title text-lg md:text-xl">{title}</h2>

        {/* Price */}
        <div className="flex items-center gap-3 mt-2">
          <span className="font-bold text-lg">${discountedPrice}</span>
          {discount > 0 && (
            <span className="line-through text-sm text-gray-400">${price}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="card-actions mt-4 flex gap-3">
          <button className="btn btn-outline btn-primary flex-1 gap-2 hover:gap-3 transition-all duration-200">
            <FaEye /> View Details
          </button>
          <button className="btn btn-primary flex-1 gap-2 hover:gap-3 transition-all duration-200">
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PCard;
