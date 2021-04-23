import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

const logo = () => (
    <Link to='/' className='Logo'>
        <img src={require('../../assets/logo.png').default} alt='logo'/>
        <div>
            <p className='Logo-Name'>SHOKIDEV</p>
            <p className='App-Name'>movie</p>
        </div>
    </Link>
);

export default logo;
