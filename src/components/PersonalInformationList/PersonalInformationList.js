import React from 'react';

import './PersonalInformationList.css';

const personalInformationList = props => (
    <div className='Personal-Info-Container'>
        <p className='Personal-Information-Title'>{props.title}</p>
        <div className='Personal-Info-List-Container'>
            <div className='Personal-Information-List'>
                <p className='Personal-Information-List-Name'>Mandalorian <span>as John</span></p>
                <p className='Personal-Info-Release-Date'>2020</p>
            </div>
            <div className='Personal-Information-List'>
                <p className='Personal-Information-List-Name'>Mandalorian <span>as John</span></p>
                <p className='Personal-Info-Release-Date'>2020</p>
            </div>
            <div className='Personal-Information-List'>
                <p className='Personal-Information-List-Name'>Mandalorian <span>as John</span></p>
                <p className='Personal-Info-Release-Date'>2020</p>
            </div>
            <div className='Personal-Information-List'>
                <p className='Personal-Information-List-Name'>Mandalorian <span>as John</span></p>
                <p className='Personal-Info-Release-Date'>2020</p>
            </div>
            <div className='Personal-Information-List'>
                <p className='Personal-Information-List-Name'>Mandalorian <span>as John</span></p>
                <p className='Personal-Info-Release-Date'>2020</p>
            </div>
        </div>
    </div>
);

export default personalInformationList;
