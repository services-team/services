import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import moment from 'moment';

function converter(date) {
    let newDate = moment(date);
    let anotherDate = moment(newDate).add(1, 'month');
    return anotherDate;
}

export default ({ clientFullName, startDate, subService }) => (
        <TableRow>
            <TableCell component="th" scope="row">
                {clientFullName}
            </TableCell>
            <TableCell align="center">{moment(converter(startDate)).get('year')} - {moment(converter(startDate)).get('month') < 10 ? '0' + moment(converter(startDate)).get('month') : moment(converter(startDate)).get('month')} - {moment(converter(startDate)).get('date') < 10 ? '0' + moment(converter(startDate)).get('date') : moment(converter(startDate)).get('date')} {moment(converter(startDate)).get('hours') < 10 ? '0' + moment(converter(startDate)).get('hours') : moment(converter(startDate)).get('hours')}:{moment(converter(startDate)).get('minutes') < 10 ? '0' + moment(converter(startDate)).get('minutes') : moment(converter(startDate)).get('minutes')}</TableCell>
            <TableCell align="center">{subService.title}</TableCell>
            <TableCell align="center">{subService.price}</TableCell>
        </TableRow>
)
