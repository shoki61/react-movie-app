import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigations.css';
import NavigationItem from './NavigationItem/NavigationItem';
import genresData from '../../data/genres.json';

const navigations = props => (
    <div className='Navigation'>
        <NavigationItem title='Movies'>
            <NavLink onClick={() => props.getMovies('movie', 'popular')} to={{pathname:'/movies/popular', state:{category:'movie'}}}>Popular</NavLink>
            <NavLink onClick={() => props.getMovies('movie', 'now_playing')} to={{pathname:'/movies/now_playing', state:{category:'movie'}}}>Now Playing</NavLink>
            <NavLink onClick={() => props.getMovies('movie', 'upcoming')} to={{pathname:'/movies/upcoming', state:{category:'movie'}}}>Upcoming</NavLink>
            <NavLink onClick={() => props.getMovies('movie', 'top_rated')} to={{pathname:'/movies/top_rated', state:{category:'movie'}}}>Top Rated</NavLink>
        </NavigationItem>
        <NavigationItem title="TV">
            <NavLink onClick={() => props.getMovies('tv', 'popular')} to={{pathname:'/movies/popular', state:{category:'tv'}}}>Popular</NavLink>
            <NavLink onClick={() => props.getMovies('tv', 'airing_today')} to={{pathname:'/movies/airing_today', state:{category:'tv'}}}>Airing Today</NavLink>
            <NavLink onClick={() => props.getMovies('tv', 'on_the_air')} to={{pathname:'/movies/on_the_air', state:{category:'tv'}}}>On Today</NavLink>
            <NavLink onClick={() => props.getMovies('tv', 'top_rated')} to={{pathname:'/movies/top_rated', state:{category:'tv'}}}>Top Rated</NavLink>
        </NavigationItem>
        <NavigationItem title='Genres'>
            {
                genresData.genres.map(genre => (
                    <NavLink onClick={() => props.getMovieByGenre(genre.id)} to={{pathname:`/movies/${genre.name}`, state:{genre:genre.id}}} key={genre.id}>{genre.name}</NavLink>
                ))
            }
        </NavigationItem>
    </div>
);

export default navigations;
