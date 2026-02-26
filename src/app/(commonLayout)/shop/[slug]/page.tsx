
import AddToCartButton from "@/components/modules/customer/AddToCartButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { medicineService } from "@/services/medicine.service";

export default async function MedicinePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { data } = await medicineService.getMedicineById(slug);

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div className="space-y-3">
          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            {data.categoryName}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight">
            {data.name}
          </h1>

          <p className="text-muted-foreground text-sm">
            Medicine ID: {data.id}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-2xl font-semibold">
              ${data.price}
              <span className="text-sm font-normal text-muted-foreground">
                {" "} / unit
              </span>
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Stock</p>
            <p className="text-2xl font-semibold">
              {data.stock} Units
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Category</p>
            <p className="text-2xl font-semibold">
              {data.categoryName}
            </p>
          </div>

        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Created At</p>
            <p className="font-medium">
              {new Date(data.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="font-medium">
              {new Date(data.updatedAt).toLocaleDateString()}
            </p>
          </div>

        </div>

        {/* Action */}
        <div>
            <AddToCartButton  medicineId={data.id} />
        </div>

      </div>
    </div>
  );
}