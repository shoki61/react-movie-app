import React from 'react';


import Image from '../../../../components/UI/Image/Image';
import './PersonItem.css';
import man from '../../../../assets/man.png';
import woman from '../../../../assets/woman.png';
import person from '../../../../assets/person.png';


const PersonItem = props => {
    return <div onClick={props.clicked} className='person-item'>
        <div className='person-item-img'>
            <div className='person-item-img-back'></div>
            <Image
                src={props.avatar 
                    ? `https://image.tmdb.org/t/p/w500${props.avatar}`
                    : props.gender === 2 
                    ? man : props.gender === 1 
                    ? woman : person
                } 
                alt={props.name} 
                className='person-item-avatar'
            />
        </div>
        <div className='person-info'>
            <p className='person-name'>{props.name}</p>
            <p className='person-character-name'>{props.character ? props.character : props.department}</p>
        </div>
    </div>;
};

export default PersonItem;