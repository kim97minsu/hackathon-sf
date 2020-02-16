import React, { Component } from 'react';
import salad from '../image/salad.jpg';
// import { NavLink } from 'react-router-dom';
import '../available.css'

class Available extends Component {
  render() {
    return (
      <div>
        <img src={salad} alt="" className="salad" />
        <h1>Fresh Café</h1>
        <p className="health-food">Salads, Health Food</p>
        <p className="address">700 Stockton Street, SF, CA 94133</p>
        <p className="pickup">Pick up today from 6:00 - 9:00 PM</p>
        <p className="direction">Get Directions</p>
        <div className="food">
          <p id="caesar">Caesar Salad</p>
          <p id="chef">Chef Salad</p>
          <p id="russian">Russian Salad</p>
          <p id="moo">Moo Salad</p>
        </div>
      </div>
    );
  }
}

export default Available;