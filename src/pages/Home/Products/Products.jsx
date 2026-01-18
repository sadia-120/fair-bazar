import { Link } from "react-router";
import PCard from "../../../components/PCard/PCard";
import useAxiosSquer from "../../../hooks/useAxiosSquer";
import { useQuery } from "@tanstack/react-query";
import { FaProductHunt } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  const axiosSquer = useAxiosSquer();

  const { data: kids = [] } = useQuery({
    queryKey: ["kids"],
    queryFn: async () => {
      const res = await axiosSquer.get("/kids");
      return res.data;
    },
  });

  // const { data: featuredProducts = [] } = useQuery({
  //   queryKey: ["featureKids"],
  //   queryFn: async () => {
  //     const res = await axiosSquer.get("/feature");
  //     return res.data;
  //   },
  // });

  // console.log(featuredProducts);

  const singleProduct = {
    id: 21,
    title: "Men Slim Fit Casual Shirt",
    category: "Men",
    price: 29.99,
    discount: 10,
    rating: 4.5,
    stock: 120,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    description: "Premium cotton slim fit casual shirt for everyday comfort.",
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center  mb-10 mt-14">
        <h3 className="text-4xl font-bold text-primary text-center flex items-center gap-2">
          <FaProductHunt /> Our Products
        </h3>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
        {kids.map((product) => (
          <PCard
            key={product._id}
            title={product.title}
            category={product.category}
            price={product.price}
            discount={product.discount}
            image={product.image}
            id={product._id}
          ></PCard>
        ))}
      </div>

      <div className="flex justify-center">
        <Link className="btn btn-outline btn-primary my-10" to={"allProduct"}>
          All Product <FaArrowRight />
        </Link>
      </div>

      <div className="relative my-10">
        {/* Product Image */}
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="w-full h-125 object-cover rounded-2xl"
        />

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            {singleProduct.title}
          </h1>

          <p className="text-white text-lg md:text-xl max-w-lg">
            {singleProduct.description}
          </p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-primary">
              ${singleProduct.price}
            </span>
            {singleProduct.discount && (
              <span className="text-lg text-gray-300 line-through">
                $
                {(
                  singleProduct.price +
                  singleProduct.price * (singleProduct.discount / 100)
                ).toFixed(2)}
              </span>
            )}
          </div>

          <button className="btn btn-primary rounded-lg transition mt-2">
            Add to Cart
          </button>
        </div>
      </div>

      {/* <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
        {featuredProducts.map((product) => (
          <PCard
            key={product._id}
            title={product.title}
            category={product.category}
            price={product.price}
            discount={product.discount}
            image={product.image}
            id={product._id}
          ></PCard>
        ))}
      </div> */}
    </div>
  );
};

export default Products;
