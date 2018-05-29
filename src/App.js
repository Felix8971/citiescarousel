import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import fetch from 'isomorphic-fetch';
import Carousel from './components/Carousel';
import './style.scss'

/*injectGlobal`
  html, body, #root {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  @font-face {
    font-family: 'Circular Std Black';
    font-style: normal;
    font-weight: normal;
    src: local('Circular Std Black'), url('http://localhost:3000/CircularStd-Black.woff') format('woff');
  }
`;
*/
const MainContainer = styled.div`
  font-family: 'Circular Std Black', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;



const Title =  styled.h1`
  font-size:30px;
  margin: 40px 0px auto;
  @media (max-width: 640px) {
    font-size:25px;
  }
  font-family: Noto Sans,sans-serif;
`;


const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom:30px;
`;


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

  }

  render() {
    const self = this;
    console.log(this.state.weather);

    return (
      <MainContainer id="MainContainer">
        <Header>
          <Title><strong>Where to go ?</strong> This weeks standout destinations are...</Title>
        </Header>
        <Carousel cities={this.state.cities}></Carousel>
      </MainContainer>
    );
  }
}

export default App;