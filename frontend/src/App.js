import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home';
import TomTomMap from './components/TomTomMap';
import {BrowserRouter, Link, Route} from 'react-router-dom';


const App = () => {
  const [user, setUser] = useState(null)
  const [ showMap, setShowMap ] = useState(false)

  const displayMap = () => setShowMap(!showMap)
  
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={LoginForm}/>
      </BrowserRouter>
      <button onClick={displayMap}>show the map</button>
      {showMap ?
        <TomTomMap />
        :
        null
      }
    </div>
  );
}

export default App;
