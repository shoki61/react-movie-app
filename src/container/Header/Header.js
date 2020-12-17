import React, { Component } from 'react';

import './Header.css';
import Logo from '../../component/Logo/Logo';

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <Logo/>
            </div>
        );
    };
};

export default Header;
