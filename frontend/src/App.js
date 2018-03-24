import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <SideDrawer />
        <Hotel />
      </div>
    );
  }
}

export default App;
