export default function ProfilePage() {
  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl">
        <h2 className="text-lg font-medium mb-4">Your Information</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Admin Name" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input type="email" className="w-full border p-2 rounded" placeholder="admin@example.com" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input type="password" className="w-full border p-2 rounded" placeholder="********" />
          </div>

          <button className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
