import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MyServiceList from './MyServiceList';

class MyServicePage extends React.Component {

    render() {
        return(
            <div>
                <Paper>
                    <h2 align="center">Mano siūlomos paslaugos</h2>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pavadinimas</TableCell>
                            <TableCell align="center">Aprašymas</TableCell>
                            <TableCell align="center">Minimali kaina</TableCell>
                            <TableCell align="center">Maksimali kaina</TableCell>
                            <TableCell align="center">Miestas</TableCell>
                            <TableCell align="center">Veiksmai</TableCell>
                        </TableRow>
                    </TableHead>
                    <MyServiceList />
                </Table>
                </Paper>
            </div>
        );
    }
}

export default MyServicePage;