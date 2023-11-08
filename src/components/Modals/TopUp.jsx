'use client'
import React, { useState } from 'react';
import Modals from '.';

const TopUp = () => {
const [amount, setAmount] = useState('');
const [catatan, setCatatan] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the server)
    console.log('Top up request submitted:', { amount, catatan });
    // Reset form fields
    setAmount('');
    setCatatan('');
  };



return (

        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Pengajuan Top Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Jumlah Top Up</label>
                    <input type="number"
                        className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Masukkan jumlah top up" value={amount} onChange={(e)=> setAmount(e.target.value)}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Catatan</label>
                    <input type="text"
                        className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Masukkan catatan" value={catatan} onChange={(e)=> setCatatan(e.target.value)}
                    required
                    />
                </div>
                <button type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200">
                    Ajukan Top Up
                </button>
            </form>
        </div>

);
};

export default TopUp;