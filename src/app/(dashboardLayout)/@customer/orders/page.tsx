import { getMyAllOrders } from "@/actions/customer.actions";
import CustomerOrdersItem from "@/components/modules/customer/CustomerOrdersItem";
import { OrderProps } from "@/types/routes.type";

export default async function OrdersPage () {
  const {data} = await getMyAllOrders();
  // console.log(data);
  
  return (
    
    <div>

      <div className="grid grid-cols-2 gap-5">
              {
                data.map((order : OrderProps) => (
                  < CustomerOrdersItem key={order.id} order = {order} />
                ))
              }
      </div>

    </div>
    
  );
}