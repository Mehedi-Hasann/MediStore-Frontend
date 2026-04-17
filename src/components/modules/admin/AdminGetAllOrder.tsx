"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Order } from "@/types/routes.type"

type ApiResponse = {
  success: boolean
  message: string
  data: Order[]
}

export function AdminOrderCard({ items }: { items: ApiResponse }) {
  const orders = items?.data ?? []

  return (
    <Table>
      <TableCaption>A list of your recent orders.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Medicine ID</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders.length === 0 && (
          <TableRow>
            <TableCell colSpan={6} className="text-center py-6">
              No Orders Found
            </TableCell>
          </TableRow>
        )}

        {orders.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium break-all">
              {item.id}
            </TableCell>

            <TableCell className="break-all">
              {item.medicineId}
            </TableCell>

            <TableCell>{item.quantity}</TableCell>

            <TableCell>{item.status}</TableCell>

            <TableCell>
              {item.createdAt
                ? new Date(item.createdAt).toLocaleString()
                : ""}
            </TableCell>

            <TableCell className="text-right font-semibold">
              ${Number(item.totalAmount).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}