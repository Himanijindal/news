import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { NewsContent } from './NewsContent/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
    const [category, setCategory] = useState("general");
    const [newsArray, setNewsArray] = useState([]);
    const [newsResults, setNewsResults] = useState([]);
    const [loadmore, setloadmore] = useState(20);

    const newsApi = async() => {
        try {
            const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);
            setNewsArray(news.data.articles);
            setNewsResults(news.data.totalResults);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(newsArray);

    useEffect(() => {
        newsApi();
    }, [newsResults, category, loadmore])
    return ( <
        >
        <
        Navbar setCategory = { setCategory }
        / >  <

        NewsContent setloadmore = { setloadmore }
        loadmore = { loadmore }
        newsArray = { newsArray }
        newsResults = { newsResults }
        / > <
        Footer / >
        <
        / >

    );
}

export default App;