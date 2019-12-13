import React, {Component} from 'react';
import styled from 'styled-components';

const TestStyled = styled.div`
    width:100%;
    height:600px;
    
`;

class test extends Component{
    render(){
        return(
            <TestStyled>
                <h2>CoreValue</h2>
                    <div className="backimg">{/*이미지 넣는 부분 */}</div>
                    <div className="coreText">
                        <h3>corevalue</h3>
                        <ul>
                            <li>
                                <strong>MOVING</strong>
                                우리는 전세계 팬들에게 MAKESTAR만의 경험과 재미 그리고 감동을 선물합니다.
                            </li>
                            <li>
                                <strong>MOVING</strong>
                                우리는 전세계 팬들에게 MAKESTAR만의 경험과 재미 그리고 감동을 선물합니다.
                            </li>
                            <li>
                                <strong>MOVING</strong>
                                우리는 전세계 팬들에게 MAKESTAR만의 경험과 재미 그리고 감동을 선물합니다.
                            </li>
                            <li>
                                <strong>MOVING</strong>
                                우리는 전세계 팬들에게 MAKESTAR만의 경험과 재미 그리고 감동을 선물합니다.
                            </li>
                        </ul>

                    </div>
            </TestStyled>
        );
    }
}
export default test;