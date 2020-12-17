import React from 'react';

import './Navigations.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigations = () => (
    <div className='Navigation'>
        <NavigationItem title='Movies'/>
        <NavigationItem title="TV's"/>
        <NavigationItem title='People'/>
    </div>
);

export default navigations;
