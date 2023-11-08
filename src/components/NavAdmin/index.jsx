"use client"
import Link from 'next/link';
import React from 'react';

const NavAdmin = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-semibold">Admin Dashboard</div>
        <div className="flex space-x-4">
          <Link href={""}
            className={`text-white hover:text-gray-300 focus:outline-none ${
              activeTab === 'messages' ? 'font-bold' : ''
            }`}
            onClick={() => setActiveTab('messages')}
          >
            Pesan
          </Link>
          <Link href={""}
            className={`text-white hover:text-gray-300 focus:outline-none ${
              activeTab === 'view' ? 'font-bold' : ''
            }`}
            onClick={() => setActiveTab('view')}
          >
            Lihat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
