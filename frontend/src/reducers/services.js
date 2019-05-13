// Services Reducer

const servicesReducerDefaultState = [];

export default (state = servicesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SERVICE':
            return [
                ...state,
                action.service
            ];
        case 'SET_SERVICE_DETAILS':
            return {
                ...state,
                services: action.payload };
        case 'REMOVE_SERVICE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_SERVICE':
            return state.map((service) => {
                if (service.id === action.id) {
                    return {
                        ...service,
                        ...action.updates
                    };
                } else {
                    return service;
                };
            });
        default:
            return state;
    }
};