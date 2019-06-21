import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MaheshComp from './MaheshFunction';
import ImageComp from './ImageComponent';
import MyLocation from './MyLocation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <MaheshComp />
        <ImageComp />
        <MyLocation />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
