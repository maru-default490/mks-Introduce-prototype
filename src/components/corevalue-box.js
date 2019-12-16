import React, {Component} from 'react';

class Corevaluebox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li>
            <strong>{this.props.coreTitle}</strong>
                <div className="coretext-box">
                    <img src={this.props.coreImg} />
                    <p>{this.props.coreText}</p>
                </div>
            </li>
        );
    }
}
export default Corevaluebox;