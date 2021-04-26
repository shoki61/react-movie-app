import React, { Component } from 'react';
import { connect } from 'react-redux';


import './MovieList.css';
import MovieItem from '../../components/MovieItem/MovieItem';
import * as actions from '../../store/actions/index';

class MovieList extends Component{

    movieType = this.props.match.params[0];

    goDetail = (type, id) => {
        this.props.onGetMovieDetail(type, id);
        this.props.onGetSimilarMovies(type, id)
        this.props.history.push('/detail',{type});
    };

    nextPage = () => {
        this.props.onGetMovies(this.movieType, this.props.movies.page + 1);
    };
    previewPage = () => {
        this.props.onGetMovies(this.movieType, this.props.movies.page - 1);
    };
    render(){
        this.movieType = this.props.match.params[0];
        const title = this.props.match.params[0].replace(/[^a-zA-Z|]/g, ' ');
        return(
            <div className='movie-list'>
                <MovieItem
                    clicked={this.goDetail}
                    title={title}
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

const mapDispatchToProps = dispatch => {
    return{
        onGetMovies: (movieType, page) => dispatch(actions.getMovies(movieType, page)),
        onGetMovieDetail: (category, id) => dispatch(actions.getMovieDetail(category, id)),
        onGetSimilarMovies: (category, id) => dispatch(actions.getSimilarMovies(category, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
