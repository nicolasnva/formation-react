import React, { Component, Fragment } from 'react';
import { Table } from '../components/Table';
import { withContext } from '../components/hoc/WithContext';

const headers = [
    { name: 'Prénom', key: 'firstname' },
    { name: 'Nom', key: 'lastname' },
    { name: 'Age', key: 'age' },
    { name: 'Date de naissance', key: 'birthDateDisplay' },
    { name: 'Sexe', key: 'gender' },
];

class CustomersList extends Component {

    state = {
    };

    tdClicked = (i, e) => {
        this.props.history.push(`/customers/${i}`);
    }

    deleteCustomer = (i) => {
        this.props.context.customerActions.deleteCustomer(i);
        this.setState({});
    }

    render() {

        return (
            <Fragment>
                <h1>Liste des clients</h1>
                <Table
                    headers={headers}
                    body={this.props.context.state.customers}
                    deleteLine={true}
                    deleteAction={(i) => this.deleteCustomer(i)}
                    tdClicked={(i, e) => this.tdClicked(i, e)}>
                </Table>
            </Fragment>
        );
    }
}

export const ContextedCustomersList = withContext(CustomersList);