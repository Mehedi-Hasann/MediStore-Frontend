import { getAllCategory } from "@/actions/admin.actions"; 
import AdminGetAllCategoryCard from "@/components/modules/admin/AdminGetAllCategory";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const { data } = await getAllCategory(); 

  return (
    <div>
      <Link href={'categories/create-category'}><Button className="mx-auto flex justify-center items-center w-3/12">Add Category</Button></Link>
      <AdminGetAllCategoryCard data={data.data} />
    </div>
  );
}