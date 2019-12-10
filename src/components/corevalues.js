import React, { Component } from 'react';
import CoreValueBox from './values';


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
                if(item.id % 10 === 0 && item.id <= 40){
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
            <div id="core-values">
                <h1>Core Values</h1>
                {this.state.posts.map((key, i) => {
                    return (<CoreValueBox title={key.title} body={key.body} key = {i}/>)
                })}
            </div>
        )
     }
}

export default CoreValues;