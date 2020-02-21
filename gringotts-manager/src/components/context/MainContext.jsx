import React, { Component } from 'react';
import { CustomerModel } from '../../models/CustomerModel';
import { AccountModel } from '../../models/AccountModel';

export const initialState = { customers: [CustomerModel] };
export const MainContext = React.createContext(initialState);

export class MainContextProvider extends Component {
    state = {
        customers: [
            new CustomerModel('Nicolas', 'Flamel', '1995-02-25', 'Homme', [new AccountModel(0, 'Compte Courant', 505)]),
            new CustomerModel('Cedric', 'Diggory', '1999-06-01', 'Homme', [new AccountModel(0, 'Compte Courant', 1523), new AccountModel(1, 'Compte épargne', 95423)])
        ]
    };

    render() {
        return (
            <MainContext.Provider value={this.state}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}