import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BackToTop from 'react-custom-back-to-top-button';

import './App.css';
import Header from "./containers/Header/Header";
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';
import PersonalInformation from "./containers/PersonalInformation/PersonalInformation";
import MovieList from "./containers/MovieList/MovieList";
class App extends  Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/detail' component={Detail}/>
                <Route path='/personal-information' component={PersonalInformation}/>
                <Route path='/movies/*' component={MovieList}/>
                <BackToTop className='back-to-top'/>
            </div>
        );
    };
};

export default App;











