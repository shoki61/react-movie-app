import React from 'react';


import Image from '../../../../components/UI/Image/Image';
import './PersonItem.css';
import img from '../../../../assets/christopherNolan.jpg';


const PersonItem = props => {
    return <div className='person-item'>
        <div className='person-item-img'>
            <div className='person-item-img-back'></div>
            <Image src={img} alt='test' className='person-item-avatar'/>
        </div>
        <div className='person-info'>
            <p className='person-name'>Bruce Wayne</p>
            <p className='person-character-name'>Batman</p>
        </div>
    </div>;
};

export default PersonItem;