import React, { Component } from 'react';
import { SiImdb } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { AiFillInstagram, AiOutlineTwitter,AiFillPlayCircle, AiOutlineLink } from 'react-icons/ai';

import './Detail.css';
import Image from '../../components/UI/Image/Image';
import Button from '../../components/UI/Button/Button';
import Link from '../../components/UI/Link/Link';
import List from '../../components/List/List';

class Detail extends Component {
    render() {
        return (
            <div className='Detail'>
                <div className='Detail-Top'>
                    <div className='Detail-Left'>
                        <Image
                            className='Detail-Poster'
                            width={275}
                            alt='image'
                            src={require('../../assets/poster.jpg').default}
                        />
                    </div>
                    <div className='Detail-Right'>
                        <div className='Name-Container'>
                            <div>
                                <p className='Name'>Mandalorian</p>
                                <p className='Detail-Tag-Line'>Time runs out.</p>
                            </div>
                            <span className='Detail-Release-Date'>2020.05.26 / <AiFillPlayCircle style={{fontSize:11}}/> 150 min</span>
                        </div>
                        <div className='Detail-Average'>
                            <i className='fas fa-star'/>8.7 <div className='Detail-Average-Count'>/503</div>
                        </div>
                        <ul>
                            <li>Action,</li>
                            <li>Fantasy,</li>
                            <li>Drama</li>
                        </ul>
                        <div>
                            <p className='Detail-Title'>Overview</p>
                            <p className='Detail-Overview'>
                                Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.
                            </p>
                        </div>
                        <div style={{display:'flex',width:'50%',justifyContent:'space-between'}}>
                            <div>
                                <p className='Detail-Title'>Original Language</p>
                                <p className='Detail-Info'>English</p>
                            </div>
                            <div>
                                <p className='Detail-Title'>Budged</p>
                                <p className='Detail-Info'>$205,000,000.00</p>
                            </div>
                            <div>
                                <p className='Detail-Title'>Revenue</p>
                                <p className='Detail-Info'>$359,900,000.00</p>
                            </div>
                        </div>
                        <div className='External-Ids-Container'>
                            <div className='External-Id' title='Website'>
                                <Link >
                                    <AiOutlineLink/>
                                </Link>
                            </div>
                            <div className='External-Id' title='IMDb'>
                                <Link>
                                    <SiImdb/>
                                </Link>
                            </div>
                            <div className='External-Id' title='Facebook'>
                                <Link >
                                    <ImFacebook/>
                                </Link>
                            </div>
                            <div className='External-Id' title='Instagram'>
                                <Link >
                                    <AiFillInstagram/>
                                </Link>
                            </div>
                            <div className='External-Id' title='Twitter'>
                                <Link >
                                    <AiOutlineTwitter/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Detail-Bottom'>
                    <div>
                        <List
                            title='Cast'
                            src={require('../../assets/christopherNolan.jpg').default}
                            name='Christopher Nolan'
                            who='Director, Writer'
                        />
                    </div>
                    <div>
                        <List
                            title='Cast'
                            src={require('../../assets/christopherNolan.jpg').default}
                            name='Christopher Nolan'
                            who='Director, Writer'
                        />
                    </div>
                    <div>
                        <List
                            title='Cast'
                            src={require('../../assets/christopherNolan.jpg').default}
                            name='Christopher Nolan'
                            who='Director, Writer'
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default Detail;
