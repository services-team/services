import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';


export default  ({ id, title, time, price_From, price_To, city }) => (
        <TableRow key={id}>
            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="center">{time}</TableCell>
            <TableCell align="center">{price_From}</TableCell>
            <TableCell align="center">{price_To}</TableCell>
            <TableCell align="center">{city}</TableCell>
            <TableCell align="center">
                <Link to={{
                    pathname: `/order/${id}`,
                    query: {
                        adress: JSON.stringify(id)
                    }
                }}>
                    <Button>Atšaukti</Button>
                </Link>
            </TableCell>
        </TableRow>
);
