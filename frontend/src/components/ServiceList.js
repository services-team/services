import React from 'react';
import ServiceListItem from './ServiceListItem';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import { TableBody } from '@material-ui/core';
import axios from 'axios';
import { AST_SymbolExportForeign } from 'terser';

export default class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList: [
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
