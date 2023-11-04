import React from 'react';
import {  NEWS_CATEGORY_CNN } from '@/utils/kategori/kategori';

const NavBerita = ({ selectedNews, onSelect }) => {
let categories = NEWS_CATEGORY_CNN;
return (
<>
    <div className=" bg-slate-50 mx-0 sm:mx-2 border-y-2 border-green-500 overflow-x-scroll sm:overflow-hidden">
        <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
                {categories.map((category) => {
                return (
                <button key={category} onClick={()=> onSelect(category)}
                    className={
                    category === selectedNews ? 'border-green-500 text-green-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                    }
                    >
                    {category}
                </button>
                );
                })}
            </nav>
        </div>
    </div>
</>
);
};

export default NavBerita