import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {BsArrowRightShort} from 'react-icons/bs'

import './Slide.css';
import img from '../../../assets/poster.jpg';
import img1 from '../../../assets/backdrop.jpg';
import Button from '../../UI/Button/Button';



const slide = props => (
        <div className='slide-container'>
            <Slide>
                <div
                    style={{
                        width:'100%',
                        height:'100%',
                        backgroundImage: `url(${img1})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'right -150px top'
                    }}
                    className='each-slide'
                >
                    <div className='Content'>
                        <div className='Opacity'>
                            <div className='Content-Left'>
                                <div
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundRepeat:'no-repeat',
                                        backgroundSize:'cover'
                                    }}
                                    className='Poster-Image'>
                                </div>
                            </div>
                            <div className='Content-Right'>
                                <p className='Movie-Name'>The Mandalorian <span className='Release-Date'> (2020)</span></p>
                                <div className='Vote-Container'>
                                    <p className='Star-Icon'>
                                        <i className='fas fa-star'> </i>
                                    </p>
                                    <div>
                                        <p className='Vote-Average'>8.2<sup className='Vote-Count'>(536)</sup></p>
                                    </div>
                                </div>
                                <Button btnType='Go-Detail'>
                                    Go Detail <BsArrowRightShort style={{fontSize:20}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width:'100%',
                        height:'100%',
                        background: `url(${img1}) no-repeat`,
                        backgroundSize:'cover',
                        backgroundPosition:'right -150px top'
                    }}
                    className='each-slide'
                >
                    <div className='Content'>
                        <div className='Opacity'>
                            <div className='Content-Left'>
                                <div
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundRepeat:'no-repeat',
                                        backgroundSize:'cover'
                                    }}
                                    className='Poster-Image'>
                                </div>
                            </div>
                            <div className='Content-Right'>
                                <p className='Movie-Name'>The Mandalorian <span className='Release-Date'> (2020)</span></p>
                                <div className='Vote-Container'>
                                    <p className='Star-Icon'>
                                        <i className='fas fa-star'> </i>
                                    </p>
                                    <div>
                                        <p className='Vote-Average'>8.2<sup className='Vote-Count'>(536)</sup></p>
                                    </div>
                                </div>
                                <Button btnType='Go-Detail'>
                                    Go Detail <BsArrowRightShort style={{fontSize:20}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
);

export default slide;
