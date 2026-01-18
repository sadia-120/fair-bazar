import { useQuery } from "@tanstack/react-query";
import useAxiosSquer from "../../../hooks/useAxiosSquer"

const OrdersPage = () => {

    const axiosSquer = useAxiosSquer();
    // const {data: orders = []} = useQuery({
    //     queryKey: ['orders'], 
    //     queryFn: async () => {
    //         const res = await axiosSquer.get('/orders');
    //         return res.data;
    //     }
    // });

    // console.log(orders)  {orders.length}

    return <div>
        OrdersPage 
    </div>
}

export default OrdersPage