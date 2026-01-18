import { FaStar, FaShoppingCart, FaEye, FaFilter } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSquer from "../../hooks/useAxiosSquer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading/Loading";

const Men = () => {
  // const [cart, setCart] = useState([]);
  const axiosSquer = useAxiosSquer();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const men = "Men";

  const fetchData = async ({ pageParam = 1 }) => {
    const res = await axiosSquer.get(
      `/kids?category=${men}&limit=10&page=${pageParam}`,
    );
    return res.data;
  };

  // infinity scroll
  const {
    data = [],
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["allKids"],
    queryFn: fetchData,
    getNextPageParam: (lastPage, allKids) => {
      return lastPage.length === 10 ? allKids.length + 1 : undefined;
      // console.log(lastPage, allKids);
    },
  });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;

    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  const { data: kidsLength = 0 } = useQuery({
    queryKey: ["kidsLength", "men"],
    queryFn: async () => {
      const res = await axiosSquer.get(`/kids/length?category=${men}`);
      return res.data;
    },
  });

  console.log(kidsLength);

  const { data: menProducts = [] } = useQuery({
    queryKey: ["mens"],
    queryFn: async () => {
      const res = await axiosSquer.get(`/kids?category=${men}`);
      return res.data;
    },
  });

  // console.log(isLoading);

  // const handleAddToCart = (product) => {

  //   setCart((prev) => [...prev, product]);
  //   alert(`${product.title} added to cart!`);
  // };

  const handleAddToCart = async (product) => {
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
        kidsId: product?._id,
        kidsName: product.title,
        isPaid: false,
        kidsImage: product?.image,
        kidsCategory: product?.category,
        kidsPrice: product?.price,
      };

      await axiosSquer.post("/addCart", cartItem);
      console.log("Added to cart:", cartItem);
      alert("Product added to cart!");
    }
  };

  console.log(data);

  // const handleView = (product) => {
  //   alert(`Viewing: ${product.title}`);
  // };

  if (isLoading) return <Loading />;

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
        <h2 className="text-2xl font-semibold">
          Men <span className="text-primary">( {kidsLength} )</span> Kids Founts
        </h2>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          <FaFilter />
          Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.pages.map((arr) =>
          arr.map((product) => {
            return (
              <div
                key={product._id}
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
                      to={`/kidsDitails/${product._id}`}
                      // onClick={() => handleView(product)}
                      className="flex items-center gap-1 bg-white text-primary cursor-pointer px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                    >
                      <FaEye />
                      View
                    </Link>

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
                      ),
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
            );
          }),
        )}
      </div>

      {isFetchingNextPage && (
        <p className="flex justify-center items-center pb-7 text-primary/80">
          Loading....
        </p>
      )}
    </div>
  );
};

export default Men;
