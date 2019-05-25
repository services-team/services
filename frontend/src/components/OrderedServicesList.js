import React from 'react';
import OrderedServicesListItem from './OrderedServicesListItem';
import { TableBody } from '@material-ui/core';
import axios from 'axios';

export default class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList: [
                {
                    title: 'Vyriškas kirpimas',
                    id: 1,
                    time: '12:00',
                    price_From: 55,
                    price_To: 100,
                    city: 'Kaunas'
                }
            ]
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
        .get('api/myreservations/')
        .then(res => {
            this.setState({ servicesList: res.data.objects });
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <TableBody>
                {this.state.servicesList.map((service) => {
                    return <OrderedServicesListItem key={service.id} {...service} />
                })}
            </TableBody>
        );
    }
}
