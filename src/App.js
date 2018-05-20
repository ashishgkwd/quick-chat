import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import SideBar from './components/SideBar/SideBar';
import AppHeader from './components/AppHeader/AppHeader';
import MainContent from './components/MainContent/MainContent';
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5b5b5c',
      main: '#3d3c3d',
      dark: '#1c1c1d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#81d2ff',
      main: '#28b3fe',
      dark: '#1698ed',
      contrastText: '#000',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <AppHeader />
            <div className="App-main-content">
              <SideBar />
              <Route path="/" component={MainContent} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
