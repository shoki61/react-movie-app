import React from 'react';

import './Navigations.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigations = () => (
    <div className='Navigation'>
        <NavigationItem title='Movies'>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </NavigationItem>
        <NavigationItem title="TV's">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </NavigationItem>
        <NavigationItem title='Genres'>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </NavigationItem>
    </div>
);

export default navigations;
