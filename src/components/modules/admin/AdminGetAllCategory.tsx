"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Category {
  id: string;
  categoryName: string;
  description: string | null;
}

interface Props {
  data: Category[];
}

export default function AdminGetAllCategoryCard({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data.map((category) => (
        <Card key={category.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {category.categoryName}
            </CardTitle>
<CardDescription>ID : {category.id}</CardDescription>
          </CardHeader>
          <CardContent className="gap-y-5">
            <p>{category.description || "No description available"}</p>
          </CardContent>
            <div className="flex justify-end pr-2 pt-2 border-t">
<Link href={`/admin/categories/${category.categoryName}`}>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Show Details
              </Button>
</Link>
            </div>
        </Card>
      ))}
    </div>
  );
}