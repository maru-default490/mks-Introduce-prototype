import React, { Component } from 'react';
import NewsCard from './newsCard';

class News extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[
                {
                    title:'News Title 1',
                    content: 'abcd news title',
                    date:'2015-12-12',
                },
                {
                    title:'News Title 2',
                    content: 'efgh news title',
                    date:'2015-12-16',
                }
            ],
        }
    }
    
    
    render() {
        return (
            <section id="news-wrapper">
                <h1>언론보도</h1>
                <div id="news-list">
                    {this.state.posts.map((key,id) => {
                        return (<NewsCard title={key.title} content={key.content} date={key.date} key={id}/>)
                    })}
                </div>
            </section>
        )
    }

}

export default News;