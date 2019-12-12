import React, { Component } from 'react';
import PerformItem from './performItem';
import styled from 'styled-components';

const PerformSection = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    background-color:#ddd;
    

    #perform-list{
        width:100%;
        height: 400px;
        display:flex;
        justify-content:center;
        align-items:center;

        ul{
            width:100%;
            display:flex;
            justify-content:center;
            padding:0px 300px;
        }
    }
`;

class Performance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <PerformSection>
                <h1>Our Perfomance</h1>

                <div id="perform-list">
                    <ul>
                        <PerformItem number="2015.12" />
                        <PerformItem number="202" />
                        <PerformItem number="92" />
                        <PerformItem number="328%" />
                        <PerformItem number="331" />
                    </ul>
                </div>
            </PerformSection>
        )
    }
}

export default Performance;