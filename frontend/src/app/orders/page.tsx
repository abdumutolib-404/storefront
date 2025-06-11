'use client';

const mockOrders = [
  {
    id: '1',
    orderNumber: 'ORD-12345',
    date: '2023-10-27',
    total: 249.98,
    status: 'Delivered',
  },
  {
    id: '2',
    orderNumber: 'ORD-67890',
    date: '2023-10-25',
    total: 99.99,
    status: 'Shipped',
  },
];

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Your Orders</h1>
      <div className="max-w-4xl mx-auto">
        {mockOrders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Order #{order.orderNumber}</h2>
                <p className="text-gray-500">Date: {order.date}</p>
              </div>
              <div>
                <p className="font-semibold">${order.total.toFixed(2)}</p>
                <p className="text-right text-sm text-gray-500">{order.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}