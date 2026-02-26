import { getMyCart } from "@/actions/customer.actions";
import CustomerCartItem from "@/components/modules/customer/CustomerCartItem";
import { env } from "@/env";
import { CartItemProps } from "@/types/routes.type";

const API_URL = env.API_URL;

export default async function CartPage () {

  const {data} = await getMyCart();
  
  const enrichedCartItem = await Promise.all(
    data.map(async (item : CartItemProps) => {
      const res = await fetch(`${API_URL}/api/medicines/${item.medicineId}`);
      const medicine = await res.json();
      return {...item, medicine}
    })
  )
  
  return (
    
    <div>
      <div className="grid grid-cols-2 gap-5">
          {
              enrichedCartItem?.map((item : CartItemProps) => (
                  < CustomerCartItem key={item.id} item = {item}/>
              ))
          }
      </div>

    </div>
    
  );
}