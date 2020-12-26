import React, { Component } from 'react';

import './Detail.css';
import Image from '../../components/UI/Image/Image';
import Button from '../../components/UI/Button/Button';

class Detail extends Component {
    render() {
        return (
            <div className='Detail'>
                <div className='Detail-Left'>
                    <Image
                        className='Detail-Poster'
                        width={275}
                        alt='image'
                        src={require('../../assets/poster.jpg').default}
                    />
                </div>
                <div className='Detail-Right'>
                    <p className='Name'>Mandalorian</p>
                    <div className='Detail-Average'><i className='fas fa-star'> </i>8.7</div>
                    <ul>
                        <li>Action,</li>
                        <li>Fantasy,</li>
                        <li>Drama</li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default Detail;
