'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await api.post('/auth/register', data);
      router.push('/auth/login?registered=true');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input {...register('firstName')} className="w-full border rounded-md px-3 py-2" />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input {...register('lastName')} className="w-full border rounded-md px-3 py-2" />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input {...register('email')} className="w-full border rounded-md px-3 py-2" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register('password')}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2">
          Register
        </button>
      </form>
    </div>
  );
}