"use client"
import React from 'react';

const NavAdmin = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-semibold">Admin Dashboard</div>
        <div className="flex space-x-4">
          <button
            className={`text-white hover:text-gray-300 focus:outline-none ${
              activeTab === 'messages' ? 'font-bold' : ''
            }`}
            onClick={() => setActiveTab('messages')}
          >
            Pesan
          </button>
          <button
            className={`text-white hover:text-gray-300 focus:outline-none ${
              activeTab === 'view' ? 'font-bold' : ''
            }`}
            onClick={() => setActiveTab('view')}
          >
            Lihat
          </button>
          <button
            className={`text-white hover:text-gray-300 focus:outline-none ${
              activeTab === 'home' ? 'font-bold' : ''
            }`}
            onClick={() => setActiveTab('home')}
          >
            home
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
