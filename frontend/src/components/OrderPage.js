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
import OrderModal from './OrderModal';

import "react-datepicker/dist/react-datepicker.css";

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        justify: 'center',
    }
})

class OrderPage extends React.Component {
    state = {
        fullService: {
            "id": 0,
            "title": "Pavadinimas",
            "description": "Aprašymas",
            "priceFrom": 0,
            "priceTo": 100,
            "city": "Miestas",
            "fkUserId": null,
            "schedule": {
                "id": 0,
                "title": "Naujas",
                "fkUserId": "e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88",
                "day": [
                    {
                        "id": 1,
                        "weekDay": {
                            "id": 1,
                            "name": "Monday"
                        },
                        "workTime": []
                    },
                    {
                        "id": 2,
                        "weekDay": {
                            "id": 2,
                            "name": "Tuesday"
                        },
                        "workTime": [
                            {
                                "id": 1,
                                "minutesFrom": 100,
                                "minutesTo": 200
                            },
                            {
                                "id": 2,
                                "minutesFrom": 760,
                                "minutesTo": 955
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "weekDay": {
                            "id": 3,
                            "name": "Wednesday"
                        },
                        "workTime": []
                    },
                    {
                        "id": 4,
                        "weekDay": {
                            "id": 4,
                            "name": "Thursday"
                        },
                        "workTime": []
                    },
                    {
                        "id": 5,
                        "weekDay": {
                            "id": 5,
                            "name": "Friday"
                        },
                        "workTime": []
                    },
                    {
                        "id": 6,
                        "weekDay": {
                            "id": 6,
                            "name": "Saturday"
                        },
                        "workTime": []
                    },
                    {
                        "id": 7,
                        "weekDay": {
                            "id": 7,
                            "name": "Sunday"
                        },
                        "workTime": []
                    }
                ]
            },
            "subServices": [
                {
                    "id": 1,
                    "title": "Subservice",
                    "duration": 1,
                    "price": 420,
                    "serviceId": 1,
                    "reservation": null
                },
                {
                    "id": 2,
                    "title": "test",
                    "duration": 1,
                    "price": 420,
                    "serviceId": 1,
                    "reservation": null
                }
            ]
        },
        selectedService: '',
        selectedHoursFrom: '',
        selectedMinutesFrom: '',
        open: false,
        serviceId: this.props.match.params.id,
        selectedDate: new Date(),
        message: '',
        modal: false
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
        //this.getWholeService();
    }

    getWholeService = () => {
        const serviceId = this.state.serviceId;
        axios.get(`/api/service/${serviceId}`)
        .then((res) => this.setState({ fullservice: res.data }, () => console.log(this.state)))
        //.then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    submitReservation = () => {
        const day = this.state.selectedDate.getDate();
        const month = this.state.selectedDate.getMonth() + 1;
        const year = this.state.selectedDate.getFullYear();
        const hour = this.state.selectedDate.getHours();
        const minute = this.state.selectedDate.getMinutes();
        let time = '';
        if(minute === 0) {
            time = day + "/" + month + "/" + year + "T" + hour + ':' + minute + '0';
        }
        else {
            time = day + "/" + month + "/" + year + "T" + hour + ':' + minute;
        }
        const reservation = {
            serviceId: this.state.serviceId,
            subServiceId: this.state.selectedService,
            reservationTime: time
        }
        axios.post('/api/reservations', reservation)
        .then((res) => {if (res.data === "Laikas uzimtas") {
            this.setState({ message: "Laikas užimtas, prašome pasirinkti kitą ir pamėginti dar kartą" });
            this.setState({ modal: true });
        }
        else {
            this.setState({ message: "Rezervacija sėkminga. Savo rezervacijas galite peržiūrėti skiltyje MANO REZERVACIJOS" });
            this.setState({ modal: true })
        }
    })
        .catch((err) => {this.setState({ modal: true });
                        this.setState({ message: "Rezervacija nebuvo sėkminga, prašome pamėginti iš naujo." })
        });
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date })
        console.log(this.state)
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper>
                <h2 align="center">Paslaugos užsakymas</h2>
                <div align="center" className="row">
                {this.state.modal && this.state.message ? (
                    <OrderModal toggle={this.toggle}
                                response={this.state.message}
                    />
                ) : null}
                    <div className="col-6">
                        {this.state.fullservice ? <h6>Pavadinimas : {this.state.fullservice.title}</h6> : null}
                        {this.state.fullService ? <h6>Miestas: {this.state.fullService.city}</h6> : null}
                        {this.state.fullService ? <h6>Aprašymas: {this.state.fullService.description}</h6> : null}
                        {this.state.selectedService ? <h6>Paslaugos pavadinimas: {this.state.fullService.subServices[this.state.selectedService - 1].title}</h6> : null}
                        {this.state.selectedDate ? <h6>Pasirinkta data: {this.state.selectedDate.getFullYear()} {this.state.selectedDate.getMonth() + 1} {this.state.selectedDate.getDate()}</h6> : null}
                        {this.state.selectedDate ? <h6>Pasirinktas laikas: {this.state.selectedDate.getHours()}:{this.state.selectedDate.getMinutes()}{this.state.selectedDate.getMinutes()===0 ? 0 : null} </h6> : null}
                    </div>
                    <div className="col-6">
                        <div align="center">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="open-select">Popaslaugė</InputLabel>
                                <Select
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    onOpen={this.handleOpen}
                                    value={this.state.selectedService}
                                    onChange={this.handleChange}
                                >
                                    {this.state.fullService.subServices.map((subService) => {
                                        return (
                                            <MenuItem value={subService.id}>{subService.title}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                        <div align="center">
                            <DatePicker 
                                selected={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                            />
                        </div>
                    </div>
                </div>
                <div align="center">
                    <Button variant="contained" onClick={this.submitReservation}>Užsakyti</Button>
                </div>
            </Paper>
        );
    }
}

  export default withStyles(styles)(OrderPage);