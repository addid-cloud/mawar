import React, { useState } from 'react';

const Lapor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data laporan ke server atau lakukan logika pengiriman data di sini
    console.log('Data laporan:', { name, email, message });
    // Reset formulir
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className=" max-w-md  mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Formulir Laporan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Nama</label>
          <input
            type="text"
            className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-500"
            placeholder="Masukkan nama "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-500"
            placeholder="Masukkan alamat email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Pesan</label>
          <textarea
            className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Masukkan pesan atau laporan "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200"
        >
          Kirim Laporan
        </button>
      </form>
    </div>
  );
};

export default Lapor;
