import React from 'react';
import './FriendCard.css';

const FriendCard = props =>
    <div className="card"
        style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: '50%'
        }}
        key={props.id}
        id={props.id}
        name={props.name}
        image={props.image}
        onClick={props.handleClick}>
    </div>;

export default FriendCard;