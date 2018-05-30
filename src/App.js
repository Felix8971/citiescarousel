import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import Carousel from './components/Carousel';
import './style.scss'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      cities: [],
      weather: {}
    };
  }

  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/cities')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        self.setState({ cities: data }) });

    fetch('http://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=5825570ef2944f8fc2586b00aa70843d')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        self.setState({ weather: data }) });        

      //todo: give defaut objects if weather data is not available 

  }

  render() {
    const self = this;
    console.log(this.state.weather);

    return (
      <div id="main-container">
        <div id="header">
          <h1><strong>Where to go ?</strong> This weeks standout destinations are...</h1>
        </div>
        <Carousel cities={this.state.cities}></Carousel>
      </div>
    );
  }
}

export default App;