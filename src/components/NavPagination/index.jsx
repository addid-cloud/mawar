import { House } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const NavPagination = () => {
  return (
    <div className='w-full p-2 bg-slate-700 text-white flex justify-between items-center fixed'>
        <Link href={"/dashbord"} className='flex flex-row items-center gap-2'>
        <House size={32} />
        <h2>kembali</h2>
        </Link>
        <h2 className='font-bold'>CNN News</h2>
    </div>
  )
}

export default NavPagination