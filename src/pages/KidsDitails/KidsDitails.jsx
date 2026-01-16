// =============================
// Kids Details Page (Tailwind + React Query + Axios)
// =============================

import { useLocation, useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import useAxiosSquer from "../../hooks/useAxiosSquer";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const KidsDitails = () => {
  const { id } = useParams();
  const axiosSquer = useAxiosSquer();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: singlekid = {}, isLoading } = useQuery({
    queryKey: ["singlekid", id],
    queryFn: async () => {
      const res = await axiosSquer.get(`/kids/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Loading details...
        </p>
      </div>
    );
  }

  const {
    title,
    image,
    price,
    category,
    description,
    rating,
    stock,
    discount,
  } = singlekid;

  const handleAddToCart = async () => {
    if (!user) {
      alert("Please log in to add items to your cart");

      //   location.state = location.pathname;

      navigate("/login", { state: location.pathname });

    //   console.log(location);
      return;
    } else {
      const cartItem = {
        userName: user?.displayName,
        userEmail: user?.email,
        kidsId: singlekid?._id,
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
  };

  //   console.log()

  return (
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-md rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-sm uppercase text-primary font-semibold">
              {category}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">{title}</h2>

            {/* Rating */}
            <div className="flex items-center mt-3">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-gray-700 font-medium">{rating}</span>
              <span className="ml-3 text-sm text-gray-500">Stock: {stock}</span>
            </div>

            {/* Price */}
            <div className="mt-4">
              <span className="text-3xl font-bold text-green-600">
                ${price}
              </span>
              {discount > 0 && (
                <span className="ml-3 text-sm text-red-500 font-semibold">
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-5 text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="mt-8 flex-1 flex items-center justify-center gap-2 rounded-lg btn btn-primary transition duration-300"
            >
              <FaShoppingCart size={24} />
              Add to Cart
            </button>
            <button
              onClick={handleAddToCart}
              className="mt-8 flex-1 flex items-center justify-center gap-2 rounded-lg btn btn-outline btn-primary transition duration-300"
            >
              <RiMoneyDollarCircleLine size={24} />
              By Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsDitails;
