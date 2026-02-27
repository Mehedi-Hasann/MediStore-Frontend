
import { SellerOrderCard } from "@/components/modules/seller/SellerOrderCard";
import { medicineService } from "@/services/medicine.service";
import { Orders } from "@/types/routes.type";

export const dynamic = "force-dynamic";

export default async function OrdersPage () {
  const {data} = await medicineService.getAllOrder();
  // console.log(data);
  
  return (
    
    <div>
      <h1>seller order</h1>

      <SellerOrderCard items = {data} />
      
    </div>
    
  );
}