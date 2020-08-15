import React from 'react';
import { connect } from 'react-redux';

import Person from './Person/index';
import selector from '../../selector/person-selector';
import './index.css';

const Persons = (props) => {

    return(
        <div className="person-card mb-4">
        {
            props.persons ? 
            props.persons.map((person,index) => {
                const { name, birth_year, gender} = person
                return(
                    <Person key={person.name} id={index} name={name} birth_year={birth_year} gender={gender}/>
                )
            }) : null
        }   
        </div>
    )

};

const mapStateToProps = state => {
    return{
        persons: selector(state.persons,state.filter.text)
    }
}

export default connect(mapStateToProps)(Persons);

