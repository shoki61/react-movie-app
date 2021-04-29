import React, { Component } from 'react';
import { connect } from 'react-redux';


import './MovieList.css';
import MovieItem from '../../components/MovieItems/MovieItems';
import * as actions from '../../store/actions/index';

class MovieList extends Component{

    

    movieType = this.props.match.params[0];

    genre = null;

    category = '';

    componentDidUpdate(){
        this.genre = this.props.history.location.state?.genre;
        this.category = this.props.history.location.state?.category;
        console.log(this.category)
    }

    goDetail = (type, id) => {
        console.log(type)
        if(type === 'person') {
            this.props.onGetPersonalInformation(id);
            this.props.history.push('/personal-information');
        } else{
            this.props.onGetMovieDetail(type, id);
            this.props.onGetSimilarMovies(type, id);
            this.props.history.push('/detail',{type});
        };
    };

    nextPage = () => {
        if(this.genre) this.props.onGetMoviesByGenre(this.genre, this.props.movies.page + 1);
        else this.props.onGetMovies(this.category, this.movieType, this.props.movies.page + 1);
        console.log(this.category + '*' + this.movieType + '*' + this.props.movies.page);
    };
    previewPage = () => {
        if(this.genre) this.props.onGetMoviesByGenre(this.genre, this.props.movies.page - 1);
        else this.props.onGetMovies(this.category, this.movieType, this.props.movies.page - 1);
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
        movies: state.movie.movies,
        result: state.movie.searchResult
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onGetMovies: (category, movieType, page) => dispatch(actions.getMovies(category, movieType, page)),
        onGetMovieDetail: (category, id) => dispatch(actions.getMovieDetail(category, id)),
        onGetSimilarMovies: (category, id) => dispatch(actions.getSimilarMovies(category, id)),
        onGetMoviesByGenre: (id, page) => dispatch(actions.getMoviesByGenre(id, page)),
        onGetPersonalInformation: id => dispatch(actions.getPersonalInformation(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
