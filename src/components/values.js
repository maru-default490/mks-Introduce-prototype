import React, { Component } from 'react';

class CoreValueBox extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="values" data-aos="fade-right" data-aos-duration="1000">
                    <p>{this.props.body}</p>
    
                    <h2>{this.props.title}</h2>
                </div>
        )
    }
}

export default CoreValueBox;