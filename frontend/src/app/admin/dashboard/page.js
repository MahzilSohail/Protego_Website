import StatsCard from "@/components/admin/StatsCard";
import RecentOrders from "@/components/admin/RecentOrders";
import ChartCard from "@/components/admin/ChartCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Orders" value="1,245" />
        <StatsCard title="Revenue" value="Rs. 480,000" />
        <StatsCard title="Customers" value="835" />
        <StatsCard title="Products" value="42" />
      </div>

      <ChartCard title="Monthly Sales" />
      <RecentOrders />
    </div>
  );
}
