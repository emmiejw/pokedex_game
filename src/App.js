import React, { Component } from 'react';
import Pokegame from './pokegame';
import './App.css';


class App extends Component {
    render() {
      return (
        <div className="App">
        <img className="logo" src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" height="150px" />
          <Pokegame />
      </div>
      );
    }
}

export default App;
