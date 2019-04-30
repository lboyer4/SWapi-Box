import React, { Component } from 'react';
import './_App.scss';
import NavBar from '../NavBar/NavBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <main>
        <NavBar />
      </main>
      )
  }
}


export default App;
