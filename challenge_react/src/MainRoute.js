import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppContact from './AppContact';
import AppGallery from './AppGallery';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import AppHome from './AppHome';
import AppContentSearch from './AppContentSearch';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={AppHome}/>
            <Route exact path="/galerry" component={AppGallery}/>
            <Route exact path="/contact" component={AppContact}/>
            <Route exact path="/news" component={AppContentSearch}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/signin" component={Signin}/>

        </Switch>
    )
}
export default MainRoute;