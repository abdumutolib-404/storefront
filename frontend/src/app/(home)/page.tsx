'use client';

import useSWR from 'swr';
import api from '@/lib/api';
import { Product } from '@/types';
import Link from 'next/link';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export default function HomePage() {
  const { data, error } = useSWR<{ products: Product[] }>('/products', fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id}>
            <div className="border rounded-lg overflow-hidden">
              <img src={product.thumbnail} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}