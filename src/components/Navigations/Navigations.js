import React from 'react';

import './Navigations.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigations = () => (
    <div className='Navigation'>
        <NavigationItem title='Movies'>
            <a href="#">Popular</a>
            <a href="#">Now Playing</a>
            <a href="#">Upcoming</a>
            <a href="#">Top Rated</a>
        </NavigationItem>
        <NavigationItem title="TV">
            <a href="#">Popular</a>
            <a href="#">Airing Today</a>
            <a href="#">On Today</a>
            <a href="#">Top Rated</a>
        </NavigationItem>
        <NavigationItem title='Genres'>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </NavigationItem>
    </div>
);

export default navigations;
