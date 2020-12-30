import React, { Component } from 'react';
import {AiFillInstagram, AiOutlineLink, AiOutlineTwitter} from "react-icons/ai";
import {SiImdb} from "react-icons/si";
import {ImFacebook} from "react-icons/im";

import './PersonalInformation.css';
import Image from '../../components/UI/Image/Image';
import Link from "../../components/UI/Link/Link";
import List from '../../components/List/List';

class PersonalInformation extends Component{
    goDetail = () => this.props.history.push('/detail');
    render(){
        return(
            <div className='Personal-Information'>
                <div className='Personal-Information-Top'>
                    <div className='Person-Image-Container'>
                        <Image
                            className='Person-Image'
                            src={require('../../assets/christopherNolan.jpg').default}
                        />
                    </div>
                    <div className='Person-Info-Container'>
                        <p className='Person-Name'>Christopher Nolan<span className='Person-Job'>(Directing)</span></p>
                        <p className='Person-Birthday'>1970-07-30</p>
                        <div>
                            <p className='Person-Title'>Biography</p>
                            <p className='Person-Info'>
                                Christopher Edward Nolan, CBE (born 30 July 1970) is a British-American film director, screenwriter, and producer. He was born in Westminster, London, England and holds both British and American citizenship due to his American mother. He is known for writing and directing critically acclaimed films such as Memento (2000), The Prestige (2006), The Dark Knight Trilogy (2005-12), Inception (2010), Interstellar (2014) and Dunkirk (2017). Nolan is the founder of the production company Syncopy Films. He often collaborates with his wife, producer Emma Thomas, and his brother, screenwriter Jonathan Nolan.
                            </p>
                        </div>
                        <div>
                            <p className='Person-Title'>Place of Birth</p>
                            <p className='Person-Info'>Westminster, London, England, UK</p>
                        </div>
                        <div>
                            <p className='Person-Title'>Gender</p>
                            <p className='Person-Info'>Male</p>
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
                    <List
                        clicked={this.goDetail}
                        count={12}
                        title='Known For'
                        src={require('../../assets/poster.jpg').default}
                        override='Person-Movie'
                        name='Tenet'
                    />
                    <List
                        count={58}
                        title='Movies'
                        src={require('../../assets/poster.jpg').default}
                        override='Person-Movie'
                        name='Tenet'
                    />
                    <List
                        count={9}
                        title='TV Shows'
                        src={require('../../assets/poster.jpg').default}
                        override='Person-Movie'
                        name='Tenet'
                    />
                </div>
            </div>
        );
    };
};

export default PersonalInformation;
