'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(10),
  city: z.string().min(2),
  state: z.string().min(2),
  postalCode: z.string().min(5),
  country: z.string().min(2),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle Payme payment logic here
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input {...register('firstName')} className="w-full border rounded-md px-3 py-2" />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input {...register('lastName')} className="w-full border rounded-md px-3 py-2" />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input {...register('address')} className="w-full border rounded-md px-3 py-2" />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">City</label>
            <input {...register('city')} className="w-full border rounded-md px-3 py-2" />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">State</label>
            <input {...register('state')} className="w-full border rounded-md px-3 py-2" />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Postal Code</label>
            <input {...register('postalCode')} className="w-full border rounded-md px-3 py-2" />
            {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input {...register('country')} className="w-full border rounded-md px-3 py-2" />
          {errors.country && <p className="text-red-500">{errors.country.message}</p>}
        </div>
        <button type="submit" className="w-full bg-green-500 text-white rounded-md py-2">
          Pay with Payme
        </button>
      </form>
    </div>
  );
}