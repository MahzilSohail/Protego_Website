"use client";

import { useEffect, useState } from "react";

export default function OrdersTable() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const res = await fetch("http://localhost:3001/orders");

        if (!res.ok) {
          console.error("Failed to fetch orders");
          return;
        }

        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Error loading orders:", err);
      }
    }

    loadOrders();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">All Orders</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500 border-b">
            <tr>
              <th className="py-2">#</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {items.map((o) => (
              <tr key={o.id} className="border-b">
                <td className="py-3">{o.id}</td>
                <td>{o.customer}</td>
                <td>Rs. {o.amount}</td>
                <td className="text-sm">{o.status}</td>

                <td className="text-sm text-gray-600">
                  {new Date(o.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
