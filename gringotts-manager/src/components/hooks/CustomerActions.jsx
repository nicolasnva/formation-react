import { customersTypes } from "../reducer/CustomerReducer"

/**
 * Fonction
 * 
 * @param {*} state L'état du contexte 
 * @param {*} dispatch Le dispatch du reducer
 * 
 * Renvoie un ensemble de fonctions d'actions (ex. ajout, modifie, supprime)
 */
export const useCustomerActions = (state, dispatch) => {
    const addCustomer = customer => {
        // du code
        dispatch({ type: customersTypes.ADD_CUSTOMER, payload: customer });
    };
    const deleteCustomer = index => {
        // du code
        console.log(index);
        dispatch({ type: customersTypes.DELETE_CUSTOMER, payload: index });
    };

    return {
        addCustomer,
        deleteCustomer
    };
}