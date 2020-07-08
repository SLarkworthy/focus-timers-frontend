import React from 'react';

const login = ({handleFormChange, handleSubmit, email, password}) => {
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="email" placeholder="email" onChange={handleFormChange} value={email}/>
                <input type="password" name="password" placeholder="password" onChange={handleFormChange} value={password} />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default login;