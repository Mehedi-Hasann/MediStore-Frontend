import { getSingleCategory } from "@/actions/admin.actions";
import AdminSingleCategoryCard from "@/components/modules/admin/AdminSingleCategoryCard";

export default async function SingleCategoryPage ({params} : {params : {slug : string}}) {
  const {slug} = await params;

  const data = await getSingleCategory(slug as string);

  return (
    
    <div>

      <AdminSingleCategoryCard data = {data} />

    </div>
    
  );
}