import React from 'react';
import MyCreatedServiceListItem from './MyCreatedServiceListItem';
import { TableBody } from '@material-ui/core';
import axios from 'axios';

export default class MyCreatedServices extends React.Component {
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
        .get('api/service/myservices/')
        .then((res) => {
            this.setState({ servicesList: res.data });
        })
        //.then((res) => console.log(res.data))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <TableBody>
                {this.state.servicesList.map((service) => {
                    return <MyCreatedServiceListItem key={service.id} {...service} />
                })}
            </TableBody>
        );
    }
}
