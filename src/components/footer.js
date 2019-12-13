import React, { Component } from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
    width:100%;
    height: 400px;
    background-color: #404040;
    color:#707070;

    div{
        display:flex;
        width:1000px;
        height:100%;
        margin:0 auto;

        .footerText{
            display:flex;
            flex-direction:column;
            justify-content:center;
        }

        .footerIcon{
            list-style:none;
            display:flex;
            flex-direction:row;
            align-items:flex-end;
            margin-bottom:7%;
    
            li{
                margin-left:20px;
            }
        }
    }
    
`;

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FooterSection>
                <div>
                    <div className="footerText">
                        <p>(주)메이크스타 대표 김재면</p>
                        <p>사업자 등록번호 : 120-88-24134[사업자등록정보 확인]</p>
                        <p>통신판매업신고 제 2015-서울강남-01180 호</p>
                        &nbsp;
                        <p>+82 2 6959 2076</p>
                        <p>job@makestar.co</p>
                    </div>
                    <ul className="footerIcon">
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                    </ul>
                </div>
            </FooterSection>
        )
    }
}

export default Footer;
