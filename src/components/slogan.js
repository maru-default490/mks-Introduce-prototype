import React from 'react';
import styled from 'styled-components';

const SloganStyle = styled.section`
        width:100%;
        height: calc(100vh - 100px);
        display:flex;
        justify-content: center;
        align-items: center;
    
    .slogan{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .slogan > h1{
        font-size:100px;
    }
    
    .slogan > p{
        font-size: 24px;
        text-align: center;
        margin-top:16px;
    }
`;

function Slogan(){
    return(
        <SloganStyle>
            <div className="slogan">
                <h1><b>MAKE YOUR OWN STAR</b></h1>
                <p>We offer special experiences and opportunities for K-culture fans and artist<br></br>
                   in K-pop centers around the world.</p>
            </div>  
        </SloganStyle>
    )
}

export default Slogan;