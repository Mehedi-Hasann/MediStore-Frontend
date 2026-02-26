"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { CartItemProps } from "@/types/routes.type";
import { toast } from "sonner";
import { decrementItem, incrementItem, removeCartItem } from "@/actions/customer.actions";
import Link from "next/link";

export default function CustomerCartItem({ item }: { item: CartItemProps }) {
  const totalPrice = item.quantity * (item.medicine?.price ?? 0);

  const increaseItem = async(medicineId : string) => {
    try {
      console.log(medicineId);
      const toastId = toast.loading("Item incrementing...");
      // console.log(item);
      await incrementItem(medicineId);

      toast.success("Item Increment Successful",{id : toastId})
      
    } catch (error) {
      toast.error("Internal Server Error")
    }
  }
  const decreaseItem = async(medicineId : string) => {
    try {
      const toastId = toast.loading("Item decrementing...");
      const res = await decrementItem(medicineId);
      if(res.data===null){
        return toast.error("Item can not be Negative",{id : toastId});
      }

      toast.success("Item Decrement Successful",{id : toastId})
      
    } catch (error) {
      // console.log(res.e);
      toast.error("Internal Server Error")
    }
  }
  const remoteCartItem = async(id : string) => {
    try {
      const toastId = toast.loading("Item removing...");
      await removeCartItem(id);
      toast.success("Item Remove Successful",{id : toastId})
    } catch (error) {
      toast.error("Internal Server Error")
    }
  }
  

  return (
    <Card className="rounded-2xl border border-gray-800 bg-gray-900 text-gray-100 shadow-md hover:shadow-lg hover:border-gray-700 transition-all duration-300">
      <CardContent className="p-6 flex items-center justify-between">

        {/* LEFT - Medicine Info */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-white">
            {item.medicine?.name}
          </h2>

          <p className="text-sm text-gray-400">
            Category: {item.medicine?.categoryName}
          </p>

          <p className="text-xs text-gray-500">
            Added: {new Date(item.createdAt ?? Date.now()).toLocaleDateString()}
          </p>
        </div>

        {/* MIDDLE - Price & Quantity Control */}
        <div className="flex flex-col items-center space-y-4">

          <div className="text-center">
            <p className="text-xs text-gray-500">Unit Price</p>
            <p className="font-medium text-gray-200">
              $ {item.medicine?.price}
            </p>
          </div>

          {/* Quantity Control */}
          <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">

            <Button
              onClick={() => decreaseItem(item.medicineId)}
              size="icon"
              variant="ghost"
              className="rounded-none text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Minus  size={16} />
            </Button>

            <div className="px-4 py-1 text-white font-semibold text-lg bg-gray-800">
              {item.quantity}
            </div>

            <Button
              onClick={() => increaseItem(item.medicineId)}
              size="icon"
              variant="ghost"
              className="rounded-none text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Plus  size={16} />
            </Button>

          </div>

        </div>

        {/* RIGHT - Total & Remove */}
        <div className="flex flex-col items-end space-y-4">
          <div className="text-right">
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-2xl font-bold text-white">
              $ {totalPrice}
            </p>
          </div>

          <Button
            onClick={() => remoteCartItem(item.id)}
            variant="outline"
            size="sm"
            className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition"
          >
            <Trash2 size={16} className="mr-2" />
            Remove
          </Button>

<Link href={`/cart/${item.id}`}>
          <Button
            variant="outline"
            size="sm"
            className= "border-green-500 text-green-500 hover:bg-green-600 hover:text-green-500 transition"
            >    
            Order Now
          </Button>
</Link>

        </div>

      </CardContent>
    </Card>
  );
}