import React, { Component } from 'react';
import Sum from './components/Sum/Sum';
import app from './app.css';
import CreateStudent from './components/CreateStudent/CreateStudent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Class Front</h1>
       
        <CreateStudent />
      </div>
    );
  }
}

export default App;