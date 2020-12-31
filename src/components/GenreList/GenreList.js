import React from 'react';

import './GenreList.css';
import PageButton from '../UI/PageButtons/PageButtons';
import Image from '../UI/Image/Image';

const genreList = props => (
    <div className='Container'>
        <p className='Title'>{props.title}</p>
        <div className='List-Container'>
            <div onClick={()=> props.clicked()} className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star' />
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
            <div className='Movie-Container'>
                <Image
                    src={require('../../assets/poster.jpg').default}
                    alt='image'
                    className='Movie-List-Poster'
                />
                <div className='Movie-Vote-Container'>
                    <p className='Movie-Star-Icon'>
                        <i className='fas fa-star'> </i>
                    </p>
                    <div>
                        <p className='Movie-Vote-Average'>8.2</p>
                    </div>
                </div>
                <p className='Movie-Title'>The Mandalorian</p>
            </div>
        </div>
        <PageButton/>
    </div>
);

export default genreList;
