

import { AdminOrderCard } from "@/components/modules/admin/AdminGetAllOrder";
import { adminService } from "@/services/admin.service";


export default async function OrdersPage () {
  const {data} = await adminService.getAllOrder();
  // console.log(data);
  
  return (
    
    <div>

      <AdminOrderCard items = {data} />
      
    </div>
    
  );
}