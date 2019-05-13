import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import servicesReducer from '../reducers/services';

const composeEchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            services: servicesReducer
        }),
    composeEchancers(applyMiddleware(thunk)));
    return store;

}