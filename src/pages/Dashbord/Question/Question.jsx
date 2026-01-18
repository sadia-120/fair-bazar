import { useQuery } from "@tanstack/react-query";
import useAxiosSquer from "../../../hooks/useAxiosSquer";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCheckCircle,
  FaClock,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const QuestionsPage = () => {
  const axiosSquer = useAxiosSquer();
  const [approved, setApproved] = useState({});

  const { data: questions = [], isLoading } = useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const res = await axiosSquer.get("/contacts");
      return res.data;
    },
  });

  const handleApprove = (id) => {
    Swal.fire('success', 'done!', 'success')
  };

  if (isLoading) {
    return (
      <div className="p-10 text-center text-gray-500 text-lg">
        Loading Questions...
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 flex items-center gap-2"
        >
          <FaCheckCircle className="text-primary" />
          Customer <span className="text-primary">Questions</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, index) => (
            <motion.div
              key={q._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <p className="flex items-center gap-2 font-semibold">
                    <FaUser className="text-primary" />
                    {q.name}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <FaEnvelope />
                    {q.email}
                  </p>
                </div>

                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                  {q.status || "Pending"}
                </span>
              </div>

              {/* Message */}
              <p className="text-gray-700 mb-6 leading-relaxed">{q.message}</p>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-1 text-xs text-gray-400">
                  <FaClock />
                  {new Date(q.sendTime).toLocaleString()}
                </p>

                <button onClick={handleApprove} className="btn btn-outline btn-primary">
                  <FaSignOutAlt />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
