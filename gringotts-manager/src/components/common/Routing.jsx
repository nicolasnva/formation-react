import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextedCustomerDetail } from '../../pages/CustomerDetail';
import { ContextedCustomerCreation } from '../../pages/CustomerCreation';
import { ContextedCustomersList } from '../../pages/CustomersList';

export const Routing = props => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/create-customer" component={ContextedCustomerCreation} />
                <Route exact path="/customers" component={ContextedCustomersList} />
                <Route exact path="/customers/:id" component={ContextedCustomerDetail} />
            </Switch>
        </Router>
    );
}