import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Corebox extends (Component){
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="coreBox"
                data-aos="fade-right"
                data-aos-duration="2000">
                <div className="coreText">{this.props.coretext}</div>
                <span>{this.props.coretitle}</span>
            </div>
        );
    }
}
export default Corebox;