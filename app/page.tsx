export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          EasyEarn Admin Panel
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Admin Panel</h2>
          <p className="text-gray-600">
            This is the main dashboard for managing the EasyEarn application.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900">Users</h3>
              <p className="text-blue-700">Manage user accounts and referrals</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900">Deposits</h3>
              <p className="text-green-700">Review and approve deposits</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900">Withdrawals</h3>
              <p className="text-purple-700">Process withdrawal requests</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
