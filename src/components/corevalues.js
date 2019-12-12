import React, { Component } from 'react';
import CoreValueBox from './values';
import styled from 'styled-components';

const CoreValueList = styled.section`
    width:100%;
    height: 1000px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    h1{
    font-size:30px;
  }
  
  .values{
    display:flex;
    width:750px;
    height: 200px;
    text-align: center;
    font-size:18px;
  }
  
  .values > p{
    display:flex;
    font-size:20px;
    width:350px;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin-right:0;
  }
  
  .values > h2{
    display:flex;
    width:200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;


 class CoreValues extends Component{
    constructor(props){
        super(props);
        this.state={
            posts : [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            const result = json.filter((item) => {
                if(item.id % 10 === 0 && item.id < 50){
                    return true
                }else{
                    return false
                }
            })
            this.setState({
                posts: result,
            })
        });
    }
    
     render(){
        return(
            <CoreValueList>
                <h1>Core Values</h1>
                {this.state.posts.map((key, i) => {
                    return (<CoreValueBox title={key.title} body={key.body} key = {i}/>)
                })}
            </CoreValueList>
        )
     }
}

export default CoreValues;

