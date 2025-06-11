'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function AuthNav() {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <>
        <span className="mr-4">Welcome, {user.firstName}</span>
        <button onClick={logout}>Logout</button>
      </>
    );
  }

  return <Link href="/auth/login">Login</Link>;
}