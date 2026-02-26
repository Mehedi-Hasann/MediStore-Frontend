"use client";

import { addToCart } from "@/actions/customer.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function AddToCartButton({medicineId} : {medicineId : string}) {
  
  const handleAddToCart = async() => {
    const toastId = toast.loading("Adding item to cart.....")
    try {
      await addToCart(medicineId);
      toast.success("Adding Item to Cart Successful",{id : toastId})
    } catch (error) {
      toast.error("Adding item to Card Failed")
    }
  };

  return (
    <Link href={'/cart'} className="disabled:">
        <Button onClick={() => handleAddToCart()}>
      Add to Cart
    </Button>
    </Link>
  );
}