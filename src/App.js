import React, { Component } from 'react';


import './App.css';
import './container/Header/Header';
import Header from "./container/Header/Header";

class App extends  Component{
  render(){
    return (
        <div className="App">
            <Header/>
        </div>
    );
  };
};

export default App;
