"use client"
import Pagination from "@/components/Pagination/Pagination";
import React from "react";
import { fetchNews } from "@/utils/newsAPI";
import NavPagination from "@/components/NavPagination";
const page = ()=>{
    const [selectedNews, setSelectedNews] = React.useState('nasional');
    const [news, setNews] = React.useState([]);

    const changeCategory = async () => {
        const response = await fetchNews('');
        setNews(response);
        setSelectedNews('');
      };
    
      React.useEffect(() => {
        changeCategory(selectedNews);
      }, [selectedNews]);
    return(
        <>
        <NavPagination/>
        <Pagination news={news} selectedNews={selectedNews}/>
        </>
    )
}

export default page