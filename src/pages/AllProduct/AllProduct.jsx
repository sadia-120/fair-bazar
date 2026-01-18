import { FaProcedures, FaSearch } from "react-icons/fa";
import PCard from "../../components/PCard/PCard";
// import DiscountBanner from "../Home/DiscountBanner/DiscountBanner";
import useAxiosSquer from "../../hooks/useAxiosSquer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

const AllProduct = () => {
  const axiosSquer = useAxiosSquer();

  const fetchData = async ({ pageParam = 1 }) => {
    const res = await axiosSquer.get(`/kids?limit=10&page=${pageParam}`);
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

  const {data: kidsLength = 0} = useQuery({
    queryKey: ['kidsLength', 'allKids'],
    queryFn: async () => {
      const res = await axiosSquer.get('/kids/length');
      return res.data;
    }
  })

  if (isLoading) return <Loading />;

  // console.log(kidsLength);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(e.target.searchText.value);
  };

  return (
    <div className="mb-16 pt-24 container mx-auto">
      <div className="flex justify-center  mb-8">
        <h2 className="text-4xl font-semibold text-primary text-center flex items-center gap-4">
          <FaProcedures /> All Kids
        </h2>
      </div>

      <div className="flex justify-between items-center my-10">
        <h1 className=" text-2xl font-bold">
          Kids <span className="text-primary">( {kidsLength} )</span> founts
        </h1>

        <form onSubmit={handleSearch} className="join">
          <input
            className="input join-item outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search..."
            name="searchText"
            required
          />
          <button type="submit" className="btn join-item rounded-r-full">
            Search
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
        {data?.pages?.map((arr) =>
          arr.map((kid) => (
            <PCard
              key={kid._id}
              title={kid.title}
              category={kid.category}
              price={kid.price}
              discount={kid.discount}
              image={kid.image}
              id={kid._id}
            ></PCard>
          )),
        )}
      </div>

      {isFetchingNextPage && (
        <p className="flex justify-center items-center py-4 text-primary/80">
          Loading....
        </p>
      )}

      {/* <div className="">
        <img
          className="h-125 my-10 rounded-2xl w-full"
          src={singleProduct.image}
          alt=""
        />
      </div> */}

      {/* <DiscountBanner /> */}

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
        {/* {data.pages.map((arr) =>
          arr.map((p) => (
            <PCard
              key={p._id}
              title={product.title}
              category={product.category}
              price={product.price}
              discount={product.discount}
              image={product.image}
              id={product._id}
            ></PCard>
          )),
        )} */}
      </div>
    </div>
  );
};

export default AllProduct;

{
  /* ids.map((product) => (
          <PCard
            key={product._id}
            title={product.title}
            category={product.category}
            price={product.price}
            discount={product.discount}
            image={product.image}
            id={product._id}
          ></PCard>
        ))} */
}
