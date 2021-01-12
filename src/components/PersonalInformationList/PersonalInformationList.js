import React from 'react';

import './PersonalInformationList.css';

const personalInformationList = props => (
    <div className='Personal-Info-Container'>
        <p className='Personal-Information-Title'>{props.title} <span>({props.count})</span></p>
        <div className='Personal-Info-List-Container'>
            {
                props.data.map(item => (
                    <div className='Personal-Information-List'>
                        <div style={{display:'flex',alignItems:'center',width:'80%'}}>
                            <p className='Personal-Information-List-Name'>- {item.title}{item.character ? <span>as {item.character}</span>:null}</p>
                            <p className='Personal-Information-Average'><i className='fas fa-star'/> {item.vote_average}</p>
                        </div>
                        <p className='Personal-Info-Release-Date'>{item.release_date ? item.release_date : '--'}</p>
                    </div>
                ))
            }
        </div>
    </div>
);

export default personalInformationList;
