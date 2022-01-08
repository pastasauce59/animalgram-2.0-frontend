import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import FeedContainer from './containers/FeedContainer'
import Post from './components/Post'

function App(props) {

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [searchText, setSearchText] = useState('')

  const [loggedIn, setLoggedIn] = useState(true)

  let loginStatus = (e) => {
    setLoggedIn(e)
  }

  return (
    <div className="App">
      
      { loggedIn ? <Navigation loginStatus={loginStatus} /> : null}
      
      {/* react router dom version 6+ no longer uses "Switch", replaced with "Routes" */}
        <Routes>
          <Route exact path='/' element={<FeedContainer loggedIn={loggedIn} />} />
          <Route exact path='/profile' element={<Profile loggedIn={loggedIn} />} />
          <Route exact path='/login' element={<Login loggedIn={loggedIn} />} />
          <Route exact path='/signup' element={<Signup loggedIn={loggedIn} />} />
          <Route exact path='/post' element={<Post loggedIn={loggedIn} />} />

        </Routes>
    </div>
  );
}

export default App;
