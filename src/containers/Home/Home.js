import React, { Component } from 'react';

import './Home.css';
import Slide from '../../components/UI/Slide/Slide';

class Home extends Component{
    render(){
        return(
            <div className='Home'>
                <div className='Most-Popular'>
                    <Slide/>
                </div>
            </div>
        );
    };
};

export default Home;
