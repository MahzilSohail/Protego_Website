import OrdersTable from "@/components/admin/OrdersTable";

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <OrdersTable />
    </div>
  );
}
