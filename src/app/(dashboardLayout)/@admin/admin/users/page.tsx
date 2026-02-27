import { getAllUsers } from "@/actions/admin.actions";
import AdminGetAllUsers from "@/components/modules/admin/AdminGetAllUsers";
export const dynamic = "force-dynamic";

export default async function AllUsersPage () {

  const {data} = await getAllUsers();
  // console.log(data.data);
  
  return (
    
    <div>

      <AdminGetAllUsers users = {data.data} />

    </div>
    
  );
}