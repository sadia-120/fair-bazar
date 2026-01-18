const DiscountBanner = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg ">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        {/* Text Section */}
        <div className="max-w-lg">
          <h1 className="text-3xl text-primary md:text-5xl font-bold mb-4">
            Winter Sale is Here!
          </h1>
          <p className="mb-6 text-lg  md:text-xl">
            Up to{" "}
            <span className="font-extrabold text-primary">20% OFF </span>
            on our latest Women's Winter Collection. Don’t miss out!
          </p>
          {/* <button className="bg-white text-red-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
            Shop Now
          </button> */}
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:ml-12 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1600180758895-7c54742cbd6b"
            alt="Winter Coat"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Optional Decorative Overlay */}
      <div className="absolute inset-0 bg-black opacity-10 mix-blend-multiply"></div>
    </div>
  );
};

export default DiscountBanner;
