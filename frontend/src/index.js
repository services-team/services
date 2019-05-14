import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import HomePage from './HomePage';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';


if (!localStorage.getItem('Testas2') !== null) {
    localStorage.setItem('Testas2', 'Testuoju dar karta ir testas buvo toks');
}

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
