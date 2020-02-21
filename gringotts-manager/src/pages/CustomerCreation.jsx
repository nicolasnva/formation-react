import React, { Component, Fragment } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import { withContext } from '../components/hoc/WithContext';
import { CustomerModel } from '../models/CustomerModel';

class CustomerCreation extends Component {

    state = {
        customer: new CustomerModel("", "", "", ""),
        success: false,
        error: false
    };

    createCustomer = (e) => {
        e.preventDefault();
        if (this.state.customer.firstname !== "" && this.state.customer.lastname !== "" && this.state.customer.birthDate !== "" && this.state.customer.sexe !== "") {
            this.setState({ success: true });
            this.setState({ error: false });

            // METHODE ACTION
            this.props.context.customerActions.addCustomer(this.state.customer);

            // METHODE DISPATCH
            // this.props.context.dispatch({ type: customersTypes.ADD_CUSTOMER, payload: this.state.customer });

            // ANCIENNE METHODE
            // this.props.context.customers.push(this.state.customer);
        } else {
            this.setState({ success: false });
            this.setState({ error: true });
        }
    }

    handleChange = (key, e) => {
        let customer = this.state.customer;
        customer[key] = e.target.value;
        this.setState({ customer: customer });
    }

    render() {
        return (
            <Fragment>
                <Typography variant="h3">Créer un client</Typography>
                <form>
                    <TextField id="standard-basic" label="Prénom" onChange={(e) => this.handleChange('firstname', e)} />
                    <br />
                    <TextField id="standard-basic" label="Nom" onChange={(e) => this.handleChange('lastname', e)} />
                    <br />
                    <br />
                    <div>
                        <TextField
                            id="date"
                            label="Date de naissance"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => this.handleChange('birthDate', e)}
                        />
                    </div>
                    <br />
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Sexe</FormLabel>
                            <RadioGroup aria-label="gender" name="customized-radios">
                                <FormControlLabel onChange={(e) => this.handleChange('gender', e)} value="Homme" control={<Radio />} label="Homme" />
                                <FormControlLabel onChange={(e) => this.handleChange('gender', e)} value="Femme" control={<Radio />} label="Femme" />
                                <FormControlLabel onChange={(e) => this.handleChange('gender', e)} value="Autre" control={<Radio />} label="Autre" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Button variant="contained" onClick={this.createCustomer}>Valider</Button>

                    {this.state.success ? <p>Client créé</p> : ''}
                    {this.state.error ? <p>Champs incomplets</p> : ''}
                </form>
            </Fragment>
        );
    }
}

export const ContextedCustomerCreation = withContext(CustomerCreation);
