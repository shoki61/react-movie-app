import React, { Component } from 'react';
import {FaGithub} from 'react-icons/fa';

import './Header.css';
import Logo from '../../components/Logo/Logo';
import Navigations from '../../components/Navigations/Navigations';
import Link from '../../components/UI/Link/Link';
import Input from '../../components/UI/Input/Input';

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <div className='Header-Left-Container'>
                    <Logo/>
                    <Navigations/>
                    <Input inputType='Search'/>
                </div>
                <div className='Header-Right-Container'>
                    <Link title='Github Repository' size={23} color='#414141' url='https://github.com/shoki61/react-movie-app'>
                        <FaGithub/>
                    </Link>
                    <Link title='TMDB Website' url='https://www.themoviedb.org'>
                        <img height='20' src={require('../../assets/referenceLogo.png').default} alt='TMDB'/>
                    </Link>
                </div>
            </div>
        );
    };
};

export default Header;
