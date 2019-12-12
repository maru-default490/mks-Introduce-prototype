import React, { Component } from 'react';
import NewsCard from './newsCard';
import styled from 'styled-components';

const NewsStyle = styled.section`
    width:100%;
    height: 600px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  #news-list{
    margin-top:30px;
    display:flex;
    justify-content: center;
    width:100%;
  }
  
  .news-card{
    width:500px;
    height: 450px;
    margin:0px 20px;
  }
  
  .news-top{
    overflow: hidden;
    display:flex;
  }
  
  .news-top a{
    position: absolute;
    width:500px;
    height: 300px;
    z-index: 999;
  }
  
  .news-top img{
    width:500px;
    height: 300px;
  }
  
  .news-top > a:hover{
    opacity: 1;
    background-color: rgba(0,0,0,0.5);
    transition: all 1s;
  }
  
  .news-top > a:hover+img{
    transform: scale(1.1);
    transition: all 1s;
  }
  
  .news-bottom > p{
    font-size:20px;
  }
  
`;

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
            <NewsStyle>
                <h1>언론보도</h1>
                <div id="news-list">
                    {this.state.posts.map((key,id) => {
                        return (<NewsCard title={key.title} content={key.content} date={key.date} key={id}/>)
                    })}
                </div>
            </NewsStyle>
        )
    }

}

export default News;