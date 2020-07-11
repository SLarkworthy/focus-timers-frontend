import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import NavBar from "./NavBar"
import UserContainer from './UserContainer';


const routes = (props) => {
    console.log(props.loggedIn)
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route path="/users/:id" exact render={() => (
                    props.loggedIn ? <UserContainer /> : <Redirect to="/" />
                )}/>
            </Switch>
        </Router>
    )
}

export default routes;
