import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home';
import TomTomMap from './components/TomTomMap';
import Available from './components/Available'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import OrderComplete from './OrderComplete';


const App = () => {
  const [user, setUser] = useState(null)
  const [ showMap, setShowMap ] = useState(false)

  const displayMap = () => setShowMap(!showMap)
  
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={LoginForm}/>
        <Route path='/available' component={Available}/>
        <div className="available">
          <Link to="/available">Click me</Link>
        </div>
        <Route path='/ordercompleted' component={OrderComplete} />

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
