'use client';

import { useState } from 'react';

const mockCart = [
  {
    id: '1',
    name: 'Test Product 1',
    price: 99.99,
    quantity: 1,
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Test Product 2',
    price: 149.99,
    quantity: 2,
    thumbnail: 'https://via.placeholder.com/150',
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(mockCart);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img src={item.thumbnail} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  className="w-16 border rounded-md px-2 py-1 text-center"
                  readOnly
                />
                <button className="ml-4 text-red-500">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(total + 10).toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-500 text-white rounded-md py-2 mt-4">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}