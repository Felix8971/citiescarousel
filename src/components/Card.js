import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';


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
          <img className="img" src={this.props.item.main_image}/>
          <div className="Info">
            <div className="city">{this.props.item.name}</div>
            <div className="country">{this.props.item.country}</div>
            <img className="stars" src="../../images/stars.png"/>
            <div className="description">{this.props.item.description}</div>
            <div className="starting-from">Starting from</div>
            <div className="price">$14 USD</div>
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




