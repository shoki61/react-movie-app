import React from 'react';

import './PersonalInformationList.css';

const personalInformationList = props => (
    <div className='Personal-Info-Container'>
        <p className='Personal-Information-Title'>{props.title} <span>({props.count})</span></p>
        <div className='Personal-Info-List-Container'>
            {
                props.data.map((item, index) => (
                    <div onClick={() => props.clicked(item.title ? 'movie': 'tv', item.id)} className='Personal-Information-List'>
                        <p className='Personal-Information-List-Name'>
                            <span className='list-number'>{index + 1}.</span> {item.title ?? item.name}{item.character ? <span>as {item.character}
                            </span>:null}
                        </p>
                        <p className='Personal-Information-Average'><i className='fas fa-star'/> {item.vote_average}</p>
                    </div>
                ))
            }
        </div>
    </div>
);

export default personalInformationList;
