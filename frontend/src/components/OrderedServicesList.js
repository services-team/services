import React from 'react';
import OrderedServicesListItem from './OrderedServicesListItem';
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

    cancelreservation = (id) => {
        axios
        .delete(`/api/reservation/${id}`)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err));
    }

    refreshList = () => {
        axios
        .get('api/Reservation/MyReservations')
        .then(res => { this.setState({ servicesList: res.data }) })
        //.then((res) => console.log(res))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <TableBody>
                {this.state.servicesList.map((service) => {
                    return <OrderedServicesListItem key={service.id} {...service} cancel={this.cancelreservation} />
                })}
            </TableBody>
        );
    }
}
