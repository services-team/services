import axios from 'axios';


export const startFetchService = (props) => {
    return (dispatch) => {
        axios.get('api/service/').then((response) => {
            dispatch(setServiceDetails(response.data.objects));
        });
    }
};

export const setServiceDetails = (data) => ({
    type: 'SET_SERVICE_DETAILS',
    payload: data
})

export const addService = (service) => ({
    type: 'ADD_SERVICE',
    service
});

export const startAddService = (serviceData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            description = '',
            price_From = '',
            price_To ='',
            city = ''
        } = serviceData;
        const service = { title, description, price_From, price_To, city };

        axios.post("/api/service/", service)
        .then(response => {
            dispatch(addService({
                ...service
            }));
        });
    };
};

export const removeService = ({ id } = {}) => ({
    type: 'REMOVE_SERVICE',
    id
});

export const editService = (id, updates) => ({
    type: 'EDIT_SERVICE',
    id,
    updates
});