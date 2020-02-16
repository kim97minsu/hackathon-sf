<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home';
import TomTomMap from './components/TomTomMap';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import OrderComplete from './OrderComplete';

=======
import React, { useState } from 'react'
import LoginForm from './components/LoginForm';
import Home from './components/Home';
>>>>>>> 801f988e7ad51d9400b22030da92f36bf841c784

const App = () => {
  const [user, setUser] = useState(null)
  const [ showMap, setShowMap ] = useState(false)

  const displayMap = () => setShowMap(!showMap)
  
  return (
    <div>
<<<<<<< HEAD
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={LoginForm}/>
        <Route path='/ordercompleted' component={OrderComplete} />
      </BrowserRouter>
      <button onClick={displayMap}>show the map</button>
      {showMap ?
        <TomTomMap />
        :
        null
      }
=======
      <Home />
>>>>>>> 801f988e7ad51d9400b22030da92f36bf841c784
    </div>
  );
}

export default App;
