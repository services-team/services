import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableBody } from '@material-ui/core';
import axios from 'axios';


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

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
        .get('api/service/')
        .then(res => {
            console.log(res.data);
            this.setState({ servicesList: res.data.objects });
        })
        .catch(err => console.log(err));
    };

    renderItems = () => {
        return this.state.servicesList.map(item => (
            <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                    {item.title}
                </TableCell>
                <TableCell align="center">{item.description}</TableCell>
                <TableCell align="center">{item.price_From}</TableCell>
                <TableCell align="center">{item.price_To}</TableCell>
                <TableCell align="center">Dar nera</TableCell>
            </TableRow>
        ));
    };
    

    render() {
        return (
            <Paper className={styles.root}>
                <h2 align="center">Visos siulomos paslaugos</h2>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pavadinimas</TableCell>
                            <TableCell align="center">Aprašymas</TableCell>
                            <TableCell align="center">Minimali kaina</TableCell>
                            <TableCell align="center">Maksimali kaina</TableCell>
                            <TableCell align="center">Miestas</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderItems()}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);