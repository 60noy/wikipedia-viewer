import React, { Component } from 'react';
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
        <MuiThemeProvider>
          <Main/>
        </MuiThemeProvider>
    );
  }
}

export default App;
