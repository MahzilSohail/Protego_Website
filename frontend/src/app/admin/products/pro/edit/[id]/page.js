"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function EditProProduct({ params }) {
  const { id } = params;

  return (
    <div className="p-6">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Pro Product #{id}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input placeholder="Product Name" defaultValue="Protego Pro" />
          <Input placeholder="Price" defaultValue="18000" />
          <Input placeholder="Stock" defaultValue="10" />
          <Input placeholder="Image URL" />

          <Button className="w-full mt-4">Update Product</Button>
        </CardContent>
      </Card>
    </div>
  );
}
