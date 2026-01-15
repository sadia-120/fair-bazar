import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center py-10">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold my-text">
            Contact BD
          </h1>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Have questions, feedback, or a products in mind?  
            Let’s build something amazing together.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title my-text text-2xl mb-6">Get in Touch</h2>

              <div className="space-y-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 my-text">
                    <FaPhoneAlt />
                  </div>
                  <span>+880 1XXX-XXXXXX</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 my-text">
                    <FaEnvelope />
                  </div>
                  <span>support@yourbrand.com</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 my-text">
                    <FaMapMarkerAlt />
                  </div>
                  <span>Dhaka, Bangladesh</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6 my-text">Send a Message</h2>

              <form className="space-y-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />

                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full min-h-30"
                  required
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn border-none bg-orange-400 text-orange-700 w-full"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
