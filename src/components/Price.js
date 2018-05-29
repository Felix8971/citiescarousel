import React from 'react';
import PropTypes from 'prop-types';

  class Price extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="price">
          <span className="amount">{this.props.price || 14 }</span><span className="currency">USD</span>
        </div>
      );
    }
  }

  Price.propTypes = {
    price: PropTypes.number.isRequired,
  };

  export default Price;




