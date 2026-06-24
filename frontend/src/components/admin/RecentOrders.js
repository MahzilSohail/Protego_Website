"use client";

export default function RecentOrders() {
  const orders = [
    { id: 101, customer: "Ali", total: 35000, status: "Delivered" },
    { id: 102, customer: "Sara", total: 29000, status: "Pending" },
    { id: 103, customer: "Uzair", total: 25000, status: "Shipped" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h4 className="font-semibold mb-4">Recent Orders</h4>
      <ul className="space-y-3">
        {orders.map((o) => (
          <li key={o.id} className="flex justify-between items-center">
            <div>
              <div className="font-medium">#{o.id} — {o.customer}</div>
              <div className="text-sm text-gray-500">Rs. {o.total}</div>
            </div>
            <div className="text-sm text-green-600">{o.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
