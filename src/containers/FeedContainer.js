import React from 'react';
import { Navigate } from 'react-router-dom'
import FeedCard from '../components/FeedCard';

function FeedContainer(props) {

    if(!props.loggedIn){
        return <Navigate to='/login' />
    }

    return (
        <div>
            <FeedCard />
        </div>
    );
}

export default FeedContainer;