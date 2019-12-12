import React, {Component} from 'react';
import Countup from 'react-countup';
import { handleViewport } from 'react-in-viewport';

class PerformanceBox extends Component{
    constructor(props){
        super(props);
    }

    // onEnterViewport=()=>{
    //     let list, index;
        
    // }

    render(){
        return(
            <div>
                <img src={this.props.PerformanceImg}></img>
                <h3>{this.props.CountTitle}</h3>
                {/* <handleViewport className="countup" onEnterViewport={this.onEnterViewport}> */}
                    <Countup end={this.props.CountEnd} className="count"/>
                {/* </handleViewport> */}
            </div>
        );
    }
}
export default PerformanceBox;