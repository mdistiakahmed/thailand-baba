// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from './components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ThailandBaba - Your Thailand Travel Guide',
  description: 'Comprehensive travel guide for Thailand including travel tips, language basics, and local insights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}