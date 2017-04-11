import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  constructor(){
    super()
    injectTapEventPlugin()
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Main/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
