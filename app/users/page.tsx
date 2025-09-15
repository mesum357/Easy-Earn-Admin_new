export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">User Management</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">All Users</h2>
          <p className="text-gray-600">Manage user accounts, referrals, and balances.</p>
          <div className="mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900">User List</h3>
              <p className="text-blue-700">View and manage all registered users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
