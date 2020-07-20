import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import NavBar from "./NavBar"
import UserContainer from '../user/UserContainer';
import ActivityContainer from '../activity/ActivityContainer';
import HomepageContainer from '../homepage/HomepageContainer'


const routes = (props) => {
    console.log(props.loggedIn)
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" render={() => (
                      <HomepageContainer />
                )} />
                <Route exact path="/signup" render={props => (
                     !props.loggedIn ? <Signup history={props.history} /> : null
                )} />
                 <Route exact path="/login" render={props => (
                     !props.loggedIn ? <Login history={props.history} /> : null
                )} />
                <Route path="/users/:id" exact render={(props) => (
                    <UserContainer params={props.match.params}/>
                )}/>
                <Route path="/activities" exact render={() => (
                    <ActivityContainer />
                )}/>
            </Switch>
        </Router>
    )
}

export default routes;
