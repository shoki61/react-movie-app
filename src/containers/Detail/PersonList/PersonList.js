import React from 'react';


import PersonItem from './PersonItem/PersonItem';
import './PersonList.css';

const PersonList = props => {
    return <div style={{display:'flex', flexDirection:'flow'}}>
        <PersonItem/>
        <PersonItem/>
        <PersonItem/>
    </div>
    
};

export default PersonList;