import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Prisijungęs kaip + vardas</h1>
                <div className="centeredHeader">
                    <ul className="header">
                        <div className="row">
                                <div className="col">
                                    <li><NavLink to="/">VISOS PASLAUGOS</NavLink></li>
                                </div>
                                <div className="col">
                                    <li><NavLink to="/create">PRIDĖTI PASLAUGĄ</NavLink></li>
                                </div>
                                <div className="col">
                                    <li><NavLink to="/help">PAGALBA</NavLink></li>
                                </div>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}