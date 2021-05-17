import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';
import Slide from '../../components/UI/Slide/Slide';
import MovieItems from '../../components/MovieItems/MovieItems';
import * as actions from '../../store/actions/index';

class Home extends Component{

    componentDidMount(){
        this.props.onGetMovies('movie', 'popular', 1);
        this.props.onGetMostPopular();
    };
    
    goDetail = (type, id) => {
        this.props.onGetMovieDetail(type, id);
        this.props.onGetSimilarMovies(type, id);
        this.props.history.push('/detail', {type:'movie'})
    };

    nextPage = () => this.props.onGetMovies('movie', 'popular', this.props.movies.page + 1);

    previewPage = () => this.props.onGetMovies('movie', 'popular', this.props.movies.page - 1);

    render(){
        return(
            <div className='Home'>
                <div className='Most-Popular'>
                    <Slide
                        filteredPopular={this.props.filteredPopular}
                        clicked={this.goDetail}/>
                </div>
                <div className='home-movies'>
                    <MovieItems
                        movieList={this.props.movies.results}
                        page={this.props.movies.page}
                        title='Popular'
                        nextPage={this.nextPage}
                        previewPage={this.previewPage}
                        clicked={this.goDetail}
                    />
                </div>
                <p>{this.props.page}</p>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        movies:state.movie.movies,
        filteredPopular: state.movie.filteredMostPopular
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onGetMovies: (category, movieType, value) => dispatch(actions.getMovies(category, movieType, value)),
        onGetMovieDetail: (type, movie_id) => dispatch(actions.getMovieDetail(type, movie_id)),
        onGetSimilarMovies: (category, movie_id) => dispatch(actions.getSimilarMovies(category, movie_id)),
        onGetMostPopular: () => dispatch(actions.extractMostPopular())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
