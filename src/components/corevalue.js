import React, { Component } from 'react';
import styled from 'styled-components';
import Corebox from'./coreBox';


const CorevalueStyled = styled.div`
        width:1000px;
        height:1000px;
        margin:0 auto;
    
    h2{
        margin-top:100px;
        display:flex;
        justify-content:center;
    }
    .coreBox{
        width:100%;
        height:80px;
        display:flex;
        flex-direction:row;
        margin-top:100px;

        & .coreText{
            width: 700px;
            height:auto;
            margin-right:50px;
            text-align: left;
        }
        
    }
    span{
        width:200px;
        height:80px;
        display:flex;
        align-item:center;
    }
    
`;

class Corevalue extends (Component){
    constructor(props){
        super(props);
        this.state={
            posts: []
        }
    }

    fetchPosts = num => {
        fetch(`https://jsonplaceholder.typicode.com/${num}`)
        .then(response => response.json())
        .then(json=>{
            const result = json.filter((item) => {
                if(item.id % 10 === 0 && item.id <= 50){
                    return true
                }else{
                    return false
                }
            })

            this.setState({
                posts: result
            })
        })
    }

    componentDidMount(){
        this.fetchPosts('posts')
    }

    render(){
        return(
            <CorevalueStyled>
                    <h2>CORE VALUE</h2>
                    <div id="Core">
                        {
                            this.state.posts.map(({title, id, body}) => {
                                return (
                                    <Corebox
                                        key={id}
                                        coretext={body} coretitle={title}/>
                                )
                            })
                        }
                    </div>
            </CorevalueStyled>
        );
    }
}
export default Corevalue;