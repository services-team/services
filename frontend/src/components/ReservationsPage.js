import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReservationsList from './ReservationsList';

export default class ReservationsPage extends React.Component {

    render() {
        return (
            <div>
                <Paper>
                    <h2 align="center">Mano užsakytos rezervacijos</h2>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pavadinimas</TableCell>
                            <TableCell align="center">Laikas</TableCell>
                            <TableCell align="center">Kaina</TableCell>
                            <TableCell align="center">Miestas</TableCell>
                        </TableRow>
                    </TableHead>
                    <ReservationsList />
                </Table>
                </Paper>
            </div>
        );
    }
}