import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import Carousel from './components/Carousel';
import moment from 'moment-timezone'; 
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
        self.setState({ cities: data });
        //console.log('data=',data);
        /*data.forEach(function(city) {
          console.log(city);
          fetch('http://api.openweathermap.org/data/2.5/weather?q='+city.name+'&appid=5825570ef2944f8fc2586b00aa70843d')
          .then(function(resp) { return resp.json(); })
          .then(function(data) {
            console.log('data',data);
            let lon = data.coord.lon;
            let lat = data.coord.lat;
            let header = new Headers({
              'Access-Control-Allow-Origin':'*',
            
            });

             fetch('https://api.timezonedb.com/v2/get-time-zone?key=OE8W0EWZJ0PL&format=json&by=position&lat='+lat+'&lng='+lon,{
              headers: header
            })
             .then(function(res) { return res.json(); })
              .then(function(data2) {
                 console.log("timezonelab",data2);
             });
            
            //let d = new Date(data.dt*1000);
            //let name = city.name.replace(/ /g, "_");
            //var c = moment.tz(data.dt*1000, "Asia/"+name).format('MMMM Do YYYY, h:mm:ss a');;
            //console.log(c); 
            //self.setState({ weather: data }) 
          });   
        });*/
      });

      //http://api.timezonedb.com/v2/get-time-zone?key=OE8W0EWZJ0PL&format=json&by=position&lat=13.75&lng=100.49
      //todo: give defaut objects if weather data is not available 

  }

  render() {
    const self = this;
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