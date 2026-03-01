
import { getAllMedicine } from "@/actions/medicine.actions";
import MedicineCards from "@/components/modules/home/MedicineCard";
import { medicineService } from "@/services/medicine.service";
import { MedicinePost } from "@/types/routes.type";

export default async function Home() {

  const {data} = await getAllMedicine();

  
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
      {
        data?.data?.map((item : MedicinePost) => (
        <MedicineCards key={item.id} item = {item} />
      )) 
      }
    </div>
  );
}
