import AddToCartButton from "@/components/modules/customer/AddToCartButton";
import { Badge } from "@/components/ui/badge";
import { medicineService } from "@/services/medicine.service";

interface Review {
  id: string;
  description: string;
  createdAt: string;
}

export default async function MedicinePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { data } = await medicineService.getMedicineById(slug);
  // console.log('exprected => ',data);

  return (
    <div className="min-h-[calc(100vh-75px)] bg-background text-foreground px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div className="space-y-3">
          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            {data.data.categoryName}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight">
            {data.data.name}
          </h1>

          <p className="text-muted-foreground text-sm">
            Medicine ID: {data.data.id}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-2xl font-semibold">
              ${data.data.price}
              <span className="text-sm font-normal text-muted-foreground">
                {" "} / unit
              </span>
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Stock</p>
            <p className="text-2xl font-semibold">
              {data.data.stock} Units
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Category</p>
            <p className="text-2xl font-semibold">
              {data.data.categoryName}
            </p>
          </div>

        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Created At</p>
            <p className="font-medium">
              {new Date(data.data.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="font-medium">
              {new Date(data.data.updatedAt).toLocaleDateString()}
            </p>
          </div>

        </div>

        {/* Action */}
        <div>
          <AddToCartButton medicineId={data.data.id} />
        </div>

        {/* Reviews Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>

          <div className="space-y-4">
            {data.data.reviews && data.data.reviews.length > 0 ? (
              data.data.reviews.map((review: Review) => (
                <div
                  key={review.id}
                  className="bg-card text-card-foreground p-5 rounded-2xl border shadow-sm"
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-base">
                    {review.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-card text-card-foreground p-5 rounded-2xl border shadow-sm text-muted-foreground">
                No reviews yet
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}