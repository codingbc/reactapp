import React from 'react';
import FriendCard from '../FriendCard';
import './FriendWrapper.css';

const FriendWrapper = props =>
    <div className="wrapper">
        <div className="friend-div">
            {props.friends.map(friend =>
                <FriendCard
                    key={friend.id}
                    id={friend.id}
                    name={friend.name}
                    image={friend.image}
                    handleClick={props.handleClick}
                />
            )}
        </div>
    </div>;

export default FriendWrapper;