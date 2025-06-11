'use client';

import useSWR from 'swr';
import api from '@/lib/api';
import { Product } from '@/types';
import { useParams } from 'next/navigation';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  const { data, error } = useSWR<Product>(slug ? `/products/slug/${slug}` : null, fetcher);

  if (error) return <div>Failed to load product</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={data.images[0]} alt={data.name} className="w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-2xl text-gray-500 my-4">${data.price}</p>
          <p className="text-gray-700">{data.description}</p>
          {/* Add to cart button will be implemented later */}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Reviews</h2>
        {/* Reviews section will be implemented later */}
      </div>
    </div>
  );
}