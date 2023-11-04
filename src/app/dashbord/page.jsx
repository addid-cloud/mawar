"use client"
import UserInfo from "@/components/UserInfo"
import MoneyUser from "@/components/MoneyUser"
import Artikel from "@/components/Artikel";
import { fetchNews } from "@/utils/newsAPI";
import NavBerita  from "@/components/NavBerita";
import React from "react";
import Header from "@/components/Artikel/Header";

const page = ()=>{
  const [selectedNews, setSelectedNews] = React.useState('nasional');
  const [news, setNews] = React.useState([]);

  const changeCategory = async (type) => {
    const response = await fetchNews(type);
    setNews(response);
    setSelectedNews(type);
  };

  React.useEffect(() => {
    changeCategory(selectedNews);
  }, [selectedNews]);
    return(
        <div>
            {/* <UserInfo/> */}
            <MoneyUser/>
            <NavBerita selectedNews={selectedNews} onSelect={changeCategory} />
            <Header title="berita terbaru"  linkHref="/dashbord/berita" linkTitle="lihat yang lain..."/ >
            <Artikel news={news} selectedNews={selectedNews} />
            <UserInfo />

        </div>
    )
}

export default page