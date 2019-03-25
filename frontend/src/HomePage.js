import React from 'react'
import NameInput from './components/NameInput';


export default () => (
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
                            <div className="row">
                                    <div className="centeredLoginButton">
                                    <button
                                        type="button" 
                                        className="btn btn-primary btn-lg btn-block"
                                    >
                                        Jungtis
                                    </button>
                                    <a href="/">Pamiršau slaptažodį</a>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="centeredLoginButton">
                                    <h2>Dar neužsiregistravote?</h2>
                                    <a href="/">Padarykite tai dabar!</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);