import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';

export class Table extends Component {

    state = {
        headers: this.props.headers,
        body: this.props.body
    };

    render() {
        return (
            <Fragment>
                <table>
                    <thead>
                        <tr>
                            {this.props.headers.map((header, i) => {
                                return (
                                    <th key={i}>{header.name}</th>
                                )
                            })}
                            {this.props.createLine || this.props.deleteLine ? <th></th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.body ? this.props.body.map((item, i) => {
                            return (
                                <tr key={i}>
                                    {this.props.headers.map((header, j) => {
                                        return (
                                            <td key={j} onClick={(e) => this.props.tdClicked(i, e)}>{item[header.key]} {header.key === 'solde' && item['currency'] ? item['currency'] : null}</td>
                                        )
                                    })}

                                    {this.props.deleteLine ?
                                        <td><Button variant="contained" onClick={() => this.props.deleteAction(i)}>Supprimer</Button></td>
                                        : null}
                                </tr>
                            )
                        }) : null}
                        {this.props.createLine ?
                            <tr>
                                {this.props.headers.map((header, j) => {
                                    return (
                                        <td key={j}><input type="text" onChange={(e) => this.props.handleCreateLineChange(header.key, e)}></input></td>
                                    )
                                })}
                                <td><Button variant="contained" onClick={this.props.createAction}>Créer</Button></td>
                            </tr>
                            : null}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}