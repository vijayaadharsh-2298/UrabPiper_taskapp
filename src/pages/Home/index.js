import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './star-wars-logo.png';
import './index.css';

import Persons from '../Persons/index';
import { setText } from '../../redux/filter.actions';

class HomePage extends Component {
  state = {
    showPersons: false
  }

  showPersons = e => {
    this.setState({showPersons: true})
    this.props.setText(e.target.value)
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
      <input className="search-input" placeholder="Search by name" 
      onChange={this.showPersons}/>
      <button type="button" className="btn search-button m-2"
      onClick={this.searchResult}
      >Search</button>
      { this.state.showPersons && <Persons /> }
    </div>
  )};
}

const mapDispatchToProps = dispatch => {
  return{
    setText: (text) => dispatch(setText(text))
  }
}

export default connect(null,mapDispatchToProps)(HomePage);
