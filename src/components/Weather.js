import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

  class Weather extends React.Component {
    constructor(props) {
      super(props);
    }

    //todo : call a webservice to get the weather

    render() {
      return (
        <div className="weather"> 
          <div className="temperature">
            <img className="cloud" src="../../images/cloudandsun.png"/>
            <p>32 °C</p>  
          </div> 
          <div>Sunny with clouds</div>
          <div className="local-time">8pm</div>
        </div>
      );
    }
  }

  
  export default Weather;




