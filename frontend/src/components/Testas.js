import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const objektas = axios
    .get('api/service/1')
    .then(res => 
        console.log(res.data))
    .catch(err => console.log(err));

export default () => {
    return (
        <div>
            <p>Veikia</p>
            <p>{objektas}</p>
        </div>
    );
}