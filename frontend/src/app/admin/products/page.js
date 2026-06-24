"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ProductsPage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <Link href="/admin/products/pro">
        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Pro Products</CardTitle>
          </CardHeader>
          <CardContent>
            Manage all Pro category products.
          </CardContent>
        </Card>
      </Link>

      <Link href="/admin/products/lite">
        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Lite Products</CardTitle>
          </CardHeader>
          <CardContent>
            Manage all Lite category products.
          </CardContent>
        </Card>
      </Link>

      <Link href="/admin/products/student">
        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Student Products</CardTitle>
          </CardHeader>
          <CardContent>
            Manage all Student category products.
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
