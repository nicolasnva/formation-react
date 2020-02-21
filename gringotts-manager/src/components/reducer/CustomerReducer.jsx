import { initialState } from '../context/MainContext';

export const customersTypes = {
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    DELETE_CUSTOMER: 'DELETE_CUSTOMER'
};

/**
 * Fonction 
 * 
 * -- Entrées --
 * @param {*} state 
 *  L'état initial du contexte
 * @param {*} action 
 *  Il doit contenir un type qui correspond à un des types de customersTypes (ex. 'ADD_CUSTOMER') et un payload qui correspond à la donnée utile pour l'action demandée (ici un customer par exemple)
 *  Selon ce type, une action est faite par le reducer, ici, cela ajoute à l'état, dans la propriété customersList, le payload donné
 * 
 * -- Sortie --
 *  Le nouvel état
 * 
 */
export const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case customersTypes.ADD_CUSTOMER:
            return {
                ...state, // On reprends l'état initial
                customers: [...state.customers, action.payload] // On met dans customersList cette même liste à laquelle on ajoute le payload (équivalent à faire un .push())
            }
        case customersTypes.DELETE_CUSTOMER:
            let newCustomers = state.customers;
            newCustomers.splice(action.payload, 1);
            return {
                ...state,
                customers: newCustomers
            }
        default:
            return state;
    }
}