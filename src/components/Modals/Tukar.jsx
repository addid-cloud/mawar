import React, { useState } from 'react';

const Tukar = () => {
const [money, setMoney] = useState(0);
const [treeCount, setTreeCount] = useState(0);

const treePrice = 20000; // Harga satu bibit pohon

const handleMoneyChange = (e) => {
setMoney(parseInt(e.target.value, 10));
};

const handleIncrement = () => {
setTreeCount(treeCount + 1);
};

const handleConfirmation = () => {
// Lakukan logika konfirmasi penukaran di sini, misalnya mengirim data ke server
console.log(`Konfirmasi penukaran: ${treeCount} bibit pohon`);
// Reset formulir
setMoney(0);
setTreeCount(0);
};

return (
<div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Tuker Bibit Pohon</h2>
    <form>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Jumlah Uang (IDR)</label>
            <input type="number" className="border w-full py-2 px-3 rounded focus:outline-none"
                placeholder="Masukkan jumlah uang" value={money} onChange={handleMoneyChange} readOnly/>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Jumlah Bibit Pohon</label>
            <div className="flex items-center">
                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                    onClick={handleIncrement}>
                    +
                </button>
                <input type="text" className="border w-16 py-2 px-3 rounded focus:outline-none" value={treeCount}
                    readOnly />
            </div>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">Total Harga (IDR)</label>
            <input type="text" className="border w-full py-2 px-3 rounded focus:outline-none" value={treeCount *
                treePrice} readOnly />
        </div>
        <button type="button"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200 mr-2"
            onClick={handleConfirmation}>
            Konfirmasi
        </button>
    </form>
</div>
);
};

export default Tukar;