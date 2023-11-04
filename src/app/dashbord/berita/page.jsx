"use client"
import Pagination from "@/utils/pagination";
import React from "react";
import { fetchNews } from "@/utils/newsAPI";
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
        <Pagination news={news} selectedNews={selectedNews}/>
        </>
    )
}

export default page