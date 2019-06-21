import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import TestCool from './Mahesh';
import TestComp from './MaheshFunction';

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
        <c1 />
        <TestCool />
        <TestComp />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
