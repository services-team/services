import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        justify: 'center'
    }
})

class OrderPage extends React.Component {
    state = {
        title: 'Kirpimas',
        description: 'Tiek vyrų, tiek moterų kirpimas, plaukų dažymas, atauginimas.',
        price_From: 10,
        price_To: 50,
        city: 'Kaunas',
        subServices: [
            {
                id: 1,
                title: 'Vyriškas kirpimas',
                price_From: 10,
                price_To: 15
            },
            {
                id: 2,
                title: 'Moteriškas kirpimas',
                price_From: 20,
                price_To: 40
            }
        ],
        selectedService: '',
        selectedHoursFrom: null,
        selectedMinutesFrom: null,
        open: false,
        serviceId: this.props.match.params.id,

    }

    handleChange = (e) => {
        this.setState({ selectedService: e.target.value });
    }

    handleHoursChange = (e) => {
        this.setState({ selectedHoursFrom: e.target.value });
    }

    handleMinutesChange = (e) => {
        this.setState({ selectedMinutesFrom: e.target.value });
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper>
                <h2 align="center">Paslaugos užsakymas</h2>
                <div className="row">
                    <div className="col-6">
                        <h6>Pavadinimas: {this.state.title}</h6>
                        <h6>Aprašymas: {this.state.description}</h6>
                        <h6>Adresas: {this.state.city}</h6>
                        {this.state.selectedService ? <h6>Paslaugos pavadinimas: {this.state.subServices[this.state.selectedService - 1].title}</h6> : null}
                    </div>
                    <div className="col-6">
                        
                        <h4 align="center">Pasirinkimai</h4>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Paslauga</InputLabel>
                        <Select
                            minWidth="120"
                            value={this.state.selectedService}
                            onChange={this.handleChange}
                            inputProps={{
                                name: '',
                                id: 'darbas',
                            }}
                        >
                            {this.state.subServices.map((subService) => {
                                return (
                                    <MenuItem value={subService.id}>{subService.title}</MenuItem>
                                )
                            })}
                            
                        </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="valandos">Valandos</InputLabel>
                        <Select
                            minWidth="120"
                            value={this.state.selectedHoursFrom}
                            onChange={this.handleHoursChange}
                            inputProps={{
                                name: '',
                                id: 'valandos',
                            }}
                        >
                            {this.state.subServices.map((subService) => {
                                return (
                                    <MenuItem value={subService.id}>{subService.title}</MenuItem>
                                )
                            })}
                            
                        </Select>
                        </FormControl>
                    </div>
                </div>
            </Paper>
        );
    }
}

  export default withStyles(styles)(OrderPage);