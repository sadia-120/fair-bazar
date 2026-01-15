import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" bg-linear-to-br from-primary/10 via-base-200 to-secondary/10 mt-16">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <section className="relative min-h-[80vh] container mx-auto flex items-center mb-10 bg-linear-to-br from-primary/10 via-base-200 to-secondary/10 overflow-hidden">
        {/* Background Glow */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge badge-primary badge-outline mb-4">
              New Collection 2026
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Discover <span className="my-text">Premium</span> <br />
              Products for Your Lifestyle
            </h1>

            <p className="mt-6 text-base-content/70 max-w-lg">
              Shop high-quality products with fast delivery, secure payment, and
              exclusive deals tailored just for you.
            </p>

            <div className="mt-8 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Shop Now <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-primary"
              >
                Explore More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image / Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card bg-base-100 shadow-2xl rounded-3xl p-6">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Hero Product"
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 badge badge-primary badge-lg"
            >
              50% OFF
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
