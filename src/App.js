import React, { Component } from 'react';


import './App.css';
import Header from "./containers/Header/Header";
import Home from './containers/Home/Home';
import Detail from './containers/Detail/Detail';
import PersonalInformation from "./containers/PersonalInformation/PersonalInformation";

class App extends  Component{
  render(){
    return (
        <div className="App">
            <Header/>
            {/*<Home/>*/}
            <Detail/>
            {/*<PersonalInformation/>*/}
        </div>
    );
  };
};

export default App;
