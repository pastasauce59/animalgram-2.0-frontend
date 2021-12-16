import React from 'react';
import { Navigate } from 'react-router-dom'

function FeedContainer(props) {

    if(!props.loggedIn){
        return <Navigate to='/login' />
    }

    return (
        <div>
            feed content goes here...
        </div>
    );
}

export default FeedContainer;