import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import fetch from 'isomorphic-fetch';
import Carousel from './components/Carousel';
import './style.css'

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
  font-size:40px;
  margin: 40px 0px auto;
  color:#5A5E6B;
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
    };
    ///this.resetMessage = this.resetMessage.bind(this);
  }

  /*toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }*/

  // resetMessage() {
  //     this.props.dispatch({
  //       type: 'UPDATE_MESSAGE',
  //       message: ``,
  //     });
  // }

  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/cities')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        self.setState({ cities: data }) });

  }


  render() {
    const self = this;
  
    //const donate = this.props.donate;
    //const message = this.props.message;

    return (
      <MainContainer id="MainContainer">

        <Header>
          <Title>TheAsia.com</Title>
        </Header>

        <Carousel cities={this.state.cities}></Carousel>

      </MainContainer>
    );
  }
}

export default App;