import React from 'react';



const user = (props) => {
    return (
        <div>
            <h2>Welcome, {`${props.currentUser.name}`}</h2>
            <p>Email: {`${props.currentUser.email}`}</p>
        </div>
    )
}

export default user;
