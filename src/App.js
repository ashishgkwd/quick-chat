import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import AppHeader from './components/AppHeader/AppHeader';
import MainContent from './components/MainContent/MainContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppHeader />
          <div className="App-main-content">
            <SideBar />
            <Route path="/" component={MainContent} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
