import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';



const AA =  styled.div`
  display: inline-block;
  width:300px;
  background-color: green;
  padding: 5px;
  border: 1px solid red;
  height:200px;
`;

const Img =  styled.img`
  max-width:50%;
`;

const Form =  styled.div`
 
  width:50%
`;


  class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };

      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event,amount) {
      console.log('value=',event.target.value);
      this.setState({
        selectedAmount: parseInt(event.target.value)
      });

    }


    render() {
      const self = this;

      return (
        <AA>
         

        </AA>
      );
    }
  }


  export default Card;




