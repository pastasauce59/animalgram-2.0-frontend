import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import FeedContainer from './containers/FeedContainer'

function App(props) {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      
      { loggedIn ? <Navigation /> : null}
      
      {/* react router dom version 6+ no longer uses "Switch", replaced with "Routes" */}
        <Routes>
          <Route exact path='/' element={<FeedContainer loggedIn={loggedIn}/>} />
          <Route exact path='/profile' element={<Profile loggedIn={loggedIn}/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />

        </Routes>
    </div>
  );
}

export default App;
