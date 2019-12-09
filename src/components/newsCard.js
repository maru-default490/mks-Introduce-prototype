import React from 'react';

function NewsCard(){
    return(
        <div className="news-card">
            <div className="news-top">
                <a href="#"></a>
                <img src="https://images.unsplash.com/photo-1575625889961-f18312abce39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1343&q=80"></img>
            </div>

            <div className="news-bottom">
                <p>News title</p><br></br>
                <p>News content</p><br></br>
                <p><b>2015.12</b></p>
            </div>
        </div>
    )
}

export default NewsCard;