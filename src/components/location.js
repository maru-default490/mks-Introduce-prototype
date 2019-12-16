import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import LocationItem from './locationItem';

const LocationStyled = styled.section`
    width:100%;
    height:600px
    background-color: #fafafa;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

    #location-list{
        display:flex;
        opacity:0;
        transform:translate(-100px);
    }
`;

function fadeIn(){
    document.getElementById('location-list').style.cssText=`
    transform:translate(0px);
    transition:all 1s;
    opacity:1;`;
}

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: '',
        }
    }

    onChange = (isVisible) => {
        if (isVisible === true) {
            this.setState({
                visible: 'visible',
            })
        } else {
            this.setState({
                visible: 'hidden',
            })
        }
    }

    render() {
        const check = this.state.visible;

        if(check === 'visible'){
            fadeIn();
            console.log("visible");
        }else{
            const temp = <p></p>;
        }
        return (
            <VisibilitySensor onChange={this.onChange}>
                <LocationStyled>
                    <div id="location-list">
                        <LocationItem imgsrc='/img/paper-plane.png' title="CONTACT" tel="02-1234-1234" fax="02-4321-4321" mail="service@mailmail.com"/>
                        <LocationItem imgsrc='/img/location.png' title="LOCATION" location="서울시 OO동 XX길 XX-XX AA층"/>
                        <LocationItem imgsrc='/img/job-seeker.png' title="RECRUIT" tel="02-1234-1234" mail="service@mailmail.com"/>
                    </div>
                </LocationStyled>
            </VisibilitySensor>
        )
    }

}

export default Location;