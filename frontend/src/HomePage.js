import React from 'react'
import NameInput from './components/NameInput';
import Modal from './components/Modal';
import AppRouter from './routers/AppRouter';
import { Redirect } from 'react-router-dom';

const onRegistration = () => {
    console.log("paspausta ant registracijos");
    showModal();
}

const showModal = () => {
    const open = true;
    return (
        <div>
            <Modal opened={open}/>
        </div>
    );
}

export default class HomePage extends React.Component{
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    onButtonClick() {
        return (
            <div>
                <Redirect 
                 to={{
                    pathname: "/dashboard",
                    //state: { from: this.props.location }
                  }}
                  />
            </div>
        );
    }

    onLogin = () => {

    }

    render() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    <div className="homePageLeft">
                        <h1>Viena platforma.</h1>
                        <h3>Visos paslaugos.</h3>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div className="homePageRight">
                                <h1>Prisijunkite</h1>
                                <div className="row">
                                    <div className="col">
                                        <div className="formField">
                                            <NameInput 
                                                firstField="Vartotojo vardas"
                                                secondField="Prisijungimo vardas"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="formField">
                                            <NameInput 
                                                type="password"
                                                firstField="Vartotojo slaptažodis"
                                                secondField="Prisijungimo slaptažodis"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {this.state.modal ? (
                                    <Modal toggle={this.toggle}/>
                                ) : null}
                                <div className="row">
                                        <div className="centeredLoginButton">
                                        <button
                                            type="button" 
                                            className="btn btn-primary btn-lg btn-block"
                                            onClick={this.onButtonClick}
                                        >
                                            Jungtis
                                        </button>
                                        <a href="/">Pamiršau slaptažodį</a>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="centeredLoginButton">
                                        <h2>Dar neužsiregistravote?</h2>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg btn-block"
                                            onClick={this.toggle}
                                        >
                                            Užsiregistruokite dabar!
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}