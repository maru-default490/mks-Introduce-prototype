import React, { Component } from 'react';
import styled from 'styled-components';

const LocationStyle = styled.section`
    width:100%;
    height:800px;
    background-color:#fafafa;
    display:flex;
    flex-direction:column;
    justify-content:center;

    h2{
        margin: 0 auto;
    }

    nav{
        width:300px;
        height:auto;
        display:flex;
        justify-content:center;
        margin: 0 auto;

        li{
            float:left;
            list-style:none;
            margin:0;

            button{
                width:75px;
                border:none;
                background-color: rgba(0,0,0,0);
                cursor:pointer;
                font-size:16px;
            }
        }
    }

    #map-wrapper{
        width:100%;
        height:auto;
        display:flex;
        justify-content:center;
        margin-top:30px;
        
        #map{
            width:700px;
            height:400px;
            background-color:#fff;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-right:0;
        }

        #location-info{
            width:350px;
            margin-left:50px;
            display:flex;
            flex-direction:column;
            justify-content:center;

            p{
                margin:0;
            }
        }
    }
`;

class Location extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <LocationStyle>
                <h2>Location</h2>

                <nav>
                    <li><button >본사</button></li>
                    <li><button >물류센터</button></li>
                </nav>

                <div id="map-wrapper">
                    <div id="map">
                        맵 대체 영역
                    </div>

                    <div id="location-info">
                        <p>(주)메이크스타</p>
                        <p>서울특별시 강남구 대치동</p>
                        <p>영동대로85길 34 13층</p>

                        <p>(446-599)경기 용인시 기흥구</p>
                        <p>신갈동 537-11</p>
                    </div>
                </div>
            </LocationStyle>
        )
    }
}

export default Location;