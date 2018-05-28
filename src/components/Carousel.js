import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import Card from './Card';

class Carousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index : 0,
      };

      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }


    previous() {

      if ( this.state.index ) {
        let newIndex = this.state.index - 1;
        let left = "-"+100*newIndex+"%";
        this.setState({
          style: {
            left: left
          },
          index :  newIndex
        });
      }

    
    }


    next() {
      let newIndex = this.state.index < this.props.cities.length - 1 ? this.state.index + 1 : 0;
      let left = "-"+100*newIndex+"%";

      this.setState({
        style: {
          left: left
        },
        index :  newIndex
      });
    }

    render() {
      const self = this;
      const cityList = this.props.cities.map(function(item, i) {
        return (
          <div className="card" key={i} > 
            <img className="img" src={item.main_image} />
            <div className="Info">
              <div className="city">{item.name}</div>
              <div className="country">{item.country}</div>
              <img className="stars" src="../../images/4-stars.png"/>
              <div className="description">{item.description}</div>
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
      });
      
      var divStyle = {
        left:"-100%"
      };
      
      console.log(this.state.style);

      return (
        <div id="container">
          <button className="arrow" type="button" onClick={this.previous}><img src="../../images/arrow_left.png"/></button>
          <div id="slider">
            <div id="figure" style={this.state.style}>
              {cityList}
            </div>
          </div>
          <button className="arrow" type="button" onClick={this.next}><img src="../../images/arrow_right.png"/></button>
        </div>

      );
    }
}



export default Carousel;