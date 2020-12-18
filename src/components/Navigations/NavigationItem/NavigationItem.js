import React from 'react';

import './NavigationItem.css';

const navigationItem = props => (
    <div className="dropdown">
        <p className="dropTitle">{props.title}</p>
        <div className="dropdown-content">
            {props.children}
        </div>
    </div>
)

export default navigationItem;
