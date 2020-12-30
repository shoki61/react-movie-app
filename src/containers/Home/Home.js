import React, { Component } from 'react';

import './Home.css';
import Slide from '../../components/UI/Slide/Slide';
import MovieList from '../../components/MovieList/MovieList';

class Home extends Component{
    goDetail = () => this.props.history.push('/detail')
    render(){
        return(
            <div className='Home'>
                <div className='Most-Popular'>
                    <Slide clicked={this.goDetail}/>
                </div>
                <div>
                    <MovieList clicked={this.goDetail}/>
                </div>
            </div>
        );
    };
};

export default Home;
