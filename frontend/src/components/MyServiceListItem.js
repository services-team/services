import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';


export default ({ id, title, description, price_From, price_To, city }) => (
        <TableRow>
            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="center">{description}</TableCell>
            <TableCell align="center">{price_From}</TableCell>
            <TableCell align="center">{price_To}</TableCell>
            <TableCell align="center">{city}</TableCell>
            <TableCell align="center">
                <Link to={{
                    pathname: `/edit/${id}`,
                    query: {
                        adress: JSON.stringify(id)
                    }
                    }}>
                    <Button>Redaguoti</Button>
                </Link>
                <Link to={{
                    pathname: `/subservice/${id}`,
                    query: {
                        adress: JSON.stringify(id)
                    }
                }}>
                    <Button>Pridėti popaslaugę</Button>
                </Link>
            </TableCell>
        </TableRow>
)
