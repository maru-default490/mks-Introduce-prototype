import React, { Component } from 'react';
import Makestartext from './makestartext';
import styled from 'styled-components';

const HeaderStyled = styled.header`
        position:fixed;
        top:0;
        left:0;
        right:0;
        width:100%;
        height:50px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        border-bottom:1px solid #f2f2f2;
        background-color:#fff;
        z-index:999;
        
        
        nav{
            display:flex;
            flex-direction: row;

            a{
                color:black;
                text-decoration:none;
                list-style:none;
                padding-right:20px;
            }
        }
    }
    .logo{
        font-size:25px;
        font-weight:bold;
        text-decoration:none;
        padding-left:20px;
    } 
`;

class Header extends (Component){
    render(){
        return(
            <HeaderStyled>
                    <a href="#" className="logo"><Makestartext /></a>
                    <nav>
                        <a href="#">회사 소개</a>
                        <a href="#">채용</a>
                    </nav>
            </HeaderStyled>
        );
    }
}
export default Header;