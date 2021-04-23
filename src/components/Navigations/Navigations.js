import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigations.css';
import NavigationItem from './NavigationItem/NavigationItem';
import genresData from '../../data/genres.json';

const navigations = () => (
    <div className='Navigation'>
        <NavigationItem title='Movies'>
            <NavLink to='/movies/popular'>Popular</NavLink>
            <NavLink to='/movies/now-playing'>Now Playing</NavLink>
            <NavLink to='/movies/upcoming'>Upcoming</NavLink>
            <NavLink to='/movies/top-rated'>Top Rated</NavLink>
        </NavigationItem>
        <NavigationItem title="TV">
            <NavLink to='/movies/popular-tv'>Popular</NavLink>
            <NavLink to='/movies/airing-today'>Airing Today</NavLink>
            <NavLink to='/movies/on-today'>On Today</NavLink>
            <NavLink to='/movies/top-rated-tv'>Top Rated</NavLink>
        </NavigationItem>
        <NavigationItem title='Genres'>
            {
                genresData.genres.map(genre => (
                    <NavLink to={`/movies/${genre.name}`} key={genre.id}>{genre.name}</NavLink>
                ))
            }
        </NavigationItem>
    </div>
);

export default navigations;
