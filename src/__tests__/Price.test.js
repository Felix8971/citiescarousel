import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../components/Price';

describe('Price', () => {
   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Price/>,  div);
   });
});