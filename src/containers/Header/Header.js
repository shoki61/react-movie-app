import React, { Component } from 'react';
import {FaGithub} from 'react-icons/fa';

import './Header.css';
import Logo from '../../components/Logo/Logo';
import Navigations from '../../components/Navigations/Navigations';
import Link from '../../components/UI/Link/Link';

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <Logo/>
                <Navigations/>
                <Link title='Github Repository' size={23} color='#414141' url='https://github.com/shoki61/react-movie-app'>
                    <FaGithub/>
                </Link>
                <Link>
                    TMDB
                </Link>
            </div>
        );
    };
};

export default Header;
