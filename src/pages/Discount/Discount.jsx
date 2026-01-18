import { useQuery } from "@tanstack/react-query";
import useAxiosSquer from "../../hooks/useAxiosSquer";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";
import { BiHappyHeartEyes } from "react-icons/bi";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const DiscountKids = () => {
  const axiosSquer = useAxiosSquer();
  const {user} = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: discountKids = [] } = useQuery({
    queryKey: ["discountKids"],
    queryFn: async () => {
      const res = await axiosSquer.get("/discount");
      return res.data;
    },
  });

 // handleAddCart
  const handleAddCart = async (item) => {
    if (!user) {
      alert("Please log in to add items to your cart");

      //   location.state = location.pathname;

      navigate("/login", { state: location.pathname });
    }else{
      const cartItem = {
        userName: user?.displayName,
        userEmail: user?.email,
        kidsId: item._id,
        kidsName: item.title,
        isPaid: false,
        kidsImage: item.image,
        kidsCategory: item.category,
        kidsPrice: item.price,
      };

      await axiosSquer.post("/addCart", cartItem);
      console.log("Added to cart:", cartItem);
      alert("Product added to cart!");
    }
    // user ? alert(id) : alert("please login");
  };

  console.log(discountKids);

  return (
    <div className="pt-24 pb-10 px-4 container mx-auto">
      <DiscountBanner />

      <h1 className="md:text-4xl text-3xl font-bold mb-6 mt-6 text-primary text-center flex gap-2 pt-5 pb-3 justify-center items-center">
        <BiHappyHeartEyes />
        Discount Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {discountKids.map((item, index) => (
          <div
            key={index}
            className="border border-primary/50 rounded-lg p-4 shadow-md flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-bold mb-2">
              ${item.price}{" "}
              <span className="text-red-500">({item.discount}% off)</span>
            </p>
            <p className="text-yellow-500 mb-4">Rating: {item.rating} ⭐</p>
            <div className="flex gap-4">
              <button onClick={() => {
                handleAddCart(item);
              }} className="btn btn-primary transition">
                Add to Cart
              </button>
              <button className="btn btn-outline btn-primary transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountKids;
