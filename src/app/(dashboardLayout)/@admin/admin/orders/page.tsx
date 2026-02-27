

import { AdminOrderCard } from "@/components/modules/admin/AdminGetAllOrder";
import { adminService } from "@/services/admin.service";
import { getSession } from "better-auth/api";
export const dynamic = "force-dynamic";

export default async function OrdersPage () {
  const {data} = await adminService.getAllOrder();

  const session = await getSession();
  console.log(session);
  
  return (
    
    <div>

      <AdminOrderCard items = {data} />
      
    </div>
    
  );
}