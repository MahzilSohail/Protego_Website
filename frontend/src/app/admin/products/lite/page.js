"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function LiteProductsPage() {
  const products = [
    { id: 1, name: "Lite-Model Blue", color: "Blue", price: "PKR 14,000", stock: 20, image: "/image/liteblue.jpg" },
    { id: 2, name: "Lite-Model Green", color: "Emerald Green", price: "PKR 14,100", stock: 13, image: "/image/litegreen.jpg" },
    { id: 3, name: "Lite-Model Pink", color: "Rose Gold", price: "PKR 14,170", stock: 15, image: "/image/litepink.jpg" },
    { id: 4, name: "Lite-Model Silver", color: "Silver", price: "PKR 14,230", stock: 15, image: "/image/litewhite.jpg" },
    { id: 5, name: "Lite-Model Brown", color: "Royal Brown", price: "PKR 14,000", stock: 10, image: "/image/litebrown.jpg" },

  ];

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Lite Products</CardTitle>
          <Link href="/admin/products/lite/add">
            <Button>Add Product</Button>
          </Link>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Colour</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.color}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-16 h-full object-cover rounded" />
                    ) : (
                      "No Image"
                    )}
                  </TableCell>
                  <TableCell>
                    <Link href={`/admin/products/lite/edit/${item.id}`}>
                      <Button size="sm" className="mr-2">Edit</Button>
                    </Link>
                    <Button size="sm" variant="destructive">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
