import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';

  class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }


    render() {
      const self = this;

      return (
        <div className="card" > 
          <div className="imgZone">
            <img className="img" src={this.props.item.main_image}/>
            <div className="weather"> 
              <div className="temperature">
                <img className="cloud" src="../../images/cloudandsun.png"/>
                <p>32 °C</p>  
              </div> 
              <div>Sunny with clouds</div>
              <div className="local-time">8pm</div>
            </div>
          </div>
          
          <div className="Info">
            <div className="city">{this.props.item.name}</div>
            <div className="country">{this.props.item.country}</div>
            <img className="stars" src="../../images/stars.png"/>
            <div className="description">{this.props.item.description}</div>
            <div className="starting-from">Starting from</div>
            <Price/>
            <div className="button-bar">
              <button className="button">Tours</button>
              <button className="button">Attractions</button>
              <button className="button">Transport</button>
            </div>
          </div>
        </div>
      );
    }
  }


  export default Card;




