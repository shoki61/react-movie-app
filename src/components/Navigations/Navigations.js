import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigations.css';
import NavigationItem from './NavigationItem/NavigationItem';
import genresData from '../../data/genres.json';

const navigations = props => (
    <div className='Navigation'>
        <NavigationItem title='Movies'>
            <NavLink onClick={() => props.getMovies('movies', 'popular')} to='/movies/popular'>Popular</NavLink>
            <NavLink onClick={() => props.getMovies('movies', 'now_playing')} to='/movies/now_playing'>Now Playing</NavLink>
            <NavLink onClick={() => props.getMovies('movies', 'upcoming')} to='/movies/upcoming'>Upcoming</NavLink>
            <NavLink onClick={() => props.getMovies('movies', 'top_rated')} to='/movies/top_rated'>Top Rated</NavLink>
        </NavigationItem>
        <NavigationItem title="TV">
            <NavLink onClick={() => props.getMovies('tv', 'popular')} to='/movies/popular-tv'>Popular</NavLink>
            <NavLink onClick={() => props.getMovies('tv', 'airing_today')} to='/movies/airing-today'>Airing Today</NavLink>
            <NavLink onClick={() => props.getMovies('tv', 'on_the_air')} to='/movies/on-today'>On Today</NavLink>
            <NavLink onClick={() => props.getMovies('tv', 'top_rated')} to='/movies/top-rated-tv'>Top Rated</NavLink>
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
