import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
      
      const { data } = await axios(url);
      console.log( data)
            setNews(data.articles);
            setTotalPages(data.totalResults);
            setPage(1)
    };
    getNews();
  }, [category]);

  useEffect(() => {
    const getNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        const { data } = await axios(url);
        
        setNews(data.articles);
        setTotalPages(data.totalResults)
    };
    getNews();
  }, [page]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangePage = (e, value) => {
    setPage(value);
  };

  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        news,
        totalPages,
        handleChangePage,
        page
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
