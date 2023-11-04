import { House } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_CATEGORY } from "./kategori/kategori";
const Pagination = ({news ,selectedNews})=>{
    let categories = NEWS_CATEGORY;
return(
    <>
    <div className="flex justify-between items-center">
        <Link href="/dashbord">
        <House size={32} className="text-white"/>
        </Link>
        <div>
        {categories.map((category) => {
            return (
                <>
                {category.map((kate)=>{
                    <div>
                        {kate}
                    </div>
                })}
                </>
            )
        })}
        </div>
    </div>
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                { news.data?.map((news) => {
                    return (    
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={news.image.large} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <a href="/" className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900">
                                    {news.title}
                                </p>
                                <p className="mt-3 text-base text-gray-500">
                                    {news.contentSnippet}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                );
                })}
            </div>
                    </>
)}



export default Pagination