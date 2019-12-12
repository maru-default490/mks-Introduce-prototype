import React, {Component} from 'react';
import styled from 'styled-components';

const WorkStyled = styled.div`
    background-color:pink;
    display:flex;
    justify-content: center;
    flex-direction:column;
    width:1px;
    height:500px;
    color:white;

    .WorkBack{
        width:100vw;
        height: auto;
        justify-content:center;
        align-item:center;
        z-index:999;
        p{
            display:flex;
            justify-content:center;
            line-height:10px;
            font-size:1.3em;
        }
        h2{
            margin-bottom:100px;
            display:flex;
            justify-content:center;
        }
       
       
    } 
    
`;

function WorkBack(){
    window.addEventListener('scroll', function(){
        if(window.scrollY >= 1500){
            this.document.getElementById("WorkStyled").style.cssText=`
                                                                     width:100%;
                                                                     transition: 1.5s
                                                                     cubic-bezier(0.215, 0.61, 0.355, 1)`;
        }
    })
}

class OurWork extends Component{
        render(){
            WorkBack();
            return(
                <WorkStyled id="WorkStyled">
                    <div className="WorkBack">
                        <h2>Our Work</h2>
                        <p>MakeStar는 한류 스타와 전세계 팬들을 연결하여</p>
                        <p>팬들에게는 스타와 소통하고 콘텐츠 제작과정에 참여하는 특별한 경험을,</p>
                        <p>스타에게는 글로벌 팬들을 만나고 해외 진출의 기회를 제공하는</p>
                        <p>크라우드펀딩 기반 엔터테이먼트 콘텐츠 플랫폼으로</p>
                        <p>전세계 200여개국의 팬들이 스타와 소통하고 있습니다.</p>
                    </div>
                </WorkStyled>
            );
        }
}
export default OurWork;