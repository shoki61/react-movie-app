import React from 'react';


import PersonItem from './PersonItem/PersonItem';
import './PersonList.css';


const PersonList = props => {
    return <div style={{margin:'50px 0'}}>
        <p className='person-list-title'>{props.title}<span className='person-list-count'>({props.data.length})</span></p>
        <div className='person-list-container'>
            {props.data.map(item => <PersonItem
                clicked={() => props.clicked(item.id)}
                name={item.name}
                gender={item.gender}
                department={item.department}
                character={item.character}
                avatar={item.profile_path}
                id={item.id}
                key={item.id}
            />)}
        </div>
    </div>
};

export default PersonList;