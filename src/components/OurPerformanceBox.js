import React, {Component} from 'react';
import Countup from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class PerformanceBox extends Component{
    constructor(props){
        super(props);
    
        this.state={
            visible: 'hidden',
        }
    }

    onChange = (isVisible) => {
        if(isVisible === true){
            this.setState({
                visible: 'visible',
            })
        } else {
            this.setState({
                visible: 'hidden',
            })
        }
    }
    
    render(){

            const visible = this.state.visible;

            let counter = null;
            if(visible === 'visible'){
                counter = <Countup end={this.props.CountEnd} id="count"/>
            } else {
                counter = <Countup end="0" id="count"/>
            }

        
        return(
            <div>
                <img src={this.props.PerformanceImg}></img>
                <h3>{this.props.CountTitle}</h3>
                <VisibilitySensor onChange={this.onChange}>
                    {counter}
                </VisibilitySensor>

            </div>
        );
    }
}
export default PerformanceBox;