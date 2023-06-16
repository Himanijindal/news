import { Container } from '@material-ui/core'
import React from 'react';
import '../NewsContent/NewContent.css';
import NewsCard from '../components/NewsCard/NewsCard';

export const NewsContent = ({ newsArray, newsResults, loadmore, setloadmore }) => {
    return ( <
        Container maxWidth = "md" >
        <
        div className = "content" >
        <
        div className = "downloadMessage" >
        <
        span className = "downloadText" >
        For the best experience use inshorts app on your smartphone <
        /span>  <
        img src = "https://assets.inshorts.com/website_assets/images/appstore.png"
        height = "80%"
        alt = "app_store" / >
        <
        img src = "https://assets.inshorts.com/website_assets/images/playstore.png"
        height = "80%"
        alt = "play_store" / >
        <
        /div> {
        newsArray.map((newsItem) => ( <
            NewsCard newsItem = { newsItem }
            key = { newsItem.title }
            / >
        ))
    } {

        loadmore <= newsResults && ( <
            >
            <
            hr / >
            <
            button className = "loadmore"
            onClick = {
                () => setloadmore(loadmore + 20)
            } > Load more < /button>  < / >
        )

    } < /
    div > < /
    Container >
)
}