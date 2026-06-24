"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Link from "next/link";

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  // const customers = [
  //   { id: 1, name: "Mahzil Sohail", email: "mahzil@example.com", orders: 3, spent: "PKR 24,000" },
  //   { id: 2, name: "Mahnoor Sohail", email: "mahnoor@example.com", orders: 5, spent: "PKR 40,000" },
  //   { id: 3, name: "Malaika Asghar", email: "malaika@example.com", orders: 1, spent: "PKR 10,000" },
  //   { id: 4, name: "Fatima Zafar", email: "fatima@example.com", orders: 4, spent: "PKR 35,000" },

  // ];
const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.log("Fetch Error:", err));
  }, []);

  // 🔍 Search Filter
  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Customers</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <Input
              placeholder="Search customers…"
              className="w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link href="/admin/users/add">
              <Button>Add Customer</Button>
            </Link>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {(customers.filter(
                (c) => c.name.toLowerCase().includes(search.toLowerCase()) ||
                  c.email.toLowerCase().includes(search.toLowerCase())
              )).map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
