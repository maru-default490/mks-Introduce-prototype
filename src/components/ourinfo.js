import React from 'react';
import Card from './card'

function OurInfo(){
    return(
        <div id="info-wrapper">
            <div className="works">
                <h1>OUR WORKS</h1>
                <p>
                    MAKESTAR는 한류 스타와 전세계 팬들을 연결하여<br></br>
                    팬들에게는 스타와 소통하고 콘텐츠 제작과정에 참여하는 특별한 경험을,<br></br>
                    스타에게는 글로벌 팬들을 만나고 해외 진출의 기회를 제공하는<br></br>
                    크라우드펀딩 기반 엔터테이먼트 콘텐츠 플랫폼으로<br></br>
                    전세계 200여개국의 팬들이 스타와 소통하고 있습니다.
                </p>
            </div>

            <div className="service">
                <h1>OUR SERVICE</h1>
                <div className="card-list">
                    <Card cardsrc="https://images.unsplash.com/photo-1573844077939-8eabe5be728f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                          cardTitle="MAKESTAR"
                          link="https://www.makestar.co/"/>
                    <Card cardsrc="https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                          cardTitle="MAKESTAR mall"
                          link="https://mall.makestar.co/"/>
                </div>
            </div>
        </div>
    )
}

export default OurInfo;