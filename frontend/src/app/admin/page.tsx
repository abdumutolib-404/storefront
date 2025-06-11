'use client';

import useSWR from 'swr';
import api from '@/lib/api';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export default function AdminDashboardPage() {
  const { data, error } = useSWR('/admin/dashboard', fetcher);

  if (error) return <div>Failed to load dashboard</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total Sales</h2>
          <p className="text-3xl font-bold">${data.totalSales.toFixed(2)}</p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold">{data.totalOrders}</p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">{data.totalUsers}</p>
        </div>
      </div>
    </div>
  );
}