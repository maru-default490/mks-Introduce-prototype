import React, {Component} from 'react';
import styled from 'styled-components';
import Corevaluebox from './corevalue-box';

const CoreStyled = styled.div`
    width:1000px;
    height:600px;
    margin:0 auto;
    margin-top: 1200px;
    h2{
        text-align:center;
        padding-top:100px;
        margin-bottom:150px;

    }

    .coreBox{
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;

        .backimg{
            width:400px;
            height:400px;
            background-color:gray;
        }
            ul{
                width:auto;
                height:auto;
                li{

                    list-style:none;
                    margin-bottom:35px;
                    border-bottom:1px solid lightgray;
                    
                    .coretext-box{
                        display:flex;
                        align-items:center;
                        height:100px;
                        margin-bottom:30px;
                        
                        p{
                            width:400px;
                            font-size:0.85em;
                        }
                        img{
                            width:64px;
                            height:64px;
                            margin: 50px 40px 10px 0px;
                        }
                    }
                }
                li:last-child{
                    border-bottom:none;
                }
        }
    }
    

`;

class CoreValue extends Component{
    constructor(props){
        super(props);
        this.state={
            coreTitle:'',
            coreImg:'',
            coreText:''
        }
    }
    render(){
        return(
            <CoreStyled>
                <h2>CoreValue</h2>

                    <div className="coreBox">
                    <div className="backimg">{/*이미지 넣는 부분 */}</div>
                            <ul>
                                <Corevaluebox
                                    coreTitle="MOVING"
                                    coreImg="img/gift.png"
                                    coreText="우리는 전세계 팬들에게 MAKESTAR만의 경험과 재미 그리고 감동을 선물합니다."
                                />
                                <Corevaluebox
                                    coreTitle="OPPORTUNITY"
                                    coreImg="img/diamond.png"
                                    coreText="우리는 아티스트들에게 팬들에게 더 가까이 다가가고 더 많은 꿈을 이룰 수 있는 기회를 제공합니다."
                                />
                                <Corevaluebox
                                    coreTitle="BORDERLESS"
                                    coreImg="img/puzzle.png"
                                    coreText="우리는 글로벌 문화 콘텐츠를 소개하고 공유하는 국경 없는 소통 공간입니다."
                                />
                                <Corevaluebox
                                    coreTitle="VALUABLE"
                                    coreImg="img/graph.png"
                                    coreText="우리는 유익하고 신뢰할 수 있는 정보를 제공하기 위해 끊임없이 연구하는 전문가 집단입니다."
                                />
                            </ul>
                    </div>
            </CoreStyled>
        );
    }
}
export default CoreValue;