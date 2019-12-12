import React, {Component} from 'react';

class OurServiceBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <img src={this.props.serviceImg} />
                <h3>{this.props.serviceTitle}</h3>
                <p>{this.props.serviceText}</p>
            </div>
        );
    }
}
export default OurServiceBox;