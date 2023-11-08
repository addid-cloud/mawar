const Artikel = ({ news, selectedNews })=>{
let topThreeNews = news.data?.slice(0, 6);
return(
<>
    <div className="relative sm:mx-2 mx-0">
        <div className="absolute inset-0">
            <div className="bg-slate-50 h-full sm:h-full p-4"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className=" max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {topThreeNews &&
                topThreeNews.map((news) => {
                return (
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={news.image.large} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-green-600">
                                <a href="/" className="hover:underline">
                                    {selectedNews}
                                </a>
                            </p>
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
        </div>
    </div>
</>
)
}
export default Artikel