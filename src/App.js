import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      {/* <h3>🚧 animalgram 2.0 🐕 under construction 🚧</h3> */}
      {loggedIn ? <Navigation /> : <Login />}
      {/* <Login /> */}
      {/* react router dom version 6+ no longer uses "Switch", replaced with "Routes" */}
        <Routes>

          <Route exact path='/profile' element={<Profile/>} />
          <Route exact path='/login' element={<Login />} />

        </Routes>
    </div>
  );
}

export default App;
