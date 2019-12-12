import React, { Component } from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
    width:100%;
    height: 400px;
    background-color:#ddd;
`;

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FooterSection>

            </FooterSection>
        )
    }
}

export default Footer;