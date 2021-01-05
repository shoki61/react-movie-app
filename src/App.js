import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';


import './App.css';
import Header from "./containers/Header/Header";
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';
import PersonalInformation from "./containers/PersonalInformation/PersonalInformation";
import Genre from "./containers/Genre/Genre";

class App extends  Component{
    componentDidMount() {
        this.props.onGetPopularMovies();
    };

    render(){
    return (
        <div className="App">
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/detail' component={Detail}/>
            <Route path='/personal-information' component={PersonalInformation}/>
            <Route path='/genre' component={Genre}/>
        </div>
    );
  };
};


const mapDispatchToProps = dispatch => {
    return{
        onGetPopularMovies: () => dispatch(actions.getPopularMovies())
    };
};

export default connect(null,mapDispatchToProps)(App);
