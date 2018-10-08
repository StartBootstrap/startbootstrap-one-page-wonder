import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, NotFound } from '../pages'; 

export default class _Router extends React.Component {
    render() { 
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
