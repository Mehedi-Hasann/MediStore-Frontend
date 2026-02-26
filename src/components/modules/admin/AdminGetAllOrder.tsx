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

export function AdminOrderCard({ items }: { items: Order[] }) {

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
        {items.length === 0 && (
          <TableRow>
            <TableCell colSpan={8} className="text-center py-6">
              No Orders Found
            </TableCell>
          </TableRow>
        )}

        {items.map((item) => {


          return (
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
                ${item.totalAmount.toFixed(2)}
              </TableCell>

            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}