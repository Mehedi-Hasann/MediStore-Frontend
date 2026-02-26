"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrderProps } from "@/types/routes.type";
import Link from "next/link";


export default function CustomerOrdersItem({ order }: { order: OrderProps }) {

  return (
    <Card className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-100">
      <CardContent className="p-4 flex flex-col space-y-2">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">
            Order ID: {order.id}
          </h2>

          <Badge
            className={`
              px-3 py-1 text-xs font-medium
              ${order.status === "PENDING"
                ? "bg-yellow-600/20 text-yellow-400 border border-yellow-600"
                : "bg-green-600/20 text-green-400 border border-green-600"}
            `}
          >
            {order.status}
          </Badge>
        </div>

        {/* Body */}
        <div className="grid grid-cols-2 gap-4 text-sm">

          <div>
            <p className="text-gray-400">Quantity</p>
            <p className="text-white font-semibold">{order.quantity}</p>
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

          <div>
            <p className="text-gray-400">Shipping</p>
            <p className="text-gray-300">
              {order.shippingAddress ?? "Not Provided"}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end">
                <Link href={`/orders/${order.id}`}><Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            View Details
          </Button></Link>
        </div>

      </CardContent>
    </Card>
  );
}