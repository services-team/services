import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';


export default ({ id, title, description, priceFrom, priceTo, city }) => (
        <TableRow>
            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="center">{description}</TableCell>
            <TableCell align="center">{priceFrom}</TableCell>
            <TableCell align="center">{priceTo}</TableCell>
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
