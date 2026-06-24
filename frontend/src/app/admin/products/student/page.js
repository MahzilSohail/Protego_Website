"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function StudentProductsPage() {
  const products = [
    { id: 1, name: "Student-Model Blue", color: "Blue", price: "PKR 10,000", stock: 20, image: "/image/stdblue.jpg" },
    { id: 2, name: "Student-Model Green", color: "Emerald Green", price: "PKR 10,100", stock: 13, image: "/image/stdgreen.jpg" },
    { id: 3, name: "Student-Model Pink", color: "Rose Gold", price: "PKR 10,170", stock: 15, image: "/image/stdpink.jpg" },
    { id: 4, name: "Student-Model Silver", color: "Silver", price: "PKR 10,230", stock: 15, image: "/image/stdwhite.jpg" },
    { id: 5, name: "Student-Model Brown", color: "Royal Brown", price: "PKR 10,000", stock: 10, image: "/image/stdbrown.jpg" },

  ];

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Student Products</CardTitle>
          <Link href="/admin/products/student/add">
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
                    <Link href={`/admin/products/student/edit/${item.id}`}>
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
