import React from 'react';


import Image from '../../../../components/UI/Image/Image';
import './PersonItem.css';
import img from '../../../../assets/christopherNolan.jpg';


const PersonItem = props => {
    return <div className='person-item'>
        <div className='person-item-img'>
            <div className='person-item-img-back'></div>
            <Image src={`https://image.tmdb.org/t/p/w500${props.avatar}`} alt={props.name} className='person-item-avatar'/>
        </div>
        <div className='person-info'>
            <p className='person-name'>{props.name}</p>
            <p className='person-character-name'>{props.character ? props.character : props.department}</p>
        </div>
    </div>;
};

export default PersonItem;