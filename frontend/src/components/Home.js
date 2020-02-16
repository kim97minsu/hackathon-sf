import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="fuud">FUUD</h1>
        <h3 className="subheading">Local Food at Low Prices.</h3>
        <button className="loginButton">Login</button>
        <br />
        <button className="signupButton">Signup</button>
      </div>
    )
  }
}

export default Home
