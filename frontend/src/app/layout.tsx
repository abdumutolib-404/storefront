import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { AuthProvider } from '@/contexts/AuthContext';
import AuthNav from '@/components/AuthNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'A modern e-commerce application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <header className="border-b">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold">
                E-commerce
              </Link>
              <nav>
                <Link href="/cart" className="mr-4">
                  Cart
                </Link>
                <Link href="/orders" className="mr-4">
                  Orders
                </Link>
                <AuthNav />
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t mt-12 py-8 text-center text-gray-500">
            <p>&copy; 2024 E-commerce. All rights reserved.</p>
          </footer>
        </body>
      </AuthProvider>
    </html>
  );
}
