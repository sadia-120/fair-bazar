import { use } from "react";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSquer from "../../hooks/useAxiosSquer";

const PCard = ({ title, category, price, discount, image, id }) => {
  // Calculate discounted price
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSquer = useAxiosSquer();
  // console.log(user);

  // handleAddCart
  const handleAddCart = async (id) => {
    if (!user) {
      alert("Please log in to add items to your cart");

      //   location.state = location.pathname;

      navigate("/login", { state: location.pathname });
    }else{
      const cartItem = {
        userName: user?.displayName,
        userEmail: user?.email,
        kidsId: id,
        kidsName: title,
        isPaid: false,
        kidsImage: image,
        kidsCategory: category,
        kidsPrice: price,
      };

      await axiosSquer.post("/addCart", cartItem);
      console.log("Added to cart:", cartItem);
      alert("Product added to cart!");
    }
    // user ? alert(id) : alert("please login");
  };

  // console.log(`product id:`, id);

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
          <Link
            to={`/kidsDitails/${id}`}
            className="btn btn-outline btn-primary text-xs flex-1 gap-2 hover:gap-3 transition-all duration-200"
          >
            <FaEye size={18} /> View Details
          </Link>
          <button
            onClick={() => handleAddCart(id)}
            className="btn btn-primary flex-1 gap-2 text-xs hover:gap-3 transition-all duration-200"
          >
            <FaCartPlus size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PCard;
