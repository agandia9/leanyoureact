import React, { Component } from 'react';
import logo from '../logo.svg';
import MainContent from './MainContent/mainContent'
import Title from './Title/title'
import SearchForm from './SearchForm/searchForm'
import './App.css';

class App extends Component {

  _handlerSearchName = (e) =>{
    e.preventDefault()
    fetch('https://api.github.com/users/agandia9').then(res => res.json()).then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title className="App-title">Welcome to React</Title>
        </header>
          <SearchForm _handlerSearchName={this._handlerSearchName}/>
          <MainContent className="App-intro" />
      </div>
    );
  }
}

export default App;
