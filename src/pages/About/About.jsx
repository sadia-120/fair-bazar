import { motion } from "framer-motion";
import { FaShoppingBag, FaTruck, FaShieldAlt, FaUsers } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-base-200 to-base-300 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold my-text">
            About Our Store
          </h1>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            We are more than just an online shop — we deliver quality,
            trust, and an exceptional shopping experience.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold my-text mb-5">
              Who We Are
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-4">
              Our e-commerce platform is built to provide a seamless,
              secure, and enjoyable shopping experience. We carefully
              select products that meet high standards of quality and
              value.
            </p>
            <p className="text-base-content/70 leading-relaxed">
              From fast delivery to reliable customer support, our goal
              is to build long-term relationships with our customers.
            </p>
          </motion.div>

          {/* Stats / Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaShoppingBag className="text-4xl my-text mb-2" />
                <h3 className="font-bold text-lg">Premium Products</h3>
                <p className="text-sm opacity-70">
                  Carefully curated items
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaTruck className="text-4xl my-text mb-2" />
                <h3 className="font-bold text-lg">Fast Delivery</h3>
                <p className="text-sm opacity-70">
                  Quick & reliable shipping
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaShieldAlt className="text-4xl my-text mb-2" />
                <h3 className="font-bold text-lg">Secure Payments</h3>
                <p className="text-sm opacity-70">
                  100% safe checkout
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaUsers className="text-4xl my-text mb-2" />
                <h3 className="font-bold text-lg">Happy Customers</h3>
                <p className="text-sm opacity-70">
                  Trusted by many users
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
