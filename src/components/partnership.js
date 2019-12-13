import React from 'react';
import styled from 'styled-components'

const PartnerStyle = styled.section`
    width:1000px;
    height:500px;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:100px;
    h2{
        margin-top:100px;
        margin-bottom:100px;
    }
    img{ width: 1000px;}
`;

function Partnership(){
    return(
        <PartnerStyle>
            <h2>Our Partnership</h2>
            <img src="https://www.makestarcorp.com/static/img/partnersPc.9aec136.jpg"></img>
        </PartnerStyle>
    )
}

export default Partnership;