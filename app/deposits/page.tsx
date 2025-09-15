export default function DepositsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Deposit Management</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Pending Deposits</h2>
          <p className="text-gray-600">Review and approve user deposit requests.</p>
          <div className="mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900">Deposit Requests</h3>
              <p className="text-green-700">Review and approve $10 deposit requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
