import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Home from '../views/Home';
import Menu from './Menu';

const Navigation = () => {
    return (
        <Fragment>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Fragment>
    )
}
export default Navigation;