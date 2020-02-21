import React from 'react';
import {Link} from 'react-router-dom';

export const Menu = props => {
    return(
        <ul>
            <li>
                <Link to="/Comp1">Comp1</Link>
            </li>
            <li>
                <Link to="/Comp2">Comp2</Link>
            </li>
            <li>
                <Link to="/Weather">Weather</Link>
            </li>
        </ul>
    )
}