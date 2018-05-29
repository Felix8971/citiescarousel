import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
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
        let index = this.state.index - 1;
        //let left = "-"+100*newIndex+"%";
        this.setState({
          // style: {
          //   left: left
          // },
          index: index
        });
      }
    }

    next() {
      let index = this.state.index < this.props.cities.length - 1 ? this.state.index + 1 : 0;
      //let left = "-"+100*newIndex+"%";
      this.setState({
        // style: {
        //   left: left
        // },
        index: index
      });
    }

    render() {
      const self = this;
      const cityList = this.props.cities.map(function(item, i) {
        return (
          <Card key={i} item={item}/>
        );
      });
      
      console.log(this.state.style);

      return (
        <div id="container">
          <button className="arrow" type="button" onClick={this.previous}>
            <img className="arrow-img" src="../../images/arrow_left.png"/>
          </button>
          <div id="slider">
            <div id="figure" style={{left:"-"+100*this.state.index+"%"}} >
              {cityList}
            </div>
          </div>
          <button className="arrow" type="button" onClick={this.next}>
            <img className="arrow-img" src="../../images/arrow_right.png"/>
          </button>
        </div>

      );
    }
}



export default Carousel;