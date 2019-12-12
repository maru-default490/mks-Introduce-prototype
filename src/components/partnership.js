import React from 'react';
import styled from 'styled-components'

const PartnerStyle = styled.section`
    width:100%;
    height: 600px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:30px;
    
    h1{
        margin-bottom:50px;
    }
`;

function Partnership(){
    return(
        <PartnerStyle>
            <h1>Our Partnership</h1>
            <img src="https://www.makestarcorp.com/static/img/partnersPc.9aec136.jpg"></img>
        </PartnerStyle>
    )
}

export default Partnership;