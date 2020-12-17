import React from 'react';

import './NavigationItem.css';

const navigationItem = props => (
    <div className='NavigationItem'>
        <a className='NavigationTitle' href='#'>{props.title}</a>
    </div>
)

export default navigationItem;
