import React from 'react';
import { NavLink } from 'react-router-dom';
import NameInput from './NameInput';
import { Button } from '@material-ui/core';
import Modal from './Modal';
import axios from 'axios';

export default class Header extends React.Component {
    state = {
        username: '',
        password: '',
        modal: false
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    }
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    onLoginSubmit = () => {
        localStorage.setItem('Testas', 'Testas123');
            const user = {
                UserName: this.state.username,
                Password: this.state.password
            }
            axios.post('/api/applicationuser/login', user)
            .then((res) => localStorage.setItem('userTokken', res.token))
            .catch((err) => console.log(err));
        window.location.reload();
    }

    setToken() {
        localStorage.setItem('userTokken', 'null');
        window.location.reload();
    }

    renderLogin(){
        return (
            <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm">
                    <div className="row">
                        <NameInput
                            firstField="Vartotojo vardas"
                            secondField="Prisijungimo vardas"
                        />
                        <NameInput
                            firstField="Vartotojo slaptažodis"
                            secondField="Slaptažodis"
                            type="password"
                        />
                        <Button color="primary" variant="contained" onClick={this.onLoginSubmit}>Jungtis</Button>
                        <Button color="secondary" variant="contained" onClick={this.toggle}>Registruotis</Button>
                    </div>
                    </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.modal ? (
                    <Modal toggle={this.toggle}/>
                ) : null}
                {localStorage.getItem('userTokken') !== 'null' ? (<div><p>tokenas yra {localStorage.getItem('userTokken')}</p><Button onClick={this.setToken}>Atsijungti</Button></div>) : this.renderLogin()}
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
                                    <li><NavLink to="/myservices">MANO PASLAUGOS</NavLink></li>
                                </div>
                                <div className="col">
                                    <li><NavLink to="/schedule">MANO TVARKARAŠTIS</NavLink></li>
                                </div>
                                <div className="col">
                                    <li><NavLink to="/orders">REZERVACIJOS</NavLink></li>
                                </div>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}