import React, {Component} from 'react';
import styled from 'styled-components';
import handleViewport from 'react-in-viewport';
import PerformanceBox from './OurPerformanceBox';

const PerformanceStyled = styled.div`

    width: 1000px;
    height:500px;
    display:flex;
    align-item:center;
    justify-content:space-around;
    margin:0 auto;
    

    div{
        width:200px;
        height:200px;
        display:flex;
        flex-direction:column;
        justify-content:center; 
        text-align:center;
        margin-top:220px;

        img{
            display:flex;
            justify-content:center;
            text-align:center;
            width:80px;
            height:80px;
            margin:0 auto;
        }
        h3{
            text-align:center;
            display:flex;
            align-item:center;
            justify-content:center;
        }
        span{
            font-size:2.3em;
        }
    }
    h2{
        position:absolute;
        margin-top:100px;
    }
`;

class OurPerformance extends Component{
    constructor(props){
        super(props);
        this.state={
            PerformanceImg:"",
            CountTitle:"",
            CountEnd:"",
            Countdecimal:""
        }
    }
    render(){
        return(
            <PerformanceStyled>
                <h2>Our Performance</h2>
                <PerformanceBox
                    PerformanceImg="/img/clock.png"
                    CountTitle="Service launch"
                    CountEnd="2015.12"
                    Countdecimal="2"/>
                <PerformanceBox
                    PerformanceImg="img/earth.png"
                    CountTitle="방문 국가"              
                    CountEnd="202"/>
                <PerformanceBox
                    PerformanceImg="img/money.png"
                    CountTitle="구매 국가"
                    CountEnd="92"/>
                <PerformanceBox
                    PerformanceImg="img/graph.png"
                    CountTitle="평균 프로젝트 달성률"
                    CountEnd="328"/>
                <PerformanceBox
                    PerformanceImg="img/star.png"
                    CountTitle="참여 스타"
                    CountEnd="331"/>
            </PerformanceStyled>
        );
    }
}
export default OurPerformance;