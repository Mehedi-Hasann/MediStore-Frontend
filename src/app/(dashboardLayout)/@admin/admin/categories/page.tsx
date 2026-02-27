import { getAllCategory } from "@/actions/admin.actions"; 
import AdminGetAllCategoryCard from "@/components/modules/admin/AdminGetAllCategory";
export const dynamic = "force-dynamic";

export default async function AllCategoryPage () {

  const {data} = await getAllCategory();

  return (
    <div>
      <AdminGetAllCategoryCard data = {data} />
    </div>
  );
}