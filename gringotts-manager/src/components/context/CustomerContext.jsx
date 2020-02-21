import React, { createContext, useReducer } from 'react';
import { CustomerModel } from "../../models/CustomerModel";
import { CustomerReducer } from '../reducer/CustomerReducer';
import { useCustomerActions } from '../hooks/CustomerActions';
import { AccountModel } from '../../models/AccountModel';

export const initialState = {
    customers: [
        new CustomerModel('Nicolas', 'Flamel', '1995-02-25', 'Homme', [new AccountModel(0, 'Compte Courant', 505)]),
        new CustomerModel('Cedric', 'Diggory', '1999-06-01', 'Homme', [new AccountModel(0, 'Compte Courant', 1523), new AccountModel(1, 'Compte épargne', 95423)])
    ]
};

export const CustomerContext = createContext(initialState);

/**
 * Fonction 
 * 
 * -- Entrées --
 * @param {*} object avec un children qui doit être un composant qui va être englobé par le Provider
 *  
 * -- Sortie --
 *  Le composant children englobé par le Provider avec en value : l'état, le dispatch et les actions
 * 
 */
export const CustomerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CustomerReducer, initialState);
    const customerActions = useCustomerActions(state, dispatch);

    return (
        <CustomerContext.Provider value={{ state, dispatch, customerActions }}>
            {children}
        </CustomerContext.Provider>
    )
}