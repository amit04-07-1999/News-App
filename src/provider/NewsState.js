import { useEffect, useState } from "react";
import NewsProvider from "./NewsProvider";

function NewsState({ children }) {
  const [newsapi, setNewsApi] = useState([]);
  const fetchData = async (title) => {
    // const res = await fetch(`https://newsapi.org/v2/everything?q=${title}&apiKey=96d96aaf3a7d4063b8ae013fc0610f80`);
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?q=${title}&apikey=1b433f2a2e9b6997f0259270cd0b3af8`);
    const resData = await res.json();
    setNewsApi(resData.articles);
  };
  useEffect(() => {
    fetchData("world");
  }, []);
  
  return (
    <NewsProvider.Provider value={{ newsapi, fetchData }}>
      {children}
    </NewsProvider.Provider>
  );
}

export default NewsState;
