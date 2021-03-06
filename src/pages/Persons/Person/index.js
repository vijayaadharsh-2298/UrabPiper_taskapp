import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Person = (props) => {
    return(
        <NavLink to={`/person/${props.id}`}>
            <div className="single-card" onKeyPress={e => {
                if(e.key === 'enter')
                    props.history.push(`/person/${props.id}`)
            }}>
                {props.name}<div className="float-right">{props.gender}</div>
                <p>{props.birth_year}</p>
            </div>
        </NavLink>
    )
}

export default Person;