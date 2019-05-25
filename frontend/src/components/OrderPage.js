import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';

import "react-datepicker/dist/react-datepicker.css";

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        justify: 'center'
    }
})

class OrderPage extends React.Component {
    state = {
        fullService: {
            service: {
                title: 'Kirpimas',
                description: 'Tiek vyrų, tiek moterų kirpimas, plaukų dažymas, atauginimas.',
                price_From: 10,
                price_To: 50,
                city: 'Kaunas',
            },
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
        },
        selectedService: '',
        selectedHoursFrom: '',
        selectedMinutesFrom: '',
        open: false,
        serviceId: this.props.match.params.id,
        selectedData: new Date()
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

    componentDidMount() {
        this.getWholeService();
    }

    getWholeService = () => {
        axios.get('/api/service', this.state.serviceId)
        .then((res) => this.setState({ fullservice: res.data.objects }))
        .catch((err) => console.log(err));
    }

    submitReservation = () => {
        const day = this.state.selectedData.getDate();
        const month = this.state.selectedData.getMonth() + 1;
        const year = this.state.selectedData.getFullYear();
        const hour = this.state.selectedData.getHours();
        const minute = this.state.selectedData.getMinutes();
        const time = day + "/" + month + "/" + year + " " + hour + ':' + minute;
        const reservation = {
            serviceId: this.state.serviceId,
            subServiceId: this.state.selectedService,
            reservationTime: time
        }
        axios.post('/api/reservations', reservation)
        .then((res) => console.log(res))
        .catch((err) => console.log(reservation));
    }

    handleDateChange = (date) => {
        this.setState({ selectedData: date })
        console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper>
                <h2 align="center">Paslaugos užsakymas</h2>
                <div className="row">
                    <div className="col-6">
                        <h6>Pavadinimas: {this.state.fullService.service.title}</h6>
                        <h6>Aprašymas: {this.state.fullService.service.description}</h6>
                        <h6>Adresas: {this.state.fullService.service.city}</h6>
                        {this.state.selectedService ? <h6>Paslaugos pavadinimas: {this.state.fullService.subServices[this.state.selectedService - 1].title}</h6> : null}
                        {this.state.selectedData ? <h6>Pasirinkta data: {this.state.selectedData.getFullYear()} {this.state.selectedData.getMonth() + 1} {this.state.selectedData.getDate()}</h6> : null}
                        {this.state.selectedData ? <h6>Pasirinktas laikas: {this.state.selectedData.getHours()}:{this.state.selectedData.getMinutes()} </h6> : null}
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
                            {this.state.fullService.subServices.map((subService) => {
                                return (
                                    <MenuItem value={subService.id}>{subService.title}</MenuItem>
                                )
                            })}
                            
                        </Select>
                        </FormControl>
                        <DatePicker
                            selected={this.state.selectedData}
                            showTimeSelect
                            onChange={this.handleDateChange}
                            timeFormat="HH:mm"
                        />
                        <Button onClick={this.submitReservation}>
                            Išsaugoti
                        </Button>
                    </div>
                </div>
            </Paper>
        );
    }
}

  export default withStyles(styles)(OrderPage);