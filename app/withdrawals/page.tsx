export default function WithdrawalsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Withdrawal Management</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Withdrawals</h2>
          <p className="text-gray-600">Review and process user withdrawal requests.</p>
          <div className="mt-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900">Withdrawal Requests</h3>
              <p className="text-purple-700">Process user withdrawal requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
