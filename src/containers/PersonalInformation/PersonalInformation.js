import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AiFillInstagram, AiOutlineLink, AiOutlineTwitter} from "react-icons/ai";
import {SiImdb} from "react-icons/si";
import {ImFacebook} from "react-icons/im";

import './PersonalInformation.css';
import Image from '../../components/UI/Image/Image';
import Link from "../../components/UI/Link/Link";
import PersonalInfoList from '../../components/PersonalInformationList/PersonalInformationList';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class PersonalInformation extends Component{
    goDetail = id => {
        this.props.onGetMovieDetail(id);
        this.props.onGetSimilarMovies(id);
        this.props.history.push('/detail')
    };
    render(){
        const personalData = this.props.personalData?.[0].personalInfo;
        const externalID = this.props.personalData?.[0].externalID;
        return(
            <div className='Personal-Information'>
                {
                    this.props.personalData
                        ?<div>
                            <div className='Personal-Information-Top'>
                                <div className='Person-Image-Container'>
                                    <Image
                                        className='Person-Image'
                                        src={`https://image.tmdb.org/t/p/w500${personalData.profile_path}`}
                                    />
                                </div>
                                <div className='Person-Info-Container'>
                                    <p className='Person-Name'>{personalData.name}<span className='Person-Job'>({personalData.known_for_department})</span></p>
                                    <p className='Person-Birthday'>{personalData.birthday}</p>
                                    <div>
                                        <p className='Person-Title'>Biography</p>
                                        <p className='Person-Info'>
                                            {personalData.biography}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Place of Birth</p>
                                        <p className='Person-Info'>{personalData.place_of_birth}</p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Gender</p>
                                        <p className='Person-Info'>{personalData.gender === 1 ? 'Female' : 'Male'}</p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Known Credits</p>
                                        <p className='Person-Info'>{this.props.movieCredits.cast?.length}</p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Links</p>
                                        <div className='Person-ExternalID-Container'>
                                            {
                                                personalData.homepage
                                                    ?<div className='Person-External-Id' title='Website'>
                                                        <Link url={personalData.homepage}>
                                                            <AiOutlineLink/>
                                                        </Link>
                                                    </div>
                                                    :null
                                            }
                                            {
                                                personalData.imdb_id
                                                    ?<div className='Person-External-Id' title='IMDb'>
                                                        <Link url={`https://www.imdb.com/name/${externalID.imdb_id}`}>
                                                            <SiImdb/>
                                                        </Link>
                                                    </div>
                                                    :null
                                            }
                                            {
                                                externalID.facebook_id
                                                    ?<div className='Person-External-Id' title='Facebook'>
                                                        <Link url={`https://www.facebook.com/${externalID.facebook_id}`}>
                                                            <ImFacebook/>
                                                        </Link>
                                                    </div>
                                                    :null
                                            }
                                            {
                                                externalID.instagram_id
                                                    ?<div className='Person-External-Id' title='Instagram'>
                                                        <Link url={`https://www.instagram.com/${externalID.instagram_id}`}>
                                                            <AiFillInstagram/>
                                                        </Link>
                                                    </div>
                                                    :null
                                            }
                                            {
                                                externalID.twitter_id
                                                    ?<div className='Person-External-Id' title='Twitter'>
                                                        <Link url={`https://twitter.com/${externalID.twitter_id}`}>
                                                            <AiOutlineTwitter/>
                                                        </Link>
                                                    </div>
                                                    :null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Personal-Information-Bottom'>
                                { this.props.movieCredits.cast?.length ? <PersonalInfoList
                                    count={this.props.movieCredits.cast.length}
                                    title='Cast'
                                    data={this.props.movieCredits.cast}
                                    clicked={this.goDetail}
                                />:null}
                                { this.props.movieCredits.crew?.length ? <PersonalInfoList
                                    count={this.props.movieCredits.crew.length}
                                    title='Crew'
                                    data={this.props.movieCredits.crew}
                                    clicked={this.goDetail}
                                />:null}
                            </div>
                        </div>
                        :<Spinner/>
                }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        personalData: state.person.personalInformation,
        movieCredits: state.person.personalMovieCredits,
        TVCredits: state.person.personalTVCredits
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetMovieDetail: id => dispatch(actions.getMovieDetail(id)),
        onGetSimilarMovies: id => dispatch(actions.getSimilarMovies(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation);
