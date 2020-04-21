import React from 'react';
import Card from './Card';
import './index.css';

const CardList = ({profile}) => {
    return(
        <div>
            {profile.map(profile => 
            <Card key={profile.id } {...profile} />)}
        </div>
    )
}

export default CardList;