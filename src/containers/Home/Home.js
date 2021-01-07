import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';
import Slide from '../../components/UI/Slide/Slide';
import GenreList from '../../components/GenreList/GenreList';
import * as actions from '../../store/actions/index';

class Home extends Component{
    goDetail = id => {
        this.props.onGetMovieDetail(id);
        this.props.history.push('/detail')
    };

    nextPage = () => this.props.onGetPopularMovie(this.props.page+1);

    previewPage = () => this.props.onGetPopularMovie(this.props.page-1);

    render(){
        return(
            <div className='Home'>
                <div className='Most-Popular'>
                    <Slide
                        filteredPopular={this.props.filteredPopular}
                        clicked={this.goDetail}/>
                </div>
                <div>
                    <GenreList
                        movieList={this.props.popularMovies}
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
        popularMovies:state.movie.popularMovies,
        filteredPopular: state.movie.filteredMostPopular,
        page: state.movie.page,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onGetPopularMovie: value => dispatch(actions.getPopularMovies(value)),
        onGetMovieDetail: movie_id => dispatch(actions.getMovieDetail(movie_id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
