import { useEffect, useState } from "react";
import NewsProvider from "./NewsProvider";

function NewsState({ children }) {
  const [newsapi, setNewsApi] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (title = "") => {
    setLoading(true);
    try {
      const query = title || "general";
      const res = await fetch(`https://gnews.io/api/v4/top-headlines?q=${query}&apikey=d1561b9a1c352425b78fd42024da7255`);
      const resData = await res.json();
      setNewsApi(resData.articles);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <NewsProvider.Provider value={{ newsapi, fetchData, loading }}>
      {children}
    </NewsProvider.Provider>
  );
}

export default NewsState;
