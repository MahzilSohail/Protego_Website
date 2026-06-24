"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AddProProduct() {
  return (
    <div className="p-6">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Add Pro Product</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <Input placeholder="Product Name" />
          <Input placeholder="Colour" />
          <Input placeholder="Price" />
          <Input placeholder="Stock Quantity" />
          <Input type="file" accept="image" />

          <Button className="w-full mt-4">Save Product</Button>

        </CardContent>
      </Card>
    </div>
  );
}
