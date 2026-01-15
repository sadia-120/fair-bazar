import { FaTag } from "react-icons/fa";

const DiscountBanner = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div className="relative bg-linear-to-r from-black via-gray-900 to-black rounded-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1491553895911-0055eca6402d')] bg-cover bg-center"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 text-white">
            <div>
              <span className="inline-flex items-center gap-2 bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                <FaTag /> Limited Offer
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold">
                Get <span className="text-primary">50% OFF</span>
              </h2>

              <p className="text-gray-300 mt-2 max-w-md">
                Don’t miss out! Grab your favorite products at half the price.
              </p>
            </div>

            {/* CTA */}
            <button className="bg-primary text-orange-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
