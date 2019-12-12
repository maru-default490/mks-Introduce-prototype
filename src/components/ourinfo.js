import React from 'react';
import Card from './card'
import styled from 'styled-components';

const InfoWrapper = styled.section`
    width:100%;
    height: 1200px;
    display:flex;
    flex-direction: column;
    align-items: center;
    }

    .works{
    width:100%;
    height: 600px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    }

    .works h1{
    font-size:30px;
    margin-bottom:20px;
    }

    .works p{
    font-size: 24px;
    margin-top:20px;
    text-align: center;
    }

    .service{
    width:100%;
    height: 800px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:30px;
    }

    .card-list{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:40px;
    }

    .card-wrapper{
    margin-left:20px;
    }

    .card-wrapper:first-child{
    margin-left:0px;
    }

    .card-img{
    width:600px;
    height: 350px;
    overflow: hidden;

    box-shadow:0 2px 4px 0 hsla(0,0%,0%,0.1);
    }

    .card-img > a{
    width:600px;
    height: 350px;
    position: absolute;
    z-index: 999;
    font-size:30px;
    color:#fff;
    display:flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    }

    .card-img > a:hover{
    opacity: 1;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.7s;
    }

    .card-img > a:hover+img{
    transform: scale(1.1);
    transition: all 0.7s;
    }
`;

function OurInfo() {
    return (
        <InfoWrapper>
            <div className="works">
                <h2>Our work</h2>
                <p>
                    MAKESTAR는 한류 스타와 전세계 팬들을 연결하여<br></br>
                    팬들에게는 스타와 소통하고 콘텐츠 제작과정에 참여하는 특별한 경험을,<br></br>
                    스타에게는 글로벌 팬들을 만나고 해외 진출의 기회를 제공하는<br></br>
                    크라우드펀딩 기반 엔터테이먼트 콘텐츠 플랫폼으로<br></br>
                    전세계 200여개국의 팬들이 스타와 소통하고 있습니다.
                </p>
            </div>

            <div className="service">
                <h2>Our Service</h2>
                <div className="card-list">
                    <Card cardsrc="https://images.unsplash.com/photo-1573844077939-8eabe5be728f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        cardTitle="MAKESTAR"
                        link="https://www.makestar.co/"
                        aos="fade-right" />
                    <Card cardsrc="https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        cardTitle="MAKESTAR mall"
                        link="https://mall.makestar.co/"
                        aos="fade-left" />
                </div>
            </div>
        </InfoWrapper>
    )
}

export default OurInfo;