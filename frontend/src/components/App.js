import React from 'react';
import '../styles/styles.scss'
import AppRouter from '../routers/AppRouter';

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


