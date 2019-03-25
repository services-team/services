import React from 'react';
import ServiceList from './ServiceList';

const services = [
    {
        id: 1,
        title: 'Kirpimas',
        description: 'Pigu ir greita'
    },
    {
        id: 2,
        title: 'naguciai',
        description: 'geliniai'
    },
];

export default () => (
    <div className="gradient">
        <ServiceList services={services}/>
    </div>
);