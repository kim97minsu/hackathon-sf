import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home';
import TomTomMap from './components/TomTomMap'


const App = () => {
  const [user, setUser] = useState(null)
  const [ showMap, setShowMap ] = useState(false)

  const displayMap = () => setShowMap(!showMap)
  
  return (
    <div>
      {user === null ?
        <Home /> :
        console.log('')
      }
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
