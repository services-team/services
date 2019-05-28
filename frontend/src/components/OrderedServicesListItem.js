import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';


export default  ({ city, startDate, subService }) => (
        <TableRow key={subService.id}>
            <TableCell component="th" scope="row">{subService.title}</TableCell>
            <TableCell align="center">{startDate}</TableCell>
            <TableCell align="center">{subService.price}</TableCell>
            <TableCell align="center">{city}</TableCell>
            <TableCell align="center">
                <Link to={{
                    pathname: `/order/${subService.id}`,
                    query: {
                        adress: JSON.stringify(subService.id)
                    }
                }}>
                    <Button>Atšaukti</Button>
                </Link>
            </TableCell>
        </TableRow>
);
