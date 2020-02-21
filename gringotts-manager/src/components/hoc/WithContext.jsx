import React from 'react';
import { CustomerContext } from '../context/CustomerContext';

export function withContext(Component) {
    return function WrapperComponent(props) {
        return (
            <CustomerContext.Consumer>
                {state => <Component {...props} context={state} />}
            </CustomerContext.Consumer>
        );
    };
}