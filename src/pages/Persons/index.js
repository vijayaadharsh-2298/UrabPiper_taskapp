import React from 'react';
import { connect } from 'react-redux';

import Person from './Person/index';
import './index.css';

const Persons = (props) => {

    return(
        <div className="person-card mb-4">
        {
            props.persons.map((person,index) => {
                const { name, birth_year, gender} = person
                return(
                    <Person key={person.name} id={index} name={name} birth_year={birth_year} gender={gender}/>
                )
            })
        }   
        </div>
    )

};

const mapStateToProps = state => {
    return{
        persons: state.persons
    }
}

export default connect(mapStateToProps)(Persons);

