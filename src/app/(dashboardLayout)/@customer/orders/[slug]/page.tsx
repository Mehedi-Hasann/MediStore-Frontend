import { getMySingleOrders } from "@/actions/customer.actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default async function SingleOrder({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const response = await getMySingleOrders(slug);
  const order = response?.data.data;

  if (!order) {
    return (
      <div className="text-center text-red-500 mt-10">
        Order not found
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-100px)] bg-black p-8 text-gray-100">

      <div className="max-w-4xl mx-auto space-y-6">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-white">
          Order Details
        </h1>

        {/* Order Card */}
        <Card className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg">
          <CardContent className="p-8 space-y-6">

            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">
                Order ID : {order.id}
              </h2>

              <Badge
                className={`
                  px-3 py-1 text-xs font-medium
                  ${order.status === "PENDING"
                    ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                    : "bg-green-600/20 text-green-400 border border-green-600"}
                `}
              >
                {order.orderStatus}
              </Badge>
            </div>

            {/* Order Info Grid */}
            <div className="grid grid-cols-2 gap-6 text-sm">

              <div>
                <p className="text-gray-400">Medicine ID</p>
                <p className="text-white font-medium">
                  {order.medicineId}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Quantity</p>
                <p className="text-white font-semibold text-lg">
                  {order.quantity}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Total Amount</p>
                <p className="text-3xl font-bold text-white">
                  $ {order.totalAmount}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Created At</p>
                <p className="text-gray-300">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-gray-400">Shipping Address</p>
                <p className="text-gray-300">
                  {order.shippingAddress ?? "Not Provided"}
                </p>
              </div>

            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}