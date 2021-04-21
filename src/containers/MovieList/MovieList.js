import React, { Component } from 'react';

import './MovieList.css';
import MovieItem from '../../components/MovieItem/MovieItem';

class MovieList extends Component{
    goDetail = () => this.props.history.push('/detail');
    render(){
        return(
            <div className='movie-list'>
                <MovieItem
                    clicked={this.goDetail}
                    title='Action'
                />
            </div>
        );
    };
};

export default MovieList;
