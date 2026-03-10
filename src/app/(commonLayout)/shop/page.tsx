import { getAllCategory } from "@/actions/admin.actions";
import { getAllMedicine } from "@/actions/medicine.actions";
import MedicineCards from "@/components/modules/home/MedicineCard";
import { MedicinePost } from "@/types/routes.type";

export interface Props {
  search?: string;
  category?: string;
  price?: string;
}

export default async function Home({ searchParams}: {searchParams: Promise<Props> }) {

  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "";
  const price = params?.price || "";


  const { data } = await getAllMedicine({ search, category, price });
  const { data: categoryData } = await getAllCategory();


  return (
    <div>
<form className="flex items-center justify-center gap-4 my-6">

  <input
    name="search"
    defaultValue={search}
    placeholder="Enter Medicine Name"
    className="border p-2 rounded-md"
  />

  <select
    name="category"
    defaultValue={category}
    className="border p-2 rounded-md bg-black text-white"
  >
    <option value="">All Categories</option>

    {categoryData?.map((cat: any) => (
      <option key={cat.id} value={cat.categoryName}>
        {cat.categoryName}
      </option>
    ))}

  </select>

  <input
    name="price"
    defaultValue={price}
    placeholder="Enter Price"
    className="border p-2 rounded-md"
  />

  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded-md"
  >
    Search
  </button>

</form>

      <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
        {data?.data?.map((item: MedicinePost) => (
          <MedicineCards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}