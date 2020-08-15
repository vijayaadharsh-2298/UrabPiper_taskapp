import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import Axios from 'axios';

class Person extends Component {
  state = {
    person: []
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id)+1;
    Axios.get("https://swapi.dev/api/people/"+id)
    .then(res => this.setState({person: res.data}))
    .catch(err => console.log(err))
  }

  goToHome = () => {
    this.props.history.push("/");
  }

  render(){
  const { name, birth_year, gender, height, skin_color } = this.state.person
  return (
    <div className="person">
    {
      this.state.person ?
      <div>
        <h1>Artist Details of {name}</h1>
        <p>Name: {name}</p>
        <p>Born Date: {birth_year}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Skin Tone: {skin_color}</p>
        <button className="float-right btn nav-button"
        onClick={this.goToHome}
        >Back to home</button>
      </div>
      : <h1>Something went wrong!</h1>
    }
      
    </div>
  )};
}

export default withRouter(Person);
