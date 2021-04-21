import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';


import './App.css';
import Header from "./containers/Header/Header";
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';
import PersonalInformation from "./containers/PersonalInformation/PersonalInformation";
import MovieList from "./containers/MovieList/MovieList";

class App extends  Component{
    componentDidMount() {
        this.props.onGetPopularMovies(1);
        this.props.onGetMostPopular();
    };

    render(){
    return (
        <div className="App">
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/detail' component={Detail}/>
            <Route path='/personal-information' component={PersonalInformation}/>
            <Route path='/genre' component={MovieList}/>
        </div>
    );
  };
};

const mapDispatchToProps = dispatch => {
    return{
        onGetPopularMovies: value => dispatch(actions.getPopularMovies(value)),
        onGetMostPopular: () => dispatch(actions.extractMostPopular())
    };
};

export default connect(null,mapDispatchToProps)(App);
