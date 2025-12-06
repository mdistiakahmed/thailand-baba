// app/components/Layout/index.tsx
'use client';

import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaMapMarkedAlt, FaLanguage, FaBriefcaseMedical, FaUtensils, FaLandmark } from 'react-icons/fa';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome className="w-5 h-5" /> },
    { name: 'Destinations', href: '/destinations', icon: <FaMapMarkedAlt className="w-5 h-5" /> },
    { name: 'Language Guide', href: '/language', icon: <FaLanguage className="w-5 h-5" /> },
    { name: 'Health & Safety', href: '/health', icon: <FaBriefcaseMedical className="w-5 h-5" /> },
    { name: 'Local Cuisine', href: '/cuisine', icon: <FaUtensils className="w-5 h-5" /> },
    { name: 'Culture', href: '/culture', icon: <FaLandmark className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-indigo-800 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-indigo-700">
          <div className="flex items-center">
            <span className="text-xl font-bold">ThailandBaba</span>
          </div>
          <button
            className="p-2 rounded-md text-white hover:bg-indigo-700 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-6">
          <div className="px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-sm font-medium text-indigo-100 hover:bg-indigo-700 hover:text-white rounded-md group"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar - Updated with justify-between */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 h-14">
            <div className="flex items-center justify-between h-full">
              {/* Left side - Menu button */}
              <div className="flex items-center">
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <FaBars className="w-6 h-6" />
                </button>
              </div>
              
              {/* Right side - Logo and Slogan */}
              <div className="flex items-center">
                <span className="text-xl font-bold text-indigo-600">ThailandBaba</span>
                <span className="ml-2 text-sm text-gray-500 hidden sm:inline">Your Thailand Travel Guide</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}