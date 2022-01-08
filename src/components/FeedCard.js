import React from 'react';

function FeedCard(props) {
    return (
        <div className="feed-card">
            <h3>User XYZ</h3>
            <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80"/>
            <p> <strong>UserXYZ</strong> user caption goes here</p>
        </div>
    );
}

export default FeedCard;