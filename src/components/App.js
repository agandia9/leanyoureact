import React, { Component } from 'react';
import logo from '../logo.svg';
import MainContent from './MainContent/mainContent'
import Title from './Title/title'
import SearchForm from './SearchForm/searchForm'
import './App.css';

class App extends Component {
  state = {
    username: '',
    userdata:{}
  }

  _handlerSearchName = (e) =>{
    e.preventDefault()
    fetch(`https://api.github.com/users/${this.state.username}`).then(res => res.json()).then(data => {
      this.setState({
        userdata:data
      })
    })
  }

  _handlerWriteName = (e) =>{
      this.setState({
          username: e.target.value
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title 
            userdata={this.state.userdata}
            className="App-title">Welcome to React</Title>
        </header>
          <SearchForm 
            _handlerSearchName={this._handlerSearchName} 
            _handlerWriteName={this._handlerWriteName}
          />
          <MainContent 
          className="App-intro"
          userdata={this.state.userdata} />
      </div>
    );
  }
}

export default App;
