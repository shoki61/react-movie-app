import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SiImdb } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { BsPlayFill } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter,AiFillPlayCircle, AiOutlineLink } from 'react-icons/ai';

import './Detail.css';
import Image from '../../components/UI/Image/Image';
import Link from '../../components/UI/Link/Link';
import List from '../../components/List/List';
import languagesData from '../../data/languages.json';
import Spinner from '../../components/UI/Spinner/Spinner';

class Detail extends Component {

    goPersonalInformation = () => this.props.history.push('/personal-information');

    goGenre = () => this.props.history.push('/genre');

    render() {
        return (
            <div className='Detail'>
                {
                    this.props.movieDetail && this.props.credits
                        ?<div>
                            <div className='Detail-Top'>
                                <div className='Detail-Left'>
                                    <Image
                                        className='Detail-Poster'
                                        alt='image'
                                        src={`https://image.tmdb.org/t/p/w500${this.props.movieDetail.poster_path}`}
                                    />
                                </div>
                                <div className='Detail-Right'>
                                    <div className='Name-Container'>
                                        <div>
                                            <p className='Name'>{this.props.movieDetail.title}</p>
                                            <p className='Detail-Tag-Line'>{this.props.movieDetail.tagline}</p>
                                        </div>
                                        <span className='Detail-Release-Date'>{this.props.movieDetail.release_date} / <AiFillPlayCircle style={{fontSize:11}}/> {this.props.movieDetail.runtime} min</span>
                                    </div>
                                    <div className='Detail-Average'>
                                        <i className='fas fa-star'/>{this.props.movieDetail.vote_average} <div className='Detail-Average-Count'>/{this.props.movieDetail.vote_count}</div>
                                    </div>
                                    <ul>
                                        {
                                            this.props.movieDetail.genres.map(genre => (
                                                <li key={genre.id} onClick={()=> this.goGenre(genre.name)}>{genre.name}<span>,</span></li>
                                            ))
                                        }
                                    </ul>
                                    <div>
                                        <p className='Detail-Title'>Overview</p>
                                        <p className='Detail-Overview'>
                                            {this.props.movieDetail.overview}
                                        </p>
                                    </div>
                                    <div style={{display:'flex',width:'50%',justifyContent:'space-between'}}>
                                        <div>
                                            <p className='Detail-Title'>Original Language</p>
                                            <p className='Detail-Info'>{languagesData.languages.filter(item => item.iso_639_1 === this.props.movieDetail.original_language)[0].english_name}</p>
                                        </div>
                                        <div>
                                            <p className='Detail-Title'>Budged</p>
                                            <p className='Detail-Info'>${this.props.movieDetail.budget}</p>
                                        </div>
                                        <div>
                                            <p className='Detail-Title'>Revenue</p>
                                            <p className='Detail-Info'>${this.props.movieDetail.revenue}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='Detail-Title'>Director</p>
                                        <p className='Detail-Info'>Christopher Nolan</p>
                                    </div>
                                    <div className='External-Ids-Container'>
                                        <div className='External-Id' title='Trailer'>
                                            <Link >
                                                <BsPlayFill/>
                                            </Link>
                                        </div>
                                        <div className='External-Id' title='Website'>
                                            <Link >
                                                <AiOutlineLink/>
                                            </Link>
                                        </div>
                                        <div className='External-Id' title='IMDb'>
                                            <Link url={`https://www.imdb.com/title/${this.props.movieDetail.imdb_id}`}>
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
                                {
                                    this.props.credits.cast.length
                                        ?<div>
                                            <List
                                                clicked={this.goPersonalInformation}
                                                title='Cast'
                                                count={this.props.credits.cast.length}
                                                data={this.props.credits.cast}
                                            />
                                        </div>
                                        :null
                                }
                                {
                                    this.props.credits.crew.length
                                        ?<div>
                                            <List
                                                title='Crew'
                                                count={this.props.credits.crew.length}
                                                data={this.props.credits.crew}
                                            />
                                        </div>
                                        :null
                                }

                                {
                                    this.props.movieDetail.production_companies.length
                                        ?<div>
                                            <List
                                                override='Production-Companies-Logo'
                                                title='Production Companies'
                                                count={this.props.movieDetail.production_companies.length}
                                                productionCompanies={this.props.movieDetail.production_companies}
                                            />
                                        </div>
                                        :null
                                }
                            </div>
                        </div>
                        :<Spinner/>

                }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return{
        movieDetail: state.movie.movieDetail,
        credits: state.movie.credits,
        externalID: state.movie.externalID
    };
};

export default connect(mapStateToProps)(Detail);
