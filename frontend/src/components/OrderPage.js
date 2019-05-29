import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import OrderModal from './OrderModal';
import moment from 'moment';

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
        fullservice: {
                "id": 0,
                "title": "Kirpimas",
                "description": "Pigus kirpimas",
                "priceFrom": 10,
                "priceTo": 20,
                "city": "Kaunas",
                "fkUserId": null,
                "schedule": {
                    "id": 0,
                    "title": "Pavadinimass",
                    "fkUserId": "645b38af-d971-4cdb-949f-66e3b86dccbc",
                    "day": [
                        {
                            "id": 9,
                            "weekDay": {
                                "id": 1,
                                "name": "Monday"
                            },
                            "workTime": [
                                {
                                    "id": 8,
                                    "minutesFrom": 0,
                                    "minutesTo": 630
                                },
                                {
                                    "id": 0,
                                    "minutesFrom": 740,
                                    "minutesTo": 930
                                },
                                {
                                    "id": 0,
                                    "minutesFrom": 635,
                                    "minutesTo": 930
                                }
                            ]
                        },
                        {
                            "id": 11,
                            "weekDay": {
                                "id": 2,
                                "name": "Tuesday"
                            },
                            "workTime": [
                                {
                                    "id": 13,
                                    "minutesFrom": 855,
                                    "minutesTo": 885
                                },
                                {
                                    "id": 14,
                                    "minutesFrom": 705,
                                    "minutesTo": 840
                                }
                            ]
                        },
                        {
                            "id": 12,
                            "weekDay": {
                                "id": 3,
                                "name": "Wednesday"
                            },
                            "workTime": [
                                {
                                    "id": 15,
                                    "minutesFrom": 920,
                                    "minutesTo": 990
                                }
                            ]
                        },
                        {
                            "id": 14,
                            "weekDay": {
                                "id": 4,
                                "name": "Thursday"
                            },
                            "workTime": []
                        },
                        {
                            "id": 16,
                            "weekDay": {
                                "id": 5,
                                "name": "Friday"
                            },
                            "workTime": []
                        },
                        {
                            "id": 18,
                            "weekDay": {
                                "id": 6,
                                "name": "Saturday"
                            },
                            "workTime": []
                        },
                        {
                            "id": 19,
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
                        "id": 8,
                        "title": "Vyriškas kirpimas",
                        "duration": 10,
                        "price": 12,
                        "serviceId": 2021,
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
        this.getWholeService();
    }

    playWithDate = () => {
        let date = '2019-05-31T13:55';
        let weekDay = moment(date).format('dddd');
        console.log(weekDay);
        return weekDay;
    }

    getDateName = () => {
        let date = this.state.selectedDate;
        let weekDay = moment(date).format('dddd');
        return weekDay;
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
            time = month + "/" + day + "/" + year + " " + hour + ':' + minute + '0';
        }
        else {
            time = month + "/" + day + "/" + year + " " + hour + ':' + minute;
        }
        const reservation = {
            serviceId: this.state.serviceId,
            subServiceId: this.state.selectedService,
            reservationTime: time
        }
        axios.post('/api/reservation', reservation )
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
        function isEmpty(obj) {
            for(let key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if (isEmpty(this.state.fullservice))
            return null;
        let entries = this.state.fullservice.subServices.map((subService) => {
            return (
                <MenuItem value={subService.id}>{subService.title} - {subService.price} eur</MenuItem>
            ) 
        })
        return (
            <Paper>
                <h2 align="center">Paslaugos užsakymas</h2>
                <div align="center" className="row">
                {this.state.modal && this.state.message ? (
                    <OrderModal toggle={this.toggle}
                                response={this.state.message}
                    />
                ) : null}
                    <div align="center" className="col-6">
                        {this.state.fullservice ? <h6>Pavadinimas : {this.state.fullservice.title}</h6> : null}
                        {this.state.fullservice ? <h6>Miestas: {this.state.fullservice.city}</h6> : null}
                        {this.state.fullservice ? <h6>Aprašymas: {this.state.fullservice.description}</h6> : null}
                        {this.state.selectedDate ? <h6>Pasirinkta data: {this.state.selectedDate.getFullYear()} {this.state.selectedDate.getMonth() + 1} {this.state.selectedDate.getDate()}</h6> : null}
                        {this.state.selectedDate ? <h6>Pasirinktas laikas: {this.state.selectedDate.getHours()}:{this.state.selectedDate.getMinutes()}{this.state.selectedDate.getMinutes()===0 ? 0 : null} </h6> : null}
                        {<h6>Galimi laikai:</h6>}
                        {this.state.fullservice.schedule.day[0].workTime.length > 0 ? <h6>Pirmadienis</h6> : null}
                        <div align="center" className="row">
                        {this.state.fullservice.schedule.day[0] ? this.state.fullservice.schedule.day[0].workTime.map((time) => {
                            return <div align="center" className="col-2"><h6>{Math.floor(time.minutesFrom / 60)}:{time.minutesTo % 60} - {Math.floor(time.minutesTo / 60)}:{time.minutesTo % 60}</h6></div>
                        }) : null}
                        </div>
                        {this.state.fullservice.schedule.day[1].workTime.length > 0 ? <h6>Antradienis</h6> : null}
                        <div align="center" className="row">
                        {this.state.fullservice.schedule.day[1] ? this.state.fullservice.schedule.day[1].workTime.map((time) => {
                            return <div align="center" className="col-2"><h6>{Math.floor(time.minutesFrom / 60)}:{time.minutesTo % 60} - {Math.floor(time.minutesTo / 60)}:{time.minutesTo % 60}</h6></div>
                        }) : null}
                        </div>
                        {this.state.fullservice.schedule.day[2].workTime.length > 0 ? <h6>Trečiadienis</h6> : null}
                        <div align="center" className="row">
                        {this.state.fullservice.schedule.day[2] ? this.state.fullservice.schedule.day[2].workTime.map((time) => {
                            return <div align="center" className="col-2"><h6>{Math.floor(time.minutesFrom / 60)}:{time.minutesTo % 60} - {Math.floor(time.minutesTo / 60)}:{time.minutesTo % 60}</h6></div>
                        }) : null}
                        </div>
                        {this.state.fullservice.schedule.day[3].workTime.length > 0 ? <h6>Ketvirtadienis</h6> : null}
                        <div align="center" className="row">
                        {this.state.fullservice.schedule.day[3] ? this.state.fullservice.schedule.day[3].workTime.map((time) => {
                            return <div align="center" className="col-2"><h6>{Math.floor(time.minutesFrom / 60)}:{time.minutesTo % 60} - {Math.floor(time.minutesTo / 60)}:{time.minutesTo % 60}</h6></div>
                        }) : null}
                        </div>
                        {this.state.fullservice.schedule.day[4].workTime.length > 0 ? <h6>Penktadienis</h6> : null}
                        <div align="center" className="row">
                        {this.state.fullservice.schedule.day[4] ? this.state.fullservice.schedule.day[4].workTime.map((time) => {
                            return <div align="center" className="col-2"><h6>{Math.floor(time.minutesFrom / 60)}:{time.minutesTo % 60} - {Math.floor(time.minutesTo / 60)}:{time.minutesTo % 60}</h6></div>
                        }) : null}
                        </div>
                        {this.state.fullservice.schedule.day[5].workTime.length > 0 ? <h6>Šeštadienis</h6> : null}
                        <div align="center" className="row">
                        {this.state.fullservice.schedule.day[5] ? this.state.fullservice.schedule.day[5].workTime.map((time) => {
                            return <div align="center" className="col-2"><h6>{Math.floor(time.minutesFrom / 60)}:{time.minutesTo % 60} - {Math.floor(time.minutesTo / 60)}:{time.minutesTo % 60}</h6></div>
                        }) : null}
                        </div>
                        {this.state.fullservice.schedule.day[6].workTime.length > 0 ? <h6>Sekmadienis</h6> : null}
                        <div align="center" className="row">
                        {this.state.fullservice.schedule.day[6] ? this.state.fullservice.schedule.day[6].workTime.map((time) => {
                            return <div align="center" className="col-2"><h6>{Math.floor(time.minutesFrom / 60)}:{time.minutesTo % 60} - {Math.floor(time.minutesTo / 60)}:{time.minutesTo % 60}</h6></div>
                        }) : null}
                        </div>
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
                                    {entries}
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