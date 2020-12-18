import React, { Component } from 'react';

import './Header.css';
import Logo from '../../components/Logo/Logo';
import Navigations from '../../components/Navigations/Navigations';

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <Logo/>
                <Navigations/>
                <div>github link</div>
                <div>TMDB reference</div>
            </div>
        );
    };
};

export default Header;
