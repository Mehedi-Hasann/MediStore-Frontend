"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CreateReview, MedicinePost } from "@/types/routes.type";
import Link from "next/link";
import { useState } from "react";
import { createReview } from "@/actions/customer.actions";

type Props = {
  item: MedicinePost;
};

export default function MedicineCards({ item }: Props) {

  const [description, setDescription] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    console.log("Current Review:", e.target.value); 
  };

  const handleAddReview = async() => {
    console.log(description);
    const medicineId = item.id;
    const res = await createReview({medicineId, description} as CreateReview);
    console.log("Value received from shop => ",res);
    
    setDescription(""); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
            <Badge variant="secondary">{item.categoryName}</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Price : </span> ${item.price}{" "}
              <span className="font-medium"> / unit </span>
            </p>
            <p>
              <span className="font-medium">Stock : </span> {item.stock}
            </p>
          </div>

          <Link href={`/shop/${item.id}`}>
            <Button className="w-full rounded-xl">View Details</Button>
          </Link>


          {/* Add New Review */}
          <div className="mt-4 space-y-2">
            <textarea
              value={description}
              onChange={handleChange}
              placeholder="Write your review..."
              className="w-full p-2 border rounded-md text-sm"
            />
            <Button onClick={handleAddReview} className="w-full">
              Submit Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}