import React, { Component } from 'react';

import './PersonalInformation.css';
import Image from '../../components/UI/Image/Image';

class PersonalInformation extends Component{
    render(){
        return(
            <div className='Personal-Information'>
                <div className='Personal-Information-Top'>
                    <div className='Person-Image-Container'>
                        <Image
                            className='Person-Image'
                            width={275}
                            src={require('../../assets/christopherNolan.jpg').default}
                        />
                    </div>
                    <div className='Person-Info'>
                        <p>Christopher Nolan</p>

                    </div>
                </div>
            </div>
        );
    };
};

export default PersonalInformation;
