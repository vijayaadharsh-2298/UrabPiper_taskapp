import React, { Component } from 'react';
import logo from './star-wars-logo.png';
import './index.css';

import Persons from '../Persons/index';

class HomePage extends Component {
  state = {
    showPersons: false
  }

  showPersons = () => {
    this.setState({showPersons: true})
  }

  searchResult = () => {
    this.setState({showPersons: false})
  }

  render(){
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <input className="search-input" placeholder="Search by name" onChange={this.showPersons}/>
      <button type="button" className="btn search-button m-2"
      onClick={this.searchResult}
      >Search</button>
      { this.state.showPersons && <Persons /> }
    </div>
  )};
}

export default HomePage;
