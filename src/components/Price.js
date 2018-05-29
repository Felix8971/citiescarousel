import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

  class Price extends React.Component {
    constructor(props) {
      super(props);
    }


    render() {
      return (
        <div className="price">
          <span className="amount">14</span><span className="currency">USD</span>
        </div>
      );
    }
  }


  export default Price;




