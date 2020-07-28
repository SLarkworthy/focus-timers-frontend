import React from 'react';

const user = ({ currentUser }) => {
    return (
        <div>
            <h2>Welcome, {`${currentUser.name}`}</h2>
            <p>Email: {`${currentUser.email}`}</p>
        </div>
    )
}

export default user;
