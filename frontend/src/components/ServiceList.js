import React from 'react';
import ServiceListItem from './ServiceListItem';
import { TableBody } from '@material-ui/core';
import axios from 'axios';

export default class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList: []
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
        .get('api/service/')
        .then(res => {
            this.setState({ servicesList: res.data });
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <TableBody>
                {this.state.servicesList.map((service) => {
                    return <ServiceListItem key={service.id} {...service} />
                })}
            </TableBody>
        );
    }
}
