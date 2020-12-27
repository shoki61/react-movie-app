import React, { Component } from 'react';


import './App.css';
import Header from "./containers/Header/Header";
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';

class App extends  Component{
  render(){
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Detail/>
        </div>
    );
  };
};

export default App;
