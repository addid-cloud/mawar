import React from 'react'
import { global } from 'styled-jsx/css'

const AdminSee = () => {
return (
    <div className='bg-white'>
    <div className='flex justify-between p-2 m-2 '>
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
<div className='bg-white flex justify-center text-center p-4 m-2'>
    <table className='border border-black w-1/2 rounded' >
        <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Wallet</th>
        </tr>
        <tr>
            <td>dummy</td>
            <td>X.2</td>
            <td>1.000.000</td>
        </tr>
        <tr>
            <td>dummy</td>
            <td>X.5</td>
            <td>1.000.000</td>
        </tr>
    </table>
</div>
    </div>
)
}

export default AdminSee