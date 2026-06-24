import ChartCard from "@/components/admin/ChartCard";

export default function AnalyticsPage() {
    return (
        <div className="mx-16 p-6">
            <h1 className="text-2xl font-semibold mb-6">Analytics & Reports</h1>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-medium">Total Sales</h3>
                    <p className="text-2xl font-bold mt-2">PKR 120,450</p>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-medium">Orders This Month</h3>
                    <p className="text-3xl font-bold mt-2">148</p>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg font-medium">New Customers</h3>
                    <p className="text-3xl font-bold mt-2">37</p>
                </div>
            </div>


            <div className="bg-white p-6 mt-8 rounded shadow">
                <h2 className="text-lg font-medium">Sales Chart</h2>
                <div className="p-6 mt-8">
                    <ChartCard title="Monthly Sales" />
                </div>

            </div>
        </div>
    );
}
