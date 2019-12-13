import React, { Component } from 'react';
import styled from 'styled-components';

const LinkBtns = styled.a`
    display:block;
    cursor:pointer;
    width:50%;
    height:100%;
    background-color:#fff;
    font-size:32px;
    text-align:center;
    line-height:250px;
    margin:0;
    text-decoration:none;
    color:#333;
    border-top:1px solid #f2f2f2;
`;

class LinkBtn extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <LinkBtns className="btn" href={this.props.btnUrl}>
                {this.props.btnText}
            </LinkBtns>
        )
    }
}

export default LinkBtn;