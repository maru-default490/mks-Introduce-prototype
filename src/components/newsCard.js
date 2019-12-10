import React, { Component } from 'react';

class NewsCard extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="news-card">
                <div className="news-top">
                    <a href="#"></a>
                    <img src="https://images.unsplash.com/photo-1575625889961-f18312abce39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1343&q=80"></img>
                </div>

                <div className="news-bottom">
                    <p><b>{this.props.title}</b></p>
                    <p>{this.props.content}</p>
                    <p>{this.props.date}</p>
                </div>
            </div>
        )
    }
}

export default NewsCard;