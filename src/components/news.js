import React from 'react';
import NewsCard from './newsCard';

function News(){
    return(
        <div id="news-wrapper">
            <h1>언론보도</h1>
            <div id="news-list">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}

export default News;