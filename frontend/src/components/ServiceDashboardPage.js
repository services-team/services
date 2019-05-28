import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ServiceList from './ServiceList';


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
            <Paper className={styles.root}>
                <h2 align="center">Visos siulomos paslaugos</h2>
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
                    <ServiceList />
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);

// const mapStateToProps = (state) => {
//     return {
//         services: state.services
//     };
// };

//export default connect(mapStateToProps)(sth);