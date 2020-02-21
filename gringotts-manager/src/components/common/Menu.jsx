import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Menu = props => {
    return (
        <Fragment>
            <ul>
                <li>
                    <Link to="/create-customer">Créer un client</Link>
                </li>
                <li>
                    <Link to="/customers">Liste des clients</Link>
                </li>
            </ul>
        </Fragment>
    )
}