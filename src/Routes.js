import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';

const Routes = ()=>{

    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/About">
                <About />
            </Route>
            <Route exact path="/Signin">
                <Signin />
            </Route>

        </Switch>
    )
}

export default Routes;