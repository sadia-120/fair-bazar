import { useQuery, useMutation, useQueryClient, experimental_streamedQuery } from "@tanstack/react-query";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSquer from "../../hooks/useAxiosSquer";
import { ShoppingCart, Trash2 } from "lucide-react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import Loading from "../../components/Loading/Loading";
import useUserRole from "../../hooks/useUserRole";

const AllCart = () => {
  const { user } = use(AuthContext);
  const axiosSquer = useAxiosSquer();
  const queryClient = useQueryClient();
  const { userInfo } = useUserRole();
  const userData = userInfo || {};

  const {
    data: myKids = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myKids", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSquer.get(`/addCart/${user?.email}`);
      return res.data;
    },
  });

// export const addCartsLength = myKids.length;

  // console.log(addCartsLength);

  // 🗑️ Delete item
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return axiosSquer.delete(`/addCart/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myKids", user?.email]);
    },
  });

  // const handlePayment = async (id) => {

  //   const res =  await axiosSquer.get('/init');
  //   console.log(res.data);
  //   console.log(id);
  //   alert(id);

  // }

  // import axios from "axios";

  const handlePayment = async (id, amount) => {
    try {
      // POST request to create/init payment
      const res = await axiosSquer.post("/create-order", {
        name: userData?.name, // Replace with actual user data
        email: userData?.email,
        phone: userData?.phone,
        amount: amount, // Replace with actual amount
        product_id: id, // Pass your product/order ID
      });


      console.log({
        name: userData?.name, // Replace with actual user data
        email: userData?.email,
        phone: userData?.phone,
        amount: amount, // Replace with actual amount
        product_id: id, // Pass your product/order ID
      });
      
      console.log("Gateway URL:", res.data.gatewayURL);
      console.log("Order/Tran ID:", res.data.tran_id);

      if (!res.data.gatewayURL) {
        alert("Payment Gateway URL not received!");
        return;
      }

      // Redirect to SSLCommerz Payment page
      window.location.href = res.data.gatewayURL;
    } catch (err) {
      console.error("Payment init failed:", err);
      alert("Payment initialization failed. Please try again.");
    }
  };

  const totalPrice = myKids.reduce((sum, item) => sum + item.kidsPrice, 0);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pt-20 px-4 container mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <ShoppingCart className="w-7 h-7 text-primary" />
        <h2 className="text-2xl md:text-3xl font-semibold">My Cart</h2>
      </div>

      {myKids.length === 0 ? (
        <div className="bg-base-200 rounded-2xl p-10 text-center shadow">
          <p className="text-lg font-medium">Your cart is empty</p>
          <p className="text-sm opacity-70 mt-2">
            Start adding products to see them here
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {myKids.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center gap-4 bg-base-100 rounded-2xl p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={item.kidsImage}
                  alt={item.kidsName}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div className="flex-1 space-y-1.5">
                  <h3 className="font-semibold text-lg">{item.kidsName}</h3>
                  <p className="text-sm opacity-70">
                    Category: {item.kidsCategory}
                  </p>
                  <p className="text-sm opacity-70">User: {item.userName}</p>
                </div>

                <p className="text-lg font-bold text-primary">
                  ${item.kidsPrice}
                </p>

                <div className="text-right">
                  <div className="flex flex-col flex-wrap">
                    <button
                      onClick={() => handlePayment(item._id, item.kidsPrice)}
                      className="btn btn-sm btn-outline btn-primary mt-2 flex items-center gap-1"
                    >
                      <FaRegMoneyBillAlt className="w-4 h-4" />
                      Pay
                    </button>
                    <button
                      onClick={() => deleteMutation.mutate(item._id)}
                      className="btn btn-sm btn-outline btn-error mt-2 flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="bg-base-100 rounded-2xl p-6 mb-6 shadow-lg h-fit sticky top-24">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-2 text-sm">
              <span>Items</span>
              <span>{myKids.length}</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>

            <button className="btn btn-primary w-full mt-6 rounded-xl">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCart;
