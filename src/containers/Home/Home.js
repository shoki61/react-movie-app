import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';
import Slide from '../../components/UI/Slide/Slide';
import MovieItem from '../../components/MovieItem/MovieItem';
import * as actions from '../../store/actions/index';

class Home extends Component{

    componentDidMount(){
        this.props.onGetMovies('movie', 'popular', 1);
        this.props.onGetMostPopular();
    };
    
    goDetail = id => {
        this.props.onGetMovieDetail(id);
        this.props.onGetSimilarMovies(id);
        this.props.history.push('/detail')
    };

    nextPage = () => this.props.onGetMovies('popular', this.props.movies.page + 1);

    previewPage = () => this.props.onGetMovies('popular', this.props.movies.page - 1);

    render(){
        return(
            <div className='Home'>
                <div className='Most-Popular'>
                    <Slide
                        filteredPopular={this.props.filteredPopular}
                        clicked={this.goDetail}/>
                </div>
                <div style={{width:'70%',margin:'auto'}}>
                    <MovieItem
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
        onGetMovieDetail: movie_id => dispatch(actions.getMovieDetail(movie_id)),
        onGetSimilarMovies: movie_id => dispatch(actions.getSimilarMovies(movie_id)),
        onGetMostPopular: () => dispatch(actions.extractMostPopular())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
