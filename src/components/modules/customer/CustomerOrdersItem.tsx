"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrderProps, OrderStatus, PaymentStatus } from "@/types/routes.type";
import Link from "next/link";

export default function CustomerOrdersItem({ order }: { order: OrderProps }) {

  return (
    <Card className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-100">
      <CardContent className="p-4 flex flex-col space-y-2">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">
            Medicine Name : {order.medicine.name}
          </h2>
          

          <Badge
            className={`
              px-3 py-1 text-xs font-medium
              ${order.orderStatus === OrderStatus.CONFIRMED
                ? "bg-green-600/20 text-green-400 border border-green-600"
                : "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
              }
            `}
          >
            {order.orderStatus}
          </Badge>
        </div>

        {/* Body */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          <div>
            <p className="text-gray-400">Quantity</p>
            <p className="text-white font-semibold">{order.quantity}</p>
          </div>
          <div>
            <p className="text-gray-400">Unit Price</p>
            <p className="text-white font-semibold">
              $ {order.medicine?.price ?? 0}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Total Amount</p>
            <p className="text-2xl font-bold text-white">
              $ {order.totalAmount}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Created</p>
            <p className="text-gray-300">
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>


          {/* ✅ NEW: Category */}
          <div>
            <p className="text-gray-400">Category</p>
            <p className="text-gray-300">
              {order.medicine?.categoryName ?? "N/A"}
            </p>
          </div>


          <div>
            <p className="text-gray-400">Payment</p>
            <Badge
              className={`
                px-2 py-1 text-xs
                ${order.paymentStatus === PaymentStatus.PAID
                  ? "bg-blue-600/20 text-blue-400 border border-blue-600"
                  : "bg-red-600/20 text-red-400 border border-red-600"
                }
              `}
            >
              {order.paymentStatus}
            </Badge>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <Link href={`/orders/${order.id}`}>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              View Details
            </Button>
          </Link>
        </div>

      </CardContent>
    </Card>
  );
}