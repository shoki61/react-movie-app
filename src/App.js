import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// yorum ekledim

import './App.css';
import Header from "./containers/Header/Header";
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';
import PersonalInformation from "./containers/PersonalInformation/PersonalInformation";
import MovieList from "./containers/MovieList/MovieList";
// birşeyi değiştirdim
class App extends  Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/detail' component={Detail}/>
                <Route path='/personal-information' component={PersonalInformation}/>
                <Route path='/movies/*' component={MovieList}/>
            </div>
        );
    };
};

export default App;
