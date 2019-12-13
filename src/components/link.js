import React, { Component } from 'react';
import styled from 'styled-components';
import LinkBtn from './linkButton';

const Links = styled.section`
    width:100%;
    height:250px;
    background-color:#bbb;
    display:flex;

    a:first-child{
        border-right:1px solid #f2f2f2;
    }
`;

class Link extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Links>
                <LinkBtn btnText='MAKESTAR' btnUrl='https://makestar.co' /><LinkBtn btnText='MAKESTAR mall' btnUrl='https://mall.makestar.co/' />
            </Links>
        )
    }
}

export default Link;