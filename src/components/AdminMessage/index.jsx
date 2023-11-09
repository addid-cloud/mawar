import React from 'react'
const AdminMessage = () => {
return (
<div className='bg-white p-4 m-2'>
    <div className='flex justify-between m-2'>
        <div className='font-bold text-2xl'>
            <h1>
            Pengajuan Top Up
            </h1>
        </div>
        <select id="filter" name="filter" className='bg-slate-200 p-2 rounded-sm'>
            <option value="" className="bg-slate-800 cursor-not-allowed  invisible">filter</option>
            <option value="X.1">Nama</option>
            <option value="X.3">Kelas</option>
            <option value="X.2">Terbaru</option>
            <option value="X.4">Terdahulu</option>
        </select>
    </div>
    <div className='flex gap-4'>
        <div className='flex flex-row justify-between bg-slate-100 p-2 rounded items-center w-full'>
            <div>
                <h1 className='font-semibold text-xl'>name</h1>
                <h3 className='text-md text-slate-800'>jumlah top up</h3>
                <h3 className='text-md text-slate-800'>Tanggal</h3>
            </div>
            <div className='gap-2 flex'>
                <button className='bg-green-600 text-white p-2 rounded-sm'>terima</button>
                <button className='bg-red-600 text-white p-2 rounded-sm'>tolak</button>
            </div>
        </div>
    </div>
</div>
)
}

export default AdminMessage