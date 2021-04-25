import React, { Component } from 'react';
import { connect } from 'react-redux';


import './MovieList.css';
import MovieItem from '../../components/MovieItem/MovieItem';
import * as actions from '../../store/actions/index';

class MovieList extends Component{

    movieType = this.props.match.params[0];

    goDetail = () => this.props.history.push('/detail');

    nextPage = () => {
        this.props.onGetMovies(this.movieType, this.props.movies.page + 1);
    };
    previewPage = () => {
        this.props.onGetMovies(this.movieType, this.props.movies.page - 1);
    };
    render(){
        this.movieType = this.props.match.params[0];
        const title = this.props.match.params[0].replace(/[^a-z|]/g, ' ');
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
        onGetMovies: (movieType, page) => dispatch(actions.getMovies(movieType, page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
