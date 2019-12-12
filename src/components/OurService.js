import React, {Component} from 'react';
import styled from 'styled-components';

import OurServiceBox from './OurServiceBox';

const OurServiceStyled = styled.div`
    width:1000px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;

    div{
        width:400px;
        height:auto;
        display:flex;
        flex-direction:column;
        margin: 220px 0px 100px 0px;

        img{
            width:auto;
            height:250px;
        }
        h3{
            text-align:left;
            display:flex;
            align-item:center;
        }
        p{
            text-align:left;
            display:flex;
            align-item:center;
        }
    }
    h2{
        position:absolute;
        margin-top:100px;
        left:50%;
        transform:translateX(-50%);
}
`;


class OurService extends Component{
    constructor(props){
        super(props);
        this.state={
            serviceImg: "",
            serviceTitle: "",
            serviceText: ""
        }
    }
    render(){
        return(
            <OurServiceStyled>
                <h2>Our Service</h2>
                <OurServiceBox
                    serviceImg="https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189_1280.jpg"
                    serviceTitle="MAKESTAR"
                    serviceText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
                <OurServiceBox
                    serviceImg="https://cdn.pixabay.com/photo/2019/12/08/23/03/pet-4682374_1280.jpg"
                    serviceTitle="MAKESTAR mall"
                    serviceText="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>    
            </OurServiceStyled>
        );
    }
}
export default OurService;