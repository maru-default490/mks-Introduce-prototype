import React, { Component } from 'react';
import Makestartext from './makestartext';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    header{
        width:100%;
        height:100px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background-color:#fff;
        box-shadow:0 2px 4px 0 hsla(0,0%,0%,0.05);
    }
    .logo{
        font-size:45px;
        font-weight:bold;
        text-decoration:none;
    }
    header nav{
        width:200px;
        display:flex;
        flex-direction: row;
    }
    header nav li{
        list-style:none;
        margin:0;
    }

    header nav li:first-child::after{
        content:"|";
        margin:0px 20px;
    }
    header nav li a{
        color:black;
        text-decoration:none;
    }

    .selected{
        color:#e8351d;
    }
`;

class Header extends( Component ){
    render(){
        return(
            <HeaderStyled>
                <header>
                    <a href="#" className="logo"><Makestartext /></a>
                    <nav>
                        <li><a href="#" className="selected">회사 소개</a></li>
                        <li><a href="#">채용</a></li>
                    </nav>
                </header>
            </HeaderStyled>
        );
    }
}
export default Header;