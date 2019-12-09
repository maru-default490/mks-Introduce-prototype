import React from 'react';

function Card(props){
    return(
        <div className="card-wrapper" data-aos="fade-up" data-aos-duration="1000">
            <div className="card-img">
                <a href={props.link} target="_blank">바로가기</a>
                <img src={props.cardsrc} width="600" height="350"></img>
            </div>

            <div className="card-info">
                <h2>{props.cardTitle}</h2>
                <p>Card Content , Card Content</p>
            </div>
        </div>
    )
}

export default Card;