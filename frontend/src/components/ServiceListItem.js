import React from 'react';
import { Link } from 'react-router-dom';

const ServiceListItem = ({ id, title, description, availability }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{title}</h3>
        </Link>
        <h4>{description}</h4>
    </div>
);

export default ServiceListItem;