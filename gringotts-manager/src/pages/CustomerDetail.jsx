import React, { Component, Fragment } from 'react';
import { withContext } from '../components/hoc/WithContext';
import { Table } from '../components/Table';
import { AccountModel } from '../models/AccountModel';

const headers = [
    { name: 'Id', key: 'id' },
    { name: 'Nom', key: 'name' },
    { name: 'Solde', key: 'solde' }
];

class CustomerDetail extends Component {

    state = {
        account: new AccountModel(),
        success: false,
        error: false
    };

    tdClicked = (i, e) => {
    }

    createAccount = () => {
        if (this.state.account.id && this.state.account.name && this.state.account.solde) {
            this.setState({ success: true });
            this.setState({ error: false });
            this.props.context.state.customers[this.props.match.params.id].accounts.push(this.state.account);
        } else {
            this.setState({ success: false });
            this.setState({ error: true });
        }
    }

    deleteAccount = (i) => {
        this.props.context.state.customers[this.props.match.params.id].accounts.splice(i, 1);
        this.setState({});
    }

    handleCreateLineChange = (key, e) => {
        let account = this.state.account;
        account[key] = e.target.value;
        this.setState({ account: account });
    }

    render() {
        return (
            <Fragment>
                <h1>Client : {this.props.context.state.customers[this.props.match.params.id].firstname} {this.props.context.state.customers[this.props.match.params.id].lastname}</h1>
                <Table
                    headers={headers}
                    body={this.props.context.state.customers[this.props.match.params.id].accounts}
                    createLine={true}
                    createAction={this.createAccount}
                    handleCreateLineChange={(key, e) => this.handleCreateLineChange(key, e)}
                    deleteLine={true}
                    deleteAction={(i) => this.deleteAccount(i)}
                    tdClicked={(i, e) => this.tdClicked(i, e)}>
                </Table>

                {this.state.success ? <p>Compte créé</p> : ''}
                {this.state.error ? <p>Champs incomplets</p> : ''}
            </Fragment>
        );
    }
}

export const ContextedCustomerDetail = withContext(CustomerDetail);