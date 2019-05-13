import React from 'react';
import '../styles/styles.scss'
import AppRouter from '../routers/AppRouter';
import { startFetchService } from '../actions/services';
import { connect } from 'react-redux';
import axios from 'axios';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <AppRouter />
        )
    }
}


