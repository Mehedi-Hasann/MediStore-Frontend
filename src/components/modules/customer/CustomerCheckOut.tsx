"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createMyAddress, createMyOrder, getMyAddress, getMySingleCart, removeCartItem } from "@/actions/customer.actions";
import { toast } from "sonner";
import Link from "next/link";
import { Order } from "@/types/routes.type";

interface AddressProps {
    slug: string;
    address?: {
        fullName?: string;
        phone?: string;
        city?: string;
    };
}

export default function AddressForm({slug, address }: AddressProps) {


  
  const [fullName, setFullName] = useState(address?.fullName || "");
  const [phone, setPhone] = useState(address?.phone || "");
  const [city, setCity] = useState(address?.city || "");


  const handleOnSubmit = async() => {
    const addressData = {fullName,phone,city};
    const toastId = toast.loading("Creating Address...")
    try {
      const res = await createMyAddress(addressData);
      const addressId = res.data.id;
      const res2 = await getMySingleCart(slug);
      const quantity = res2.data.quantity;
      const medicineId = res2.data.medicineId;
      
      const orderData = {medicineId, quantity, addressId};
      
      await createMyOrder(orderData as Order);
      await removeCartItem(slug);
    
      toast.success("Address created Successfully.",{id : toastId});
      toast.success("Your cart item is now in the Order list!.",{id : toastId});
      
    } catch (error) {
      toast.error("Internal Server Error",{id : toastId})
    }
  }
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto">

        <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Provide Your Address
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-zinc-400">
              Full Name
            </Label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Name"
              className="bg-zinc-800 border-zinc-700 focus:border-white focus:ring-0"
            />
          </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-zinc-400">
                  Phone Number
                </Label>
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  defaultValue={address?.phone}
                  placeholder="01XXXXXXXXX"
                  className="bg-zinc-800 border-zinc-700 focus:border-white focus:ring-0"
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label htmlFor="city" className="text-zinc-400">
                  City
                </Label>
                <Input
                  onChange={(e) => setCity(e.target.value)}
                  id="city"
                  defaultValue={address?.city}
                  placeholder="Dhaka"
                  className="bg-zinc-800 border-zinc-700 focus:border-white focus:ring-0"
                />
              </div>

<Link href={'/orders'}>              <Button onClick={() => handleOnSubmit()} className="w-full bg-white text-black hover:bg-zinc-200 font-medium">
                Save Address
              </Button></Link>

            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}