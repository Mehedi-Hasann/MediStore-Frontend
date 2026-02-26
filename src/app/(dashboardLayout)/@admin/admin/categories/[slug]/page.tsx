import { getSingleCategory } from "@/actions/admin.actions";
import AdminSingleCategoryCard from "@/components/modules/admin/AdminSingleCategoryCard";

export default async function SingleCategoryPage ({params} : {params : {slug : string}}) {
  const {slug} = await params;
  console.log(slug);
  const data = await getSingleCategory(slug as string);
  console.log(data);
  return (
    
    <div>

      <AdminSingleCategoryCard data = {data} />

    </div>
    
  );
}