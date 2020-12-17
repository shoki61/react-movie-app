import React, { Component } from 'react';

import './Header.css';
import Logo from '../../component/Logo/Logo';
import Navigations from '../../component/Navigations/Navigations';

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <Logo/>
                <Navigations/>
            </div>
        );
    };
};

export default Header;
