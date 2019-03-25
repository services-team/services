import React from 'react';
import ServiceListItem from './ServiceListItem';

const ServiceList = (props) => (
    <div>
        <h1>ServiceList</h1>
        {props.services.map((service) => {
            return <ServiceListItem key={service.id} {...service} />
        })}
    </div>
);

export default ServiceList;