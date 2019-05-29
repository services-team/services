import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import OrderedServicesList from './OrderedServicesList';
import MyServicesList from './MyServiceList';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    }
});

class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesList: [
            ]
        };
    }


    render() {
        return (
            <div>
                <Paper className={styles.root}>
                    <h2 align="center">Mano užsisakytos paslaugos</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Pavadinimas</TableCell>
                                <TableCell align="center">Laikas</TableCell>
                                <TableCell align="center">Kaina</TableCell>
                                <TableCell align="center">Miestas</TableCell>
                                <TableCell align="center">Veiksmai</TableCell>
                            </TableRow>
                        </TableHead>
                        <OrderedServicesList />
                    </Table>
                </Paper>
                <Paper className={styles.root}>
                    <h2 align="center">Mano užrezervuotos paslaugos</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Užsakovas</TableCell>
                                <TableCell align="center">Laikas</TableCell>
                                <TableCell align="center">Pavadinimas</TableCell>
                                <TableCell align="center">Kaina</TableCell>
                            </TableRow>
                        </TableHead>
                        <MyServicesList />
                    </Table>
                </Paper>
            </div>
            
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
