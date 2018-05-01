import React, { Component } from 'react';
import logo from '../logo.svg';
import MainContent from './MainContent/mainContent'
import Title from './Title/title'
import SearchForm from './SearchForm/searchForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title className="App-title">Welcome to React</Title>
        </header>
          <SearchForm />
          <MainContent className="App-intro" />
      </div>
    );
  }
}

export default App;
