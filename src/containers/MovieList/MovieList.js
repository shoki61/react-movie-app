import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MovieList.css';
import MovieItem from '../../components/MovieItem/MovieItem';

class MovieList extends Component{
    goDetail = () => this.props.history.push('/detail');
    componentDidMount(){
        console.log(this.props.movies);
    }

    nextPage(){ }
    previewPage(){ }
    render(){
        return(
            <div className='movie-list'>
                <MovieItem
                    clicked={this.goDetail}
                    title='Action'
                    movieList={this.props.movies.results}
                    page={this.props.movies.page}
                    nextPage={this.nextPage}
                    previewPage={this.previewPage}
                />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    };
};

export default connect(mapStateToProps)(MovieList);
