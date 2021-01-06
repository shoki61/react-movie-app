import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {BsArrowRightShort} from 'react-icons/bs'

import './Slide.css';
import Button from '../../UI/Button/Button';
import genresData from '../../../helper/genres.json';



const slide = props => {
    console.log(props.filteredPopular)
    return(
        <div>
            <div className='slide-container'>
                <p>{JSON.stringify(props.filteredPopular)}</p>
                ********************
                <p>{JSON.stringify(genresData.genres[0].name)}</p>
                {
                    props.filteredPopular ?
                        <Slide>
                            {
                                props.filteredPopular.map(item => (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url('https://image.tmdb.org/t/p/w500${item.movie.backdrop_path}')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'right -150px top'
                                        }}
                                        className='each-slide'
                                    >
                                        <div className='Content'>
                                            <div className='Opacity'>
                                                <div className='Content-Left'>
                                                    <div
                                                        style={{
                                                            backgroundImage: `url('https://image.tmdb.org/t/p/w500${item.movie.poster_path}')`,
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: 'cover'
                                                        }}
                                                        className='Poster-Image'>
                                                    </div>
                                                </div>
                                                <div className='Content-Right'>
                                                    <p className='Movie-Name'>{item.movie.title} <span className='Release-Date'> ({item.movie.release_date.slice(0,4)})</span></p>
                                                    <div className='Vote-Container'>
                                                        <p className='Star-Icon'>
                                                            <i className='fas fa-star'/>
                                                        </p>
                                                        <div>
                                                            <p className='Vote-Average'>{item.movie.vote_average}<sup className='Vote-Count'>({item.movie.vote_count})</sup></p>
                                                        </div>
                                                    </div>
                                                    <p className='Overview'>
                                                        {item.movie.overview}
                                                    </p>
                                                    <ul>
                                                        {
                                                            item.movie.genre_ids.map(genre=>(
                                                                <li className='Genres'>{genresData.genres.filter(item => item.id === genre)[0].name}<span>,</span></li>
                                                            ))
                                                        }
                                                    </ul>
                                                    <Button btnType='Go-Detail'>
                                                        Go Detail <BsArrowRightShort style={{fontSize: 20}}/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slide>
                        : <p>yok</p>
                }
            </div>
        </div>
    )
};

export default slide;
