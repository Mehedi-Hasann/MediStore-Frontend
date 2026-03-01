
import { SellerOrderCard } from "@/components/modules/seller/SellerOrderCard";
import { medicineService } from "@/services/medicine.service";

export const dynamic = "force-dynamic";

export default async function OrdersPage () {
  const {data} = await medicineService.getAllOrder();
  
  return (
    
    <div>

      <SellerOrderCard items = {data} />
      
    </div>
    
  ); 
}