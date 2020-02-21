import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Comp1 } from '../Comp1';
import { Comp2 } from '../Comp2';
import { WeatherComp } from '../WeatherComp';

export const Routing = props => {
    return(<Router>
        {props.children}
        <Switch>
            <Route path="/comp1" component={Comp1}/>
            <Route path="/comp2" component={Comp2}/>
            <Route path="/weather" component={WeatherComp}/>
        </Switch>
    </Router>);
}