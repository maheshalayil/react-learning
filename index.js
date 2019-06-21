import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MaheshComp from './MaheshFunction';
import ImageComp from './ImageComponent';

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
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
