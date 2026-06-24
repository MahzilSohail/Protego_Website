export default function NotificationsPage() {
  return (
    <div className="ml-44 p-6">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>

      <div className="space-y-4 max-w-xl">
        <div className="bg-white p-4 rounded shadow">
          <p>New order received from User #24</p>
          <span className="text-sm text-gray-500">2 hours ago</span>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>Low stock alert for Protego Pro</p>
          <span className="text-sm text-gray-500">Yesterday</span>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>New customer joined the store</p>
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
      </div>
    </div>
  );
}
