import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main/>
    </MuiThemeProvider>
    );
  }
}

export default App;
