import React from 'react';
import { Navigate } from 'react-router-dom'

function Profile(props) {
  
  if (!props.loggedIn){
    return <Navigate to='/login' />
  }

    return (
        <div>
          <h1>Profile Page</h1>  
        </div>
    );
}

export default Profile;