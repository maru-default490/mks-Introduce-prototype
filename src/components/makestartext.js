// @flow
import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.div`
    .mstextcolor:nth-child(1){color:#e8351d;}
    .mstextcolor:nth-child(2){color:#e17d37;}
    .mstextcolor:nth-child(3){color:#00a49d;}
    .mstextcolor:nth-child(4){color:#006a8b;}
    .mstextcolor:nth-child(5){color:#e8351d;}
    .mstextcolor:nth-child(6){color:#e8351d;}
    .mstextcolor:nth-child(7){color:#e8351d;}
    .mstextcolor:nth-child(8){color:#e8351d;}
`;
const Makestartext = () => (
        <TextStyled>
            <font className="mstextcolor">M</font>
            <font className="mstextcolor">A</font>
            <font className="mstextcolor">K</font>
            <font className="mstextcolor">E</font>
            <font className="mstextcolor">S</font>
            <font className="mstextcolor">T</font>
            <font className="mstextcolor">A</font>
            <font className="mstextcolor">R</font>
        </TextStyled>
    );
export default Makestartext;