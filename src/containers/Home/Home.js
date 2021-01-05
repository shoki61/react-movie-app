import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';
import Slide from '../../components/UI/Slide/Slide';
import GenreList from '../../components/GenreList/GenreList';

class Home extends Component{
    goDetail = () => this.props.history.push('/detail');

    render(){
        return(
            <div className='Home'>
                <div className='Most-Popular'>
                    <Slide clicked={this.goDetail}/>
                </div>
                <div>
                    <GenreList
                        popularList={this.props.popularMovies}
                        title='Popular'
                        clicked={this.goDetail}
                    />
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        popularMovies:state.movie.popularMovies
    };
};

export default connect(mapStateToProps)(Home);
