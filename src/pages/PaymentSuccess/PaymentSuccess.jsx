import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [tranId, setTranId] = useState("");
  const [valId, setValId] = useState("");
  const [status, setStatus] = useState("Payment Completed 🎉");

  useEffect(() => {
    const tid = searchParams.get("tran_id");
    const vid = searchParams.get("val_id");

    setTranId(tid);
    setValId(vid);

    // Optional: You can POST to server here for final verification if you want
    // axios.post("https://fairbazar-server.vercel.app/success", { tran_id: tid, val_id: vid });
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">{status}</h2>
        {tranId && (
          <p className="text-gray-600 mb-6">
            <strong>Transaction ID:</strong> {tranId}
          </p>
        )}
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
