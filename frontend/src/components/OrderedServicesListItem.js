import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';

function converter(date) {
    let newDate = moment(date);
    let anotherDate = moment(newDate).add(1, 'month');
    return anotherDate;
}

export default  ({ city, startDate, subService }) => (
        <TableRow key={subService.id}>
            <TableCell component="th" scope="row">{subService.title}</TableCell>
            <TableCell align="center">{moment(converter(startDate)).get('year')} - {moment(converter(startDate)).get('month') < 10 ? '0' + moment(converter(startDate)).get('month') : moment(converter(startDate)).get('month')} - {moment(converter(startDate)).get('date') < 10 ? '0' + moment(converter(startDate)).get('date') : moment(converter(startDate)).get('date')} {moment(converter(startDate)).get('hours') < 10 ? '0' + moment(converter(startDate)).get('hours') : moment(converter(startDate)).get('hours')}:{moment(converter(startDate)).get('minutes') < 10 ? '0' + moment(converter(startDate)).get('minutes') : moment(converter(startDate)).get('minutes')}</TableCell>
            <TableCell align="center">{subService.price}</TableCell>
            <TableCell align="center">{city}</TableCell>
            <TableCell align="center">
                <IconButton><i className="material-icons">cancel</i></IconButton>
            </TableCell>
        </TableRow>
);
