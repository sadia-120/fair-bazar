import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxiosSquer from "../../hooks/useAxiosSquer";
import Swal from "sweetalert2";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const axiosSquer = useAxiosSquer();
  // handleContact
  const handleContact = async (e) => {
    e.preventDefault();

    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const message = formData.message.value;
    console.log({ name, email, message });

    // if(!name || !email || !message)

    try {
      const newSMG = {
        name,
        email,
        status: 'pending',
        message,
      };
      const res = await axiosSquer.post("/contact", newSMG);
      if (res?.data?.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Your question sened! Please wait, our team will contact you soon.",
          icon: "success",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    formData.reset();
  };

  return (
    <section className="flex items-center pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-semibold my-text">
            Contact BD
          </h1>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Have questions, feedback, or a products in mind? Let’s build
            something amazing together.
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
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 my-text">
                    <FaPhoneAlt />
                  </div>
                  <span>+880 1631513697</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 my-text">
                    <FaEnvelope />
                  </div>
                  <span>FAIRBAZAR798@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 my-text">
                    <FaMapMarkerAlt />
                  </div>
                  <span>Dhaka, Bangladesh</span>
                </div>
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
              <h2 className="card-title text-2xl mb-6 my-text">
                Send a Message
              </h2>

              <form onSubmit={handleContact} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <textarea
                  placeholder="Your Message"
                  name="message"
                  className="textarea textarea-bordered focus:outline-none focus:ring-2 focus:ring-primary w-full min-h-30"
                  required
                />

                <motion.button
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
