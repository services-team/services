import React from 'react';
import ServiceListItem from './ServiceListItem';
import { TableBody } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';

export default class ReservationsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList: [],
            startDate: '2019-05-11T11:30'
        };
    }

    componentDidMount() {
        let sth = moment(this.state.startDate).add(1, 'month');
        console.log(moment(this.state.startDate).get('year') + " " + moment(this.state.startDate).get('month') + " " + moment(this.state.startDate).get('date') + " " + moment(sth).get('month'));
        this.refreshList();
    }

    refreshList = () => {
        axios
        .get('api/reservation/myreservations/')
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
