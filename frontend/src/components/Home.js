import React, { Component } from 'react';
import Watermelon from './images/watermelon.png';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img className='watermelon' src={Watermelon}/>
        <h1 className="fuud">FÜÜD</h1>
        <h3 className="subheading">Local Leftover Food at Low Prices.</h3>
        <Link to='/login'>
          <button className="loginButton">Login</button>
        </Link>
        <br />
        <button className="signupButton">Signup</button>
      </div>
    )
  }
}

export default Home;
