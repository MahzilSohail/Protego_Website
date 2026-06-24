export default function CouponsPage() {
  return (
    <div className="mx-16 p-6">
      <h1 className="text-2xl font-semibold mb-6">Coupons & Discounts</h1>

      <div className="bg-white p-6 rounded shadow ">
        <h2 className="text-lg font-medium mb-4">Create Coupon</h2>

        <div className="space-y-4">
          <input type="text" className="w-full border p-2 rounded" placeholder="Coupon Code" />
          <input type="number" className="w-full border p-2 rounded" placeholder="Discount %" />

          <input type="date" className="w-full border p-2 rounded" />

          <button className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-700">
            Add Coupon
          </button>
        </div>
      </div>

      {/* List */}
      <div className="bg-white p-6 rounded shadow mt-8">
        <h2 className="text-lg font-medium mb-4">Active Coupons</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Code</th>
              <th className="p-2">Discount</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">WELCOME10</td>
              <td className="p-2">10%</td>
              <td className="p-2">
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
