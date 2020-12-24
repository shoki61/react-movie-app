import React, { Component } from 'react';

import './Home.css';
import Slide from '../../components/UI/Slide/Slide';
import MovieList from '../../components/MovieList/MovieList';

class Home extends Component{
    render(){
        return(
            <div className='Home'>
                <div className='Most-Popular'>
                    <Slide/>
                </div>
                <div>
                    <MovieList/>
                </div>
            </div>
        );
    };
};

export default Home;
