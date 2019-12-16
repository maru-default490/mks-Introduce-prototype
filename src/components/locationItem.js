import React, { Component } from 'react';
import styled from 'styled-components';

const LocationItemBox = styled.div`
    width:300px;
    height:300px;
    background-color:#fafafa;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    img{
        width:128px;
        height:128px;
    }

    p{
        margin:0 auto;
        margin-top:5px;

        b{
            font-size:24px;
        }
    }

    .title{
        margin:10px 0px 5px 0px;
    }

    div{
        width:100%;
        height:100px;
        display:flex;
        flex-direction:column;
    }

    a{
        margin:0 auto;
        text-decoration:none;
        color:#333;
    }
`;

class LocationItem extends Component {
    constructor(props){
        super(props);
    }

    render(){

        let infos = null
        const checkTitle = this.props.title;

        if(checkTitle === 'CONTACT'){
            infos = <div>
                        <p>{this.props.tel}</p>
                        <p>{this.props.fax}</p>
                        <p>{this.props.mail}</p>
                    </div>
        } else if(checkTitle === 'LOCATION'){
            infos = <div>
                        <p>{this.props.location}</p>
                    </div>
        } else if(checkTitle === 'RECRUIT'){
            infos = <div>
                        <p>{this.props.mail}</p>
                        <a href="https://www.naver.com">채용 공고 바로가기 &gt;</a>
                    </div>
        }

        return(
            <LocationItemBox>
                <img src={this.props.imgsrc}></img>
                <p className="title"><b>{this.props.title}</b></p>
                {infos}
            </LocationItemBox>
        )
    }
}

export default LocationItem;