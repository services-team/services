import React from 'react';
import MyServiceListItem from './MyServiceListItem';
import { TableBody } from '@material-ui/core';
import axios from 'axios';

export default class MyServiceList extends React.Component {
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
        .then(res => {
            this.setState({ servicesList: res.data });
        })
        //.then((res) => console.log(res))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <TableBody>
                {this.state.servicesList.map((service) => {
                    return <MyServiceListItem key={service.id} {...service} />
                })}
            </TableBody>
        );
    }
}
