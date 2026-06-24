"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AddUserProduct() {
  return (
    <div className="p-6">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Add Customer</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <Input placeholder="Customer Name" />
          <Input placeholder="Email" />
          <Input placeholder="Orders" />
          <Input placeholder="Total Spent" />

          <Button className="w-full mt-4">Save Customer</Button>

        </CardContent>
      </Card>
    </div>
  );
}
