import React, { Component } from 'react';
import '../index.css';

class Home extends Component {

  handleDelay = () => {
    window.setTimeout(function(){<Link to = {``}/> }, 3000);
  }

  componentDidMount() {
    this.handleDelay();
  }

  render() {
    return (
      <div>
        <h1 className="fuud">FUUD</h1>
      </div>
    )
  }
}

export default Home
