import { signOut } from 'next-auth/react';
import React from 'react';

const Footer = () => {
return (
<footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="text-2xl font-semibold mb-4 lg:mb-0">TI Mawar</div>
        <div className="flex items-baseline flex-wrap gap-2">
            <a href="#" className="hover:text-gray-400 transition duration-300">
                Beranda
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
                Layanan
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
                Kontak
            </a>
            <button onClick={()=>signOut()} className=" p-2 transition duration-300 bg-red-500 hover:bg-red-300">
                sign out
            </button>
        </div>
    </div>
</footer>
);
};

export default Footer;