import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './MostPopular.css';
import img from '../../assets/backdrop.jpg';
import Side from '../Slide/Slide';

const slideImages = [
    '../../assets/backdrop.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
];


const mostPopular = props => (
    <div className='Most-Popular'>
        <div className='slide-container'>
            <Slide>
                <div
                    style={{
                        width:'100%',
                        height:'100%',
                        backgroundImage: `url(${img})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover'
                    }}
                     className='each-slide'
                >
                    <div className='Content'>
                        <div className='Opacity'>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width:'100%',
                        height:'100%',
                        background: `url(${img}) no-repeat`,
                        backgroundSize:'cover'
                    }}
                    className='each-slide'
                >
                    <div className='Opacity'> </div>
                </div>
            </Slide>
        </div>
    </div>
);

export default mostPopular;
