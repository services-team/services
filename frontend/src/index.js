import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import axios from 'axios';

const token = localStorage.getItem('userTokken');

if (token !== 'null') {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
else {
    delete axios.defaults.headers.common['Authorization'];
}

localStorage.setItem('userTokken', 'ss');

const jsx = (
    <div>
        <AppRouter />
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
