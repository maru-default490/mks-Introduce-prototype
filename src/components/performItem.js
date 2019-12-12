import React, { Component } from 'react';
import styled from 'styled-components';

const Items = styled.li`
    float:left
    list-style:none;
    width:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .icon-wrapper{
        width:100%;
        height:200px;
        background-color:#fff;
    }

    .icons{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    p{
        font-size:32px;
    }
`;

class PerformItem extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Items>
                <div className="icon-wrapper">
                    <div className="icons">
                        아이콘 대체 영역
                    </div>
                </div>
                <p>{this.props.number}</p>
            </Items>
        )
    }
}

export default PerformItem;