import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SiImdb } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { BsPlayFill } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter,AiFillPlayCircle, AiOutlineLink } from 'react-icons/ai';

import './Detail.css';
import Image from '../../components/UI/Image/Image';
import Link from '../../components/UI/Link/Link';
import languagesData from '../../data/languages.json';
import Spinner from '../../components/UI/Spinner/Spinner';
import MovieItems from '../../components/MovieItems/MovieItems';
import * as actions from '../../store/actions/index';
import PersonList from './PersonList/PersonList';

class Detail extends Component {
    state = {
        type: this.props.history.location.state
    }
    goPersonalInformation = id => {
        this.props.onGetPersonalInformation(id);
        this.props.history.push('/personal-information');
    };
    goGenre = () => this.props.history.push('/genre');

    changeMovieDetail = (type, id) => {
        this.props.onGetMovieDetail(type, id);
        this.props.onGetSimilarMovies(type, id);
        this.props.onGetPersonalInformation(id);
    };
    render() {
        const { type } = this.state.type;
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
                                            <p className='Name'>{this.props.movieDetail.title ?? this.props.movieDetail.name}</p>
                                            <p className='Detail-Tag-Line'>{this.props.movieDetail.tagline}</p>
                                        </div>
                                        <span className='Detail-Release-Date'>{this.props.movieDetail.release_date ?? this.props.movieDetail.first_air_date} / <AiFillPlayCircle style={{fontSize:11}}/> {this.props.movieDetail.runtime ?? this.props.movieDetail.episode_run_time[0]} min</span>
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
                                        <p className='Detail-Title'>Overview {this.props.movieDetail.id}</p>
                                        <p className='Detail-Overview'>
                                            {this.props.movieDetail.overview}
                                        </p>
                                    </div>
                                    <div style={{display:'flex',width:'50%',justifyContent:'space-between'}}>
                                        <div>
                                            <p className='Detail-Title'>Original Language</p>
                                            <p className='Detail-Info'>{languagesData.languages.filter(item => item.iso_639_1 === this.props.movieDetail.original_language)[0].english_name}</p>
                                        </div>
                                        {type === 'movie' && <div>
                                            <p className='Detail-Title'>Budged</p>
                                            <p className='Detail-Info'>${this.props.movieDetail.budget ?? 0}</p>
                                        </div>}
                                        {type === 'movie' && <div>
                                            <p className='Detail-Title'>Revenue</p>
                                            <p className='Detail-Info'>${this.props.movieDetail.revenue ?? 0}</p>
                                        </div>}
                                    </div>
                                    <div>
                                        <p className='Detail-Title'>{type === 'movie' ? 'Director' : 'Creator'}</p>
                                        <p className='Detail-Info'>
                                            {type === 'movie' ? this.props.credits.crew.find(item => item.job === 'Director')?.name : this.props.movieDetail?.created_by?.[0]?.name ?? 'Unknown'}
                                        </p>
                                    </div>
                                    {
                                        this.props.externalID ?
                                            <div className='External-Ids-Container'>
                                                <div className='External-Id' title='Trailer'>
                                                    <Link >
                                                        <BsPlayFill/>
                                                    </Link>
                                                </div>
                                                {
                                                    this.props.movieDetail.homepage
                                                        ?<div className='External-Id' title='Website'>
                                                            <Link url={`${this.props.movieDetail.homepage}`}>
                                                                <AiOutlineLink/>
                                                            </Link>
                                                        </div>
                                                        :null
                                                }
                                                {
                                                    this.props.externalID.imdb_id
                                                        ?<div className='External-Id' title='IMDb'>
                                                            <Link url={`https://www.imdb.com/title/${this.props.externalID.imdb_id}`}>
                                                                <SiImdb/>
                                                            </Link>
                                                        </div>
                                                        :null
                                                }
                                                {
                                                    this.props.externalID.facebook_id
                                                        ?<div className='External-Id' title='Facebook'>
                                                            <Link url={`https://www.facebook.com/${this.props.externalID.facebook_id}`}>
                                                                <ImFacebook/>
                                                            </Link>
                                                        </div>
                                                        :null
                                                }
                                                {
                                                    this.props.externalID.instagram_id
                                                        ?<div className='External-Id' title='Instagram'>
                                                            <Link url={`https://www.instagram.com/${this.props.externalID.instagram_id}`}>
                                                                <AiFillInstagram/>
                                                            </Link>
                                                        </div>
                                                        :null
                                                }
                                                {
                                                    this.props.externalID.twitter_id
                                                        ?<div className='External-Id' title='Twitter'>
                                                            <Link url={`https://twitter.com/${this.props.externalID.twitter_id}`}>
                                                                <AiOutlineTwitter/>
                                                            </Link>
                                                        </div>
                                                        :null
                                                }
                                            </div>
                                            :null
                                    }
                                </div>
                            </div>
                            <div className='Detail-Bottom'>  
                                {this.props.credits.cast?.length && <PersonList clicked={this.goPersonalInformation} title='Cast' data={this.props.credits.cast}/>}
                                {this.props.credits.crew?.length && <PersonList clicked={this.goPersonalInformation} title='Crew' data={this.props.credits.crew}/>}
                            </div>
                            { this.props.similarMovies.results?.length &&
                                <div style={{width: '80%', margin:'auto'}}>
                                    <MovieItems
                                        movieList={this.props.similarMovies.results}
                                        title='Similar'
                                        clicked={this.changeMovieDetail}
                                    />
                                </div>
                            }
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
        externalID: state.movie.externalID,
        similarMovies: state.movie.similarMovies,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onGetPersonalInformation: id => dispatch(actions.getPersonalInformation(id)),
        onGetMovieDetail:(category, movie_id) => dispatch(actions.getMovieDetail(category, movie_id)),
        onGetSimilarMovies:(category, movie_id) => dispatch(actions.getSimilarMovies(category, movie_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
