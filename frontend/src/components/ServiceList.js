import React from 'react';
import ServiceListItem from './ServiceListItem';
import { TableBody } from '@material-ui/core';
import axios from 'axios';

export default class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList: [
                {
                    id: 1,
                    title: 'pimpis',
                    description: 'ziaurus dalykas',
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
        .get('api/service/')
        .then(res => {
            this.setState({ servicesList: res.data.objects });
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
