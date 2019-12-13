import React, { Component } from 'react';
import styled from 'styled-components';

const SloganStyled = styled.section`

        width:100%;
        height:600px;
        display:flex;
        justify-content:center;
        align-item:center;
        margin-top:270px;
        border-bottom:1px solid #f2f2f2;

        div{
            display:flex;
            flex-direction:column;
            align-item:center;


            .SloganTitle{
                font-size:130px;
                margin-top:0;
                margin-bottom:5px;
            }

            p{
                font-size:23px;
                display:flex;
                margin:0 auto;
                display:flex;
                justify-content:center;
                align-item:center;
            }
        }
    
`;

class Slogan extends (Component){
    render(){
        return(
            <SloganStyled>
                    <div>
                        <h1 className="SloganTitle">MAKE YOUR OWN STAR</h1>
                        <p>We offer special experiences and opportunities for K-culture fans and artist
                        in K-pop centers around the world.</p>
                    </div>
            </SloganStyled>
        );
    }
}
export default Slogan;