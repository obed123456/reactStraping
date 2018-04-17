import React, { Component } from 'react';
import Nav from './Nav.js';
import MainArea from './MainArea.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainArea />
      </div>
    );
  }
}

export default App;
