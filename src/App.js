import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      {/* <h3>🚧 animalgram 2.0 🐕 under construction 🚧</h3> */}
      <Navigation />
      <Login />
      {/* react router dom version 6+ no longer uses "Switch", replaced with "Routes" */}
        <Routes>
          <Route exact path='/profile' element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
