import React, { Component } from 'react';
import Makestartext from './makestartext';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    header{
        width:100%;
        height:50px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding-left:20px;
        border-bottom:1px solid #f2f2f2;
        
        nav{
            width:150px;
            display:flex;
            flex-direction: row;
            
            a{
                color:black;
                text-decoration:none;
                list-style:none;
                margin-left:10px;
            }
        }
    }
    .logo{
        font-size:25px;
        font-weight:bold;
        text-decoration:none;
    } 
`;

class Header extends (Component){
    render(){
        return(
            <HeaderStyled>
                <header>
                    <a href="#" className="logo"><Makestartext /></a>
                    <nav>
                        <a href="#">회사 소개</a>
                        <a href="#">채용</a>
                    </nav>
                </header>
            </HeaderStyled>
        );
    }
}
export default Header;