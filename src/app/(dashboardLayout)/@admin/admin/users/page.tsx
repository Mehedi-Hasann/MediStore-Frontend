import { getAllUsers } from "@/actions/admin.actions";
import AdminGetAllUsers from "@/components/modules/admin/AdminGetAllUsers";
import { UserType } from "@/types/routes.type";

export default async function AllUsersPage () {

  const {data} = await getAllUsers();
  // console.log(data.data);
  
  return (
    
    <div>

      <AdminGetAllUsers users = {data.data} />

    </div>
    
  );
}