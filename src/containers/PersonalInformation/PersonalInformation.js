import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AiFillInstagram, AiOutlineLink, AiOutlineTwitter} from "react-icons/ai";
import {SiImdb} from "react-icons/si";
import {ImFacebook} from "react-icons/im";

import './PersonalInformation.css';
import Image from '../../components/UI/Image/Image';
import Link from "../../components/UI/Link/Link";
import List from '../../components/List/List';
import Spinner from '../../components/UI/Spinner/Spinner';

class PersonalInformation extends Component{
    goDetail = () => this.props.history.push('/detail');
    render(){
        return(
            <div className='Personal-Information'>
                {
                    this.props.personalInfo
                        ?<div>
                            <div className='Personal-Information-Top'>
                                <div className='Person-Image-Container'>
                                    <Image
                                        className='Person-Image'
                                        src={`https://image.tmdb.org/t/p/w500${this.props.personalInfo.profile_path}`}
                                    />
                                </div>
                                <div className='Person-Info-Container'>
                                    <p className='Person-Name'>{this.props.personalInfo.name}<span className='Person-Job'>({this.props.personalInfo.known_for_department})</span></p>
                                    <p className='Person-Birthday'>{this.props.personalInfo.birthday}</p>
                                    <div>
                                        <p className='Person-Title'>Biography</p>
                                        <p className='Person-Info'>
                                            {this.props.personalInfo.biography}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Place of Birth</p>
                                        <p className='Person-Info'>{this.props.personalInfo.place_of_birth}</p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Gender</p>
                                        <p className='Person-Info'>{this.props.personalInfo.gender === 1 ? 'Female' : 'Male'}</p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Known Credits</p>
                                        <p className='Person-Info'>47</p>
                                    </div>
                                    <div>
                                        <p className='Person-Title'>Links</p>
                                        <div className='Person-ExternalID-Container'>
                                            <div className='Person-External-Id' title='Website'>
                                                <Link >
                                                    <AiOutlineLink/>
                                                </Link>
                                            </div>
                                            <div className='Person-External-Id' title='IMDb'>
                                                <Link>
                                                    <SiImdb/>
                                                </Link>
                                            </div>
                                            <div className='Person-External-Id' title='Facebook'>
                                                <Link >
                                                    <ImFacebook/>
                                                </Link>
                                            </div>
                                            <div className='Person-External-Id' title='Instagram'>
                                                <Link >
                                                    <AiFillInstagram/>
                                                </Link>
                                            </div>
                                            <div className='Person-External-Id' title='Twitter'>
                                                <Link >
                                                    <AiOutlineTwitter/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Personal-Information-Bottom'>
                                {/*<List*/}
                                {/*    clicked={this.goDetail}*/}
                                {/*    count={12}*/}
                                {/*    title='Known For'*/}
                                {/*    src={require('../../assets/poster.jpg').default}*/}
                                {/*    override='Person-Movie'*/}
                                {/*    name='Tenet'*/}
                                {/*/>*/}
                                {/*<List*/}
                                {/*    count={58}*/}
                                {/*    title='Movies'*/}
                                {/*    src={require('../../assets/poster.jpg').default}*/}
                                {/*    override='Person-Movie'*/}
                                {/*    name='Tenet'*/}
                                {/*/>*/}
                                {/*<List*/}
                                {/*    count={9}*/}
                                {/*    title='TV Shows'*/}
                                {/*    src={require('../../assets/poster.jpg').default}*/}
                                {/*    override='Person-Movie'*/}
                                {/*    name='Tenet'*/}
                                {/*/>*/}
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
        personalInfo: state.person.personalInformation
    };
};

export default connect(mapStateToProps)(PersonalInformation);
