import React, { Component } from 'react';
import NewsCard from './newsCard';
import styled from 'styled-components';

const NewsStyle = styled.section`
    width:1000px;
    margin:0 auto;
    height:auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  #news-list{
    display:flex;
    justify-content: center;
    width:100%;
  }
  
  .news-card{
    width:500px;
    height: 450px;
    margin:100px 50px 100px 50px;
  }
  
  .news-top{
    overflow: hidden;
    display:flex;

    a{
      position: absolute;
      width:450px;
      height: 300px;
      z-index: 999;

      :hover{
        opacity: 1;
        background-color: rgba(0,0,0,0.5);
        transition: all 1s;
      }
    }
    img{
      width: 450px;
      height: 300px;
    }
  }
  
  .news-top > a:hover+img{
    transform: scale(1.1);
    transition: all 1s;
  }
  
  .news-bottom > p{
    font-size:20px;
  }
  h2{
    margin-top:100px;
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
                <h2>언론보도</h2>
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