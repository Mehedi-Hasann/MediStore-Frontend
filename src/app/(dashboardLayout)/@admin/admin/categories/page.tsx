import { getAllUsers } from "@/actions/admin.actions"; 
import AdminGetAllCategoryCard from "@/components/modules/admin/AdminGetAllCategory";


export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const { data } = await getAllUsers(); 

  return (
    <div>
      <AdminGetAllCategoryCard data={data} />
    </div>
  );
}