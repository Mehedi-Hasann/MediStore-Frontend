import { getAllUsers } from "@/actions/admin.actions"; 
import AdminGetAllCategoryCard from "@/components/modules/admin/AdminGetAllCategory";

// এটা দাও, dynamic rendering force করার জন্য
export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const { data } = await getAllUsers(); // session/cookies ব্যবহার করে fetch

  return (
    <div>
      <AdminGetAllCategoryCard data={data} />
    </div>
  );
}