import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TimeModal from './TimeModal';
import ScheduleTimeList from './ScheduleTimeList';
import axios from 'axios';
import { TableBody } from '@material-ui/core';
import FailedTimeAddModal from './FailedTimeAddModal';

export default class MySchedulePage extends React.Component {

    state = {
        weeklySchedule: {},
        modalHoursFrom: 0,
        modalHoursTo: 0,
        modalMinutesFrom: 0,
        modalMinutesTo: 0,
        modal: false,
        currentDay: 0,
        timeFrom: 0,
        timeTo: 0,
        modalDateFrom: new Date(),
        modalDateTo: new Date(),
        index: -1,
        timeAddModal: true,
        errorMessage: ''
    }


    addWorkTime = () => {
        let minutesFrom = this.state.modalDateFrom.getHours() * 60 + this.state.modalDateFrom.getMinutes();
        let minutesTo = this.state.modalDateTo.getHours() * 60 + this.state.modalDateTo.getMinutes();
        const workTime = {
            minutesFrom: minutesFrom,
            minutesTo: minutesTo,
            id: this.state.index            
        }
        this.setState({ index: this.state.index - 1 })
        this.state.weeklySchedule.day[this.state.currentDay].workTime.push(workTime);
    }

    refreshList = () => {
        axios.get('/api/weeklyschedule/myschedule/')
        .then((res) => this.setState({ weeklySchedule: res.data }))
        //.then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }

    handleTimeFromChange = time => {
        this.setState({ timeFrom: time });
    }
    handleTimeToChange = time => {
        this.setState({ timeTo: time });
    }

    handleFromChange = (date) => {
        this.setState({ modalDateFrom: date });
    }
    handleToChange = (date) => {
        this.setState({ modalDateTo: date });
    }
    handleModalSubmit = () => {
        this.addWorkTime();
        this.toggle();
    }

    handleSubmitButton = () => {
        const schedule = this.state.weeklySchedule;
        axios.put(`/api/weeklyschedule/${this.state.weeklySchedule.id}`, schedule)
        .then((res) => {
            this.setState({ errorMessage: res.data });
            this.refreshList();
        })
        .catch((err) => console.log(err))
    }

    toggle = (dayNumber) => {
        this.setState({ modal: !this.state.modal, currentDay: dayNumber });
        console.log(this.state);
        this.setState({ modalDateFrom: new Date() });
        this.setState({ modalDateTo: new Date() });
    }
    renderMethod = () => (
        this.state.weeklySchedule ? (
            this.state.weeklySchedule.day.map((item) => {
                return (
                    <TableCell  key={item.weekDay.id}>
                        <ScheduleTimeList dayItem={item} />
                    </TableCell>
                ) 
            })
        ) : null)

    componentDidMount() {
        axios.get('/api/weeklyschedule/myschedule/')
        .then((res) => this.setState({ weeklySchedule: res.data }, () => console.log(this.state)))
        .catch((err) => console.log(err));
    }

    toggleFailedModal = () => {
        this.setState({ timeAddModal: !this.state.timeAddModal })
    }

    onCancelButtonClick = (id) => {
        let schedule = this.state.weeklySchedule;
        schedule.day.map((forDay) => {
            console.log(forDay);
            for (let i = 0; i < forDay.workTime.length; i++) {
                    if (forDay.workTime[i].id === id) {
                        axios
                        .get(`/api/worktime/checkfk/${id}`)
                        .then((res) => {
                            if (res.data === true) {
                                forDay.workTime.splice(i, 1);
                                this.setState({ weeklySchedule: schedule })
                            }
                            else {
                                this.toggleFailedModal();
                            }
                        })
                        .catch((err) => console.log(err));
                        break;
                    }
            }
            })
    }

    render() {
        function isEmpty(obj) {
            for(let key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if (isEmpty(this.state.weeklySchedule))
            return null;
        let times = this.state.weeklySchedule.day.map((item) => {
            return (
                <TableCell  key={item.weekDay.id}>
                    <ScheduleTimeList onCancelButtonClick={this.onCancelButtonClick} dayItem={item} />
                </TableCell>
            ) 
        })
        return (
            <div>
                {this.state.timeAddModal ? (
                    <FailedTimeAddModal
                        toggle={this.toggleFailedModal}
                        errorString={this.errorMessage} />
                ) : null}
                {this.state.modal ? (
                    <TimeModal
                     timeFromValue={this.state.modalDateFrom}
                     timeToValue={this.state.modalDateTo}
                     toggle={this.toggle}
                     handleModalSubmit={this.handleModalSubmit}
                     handleFromChange={this.handleFromChange}
                     handleToChange={this.handleToChange} />
                ) : null}
                <Paper>
                    {this.state.errorMessage ? <h6 className="errorMessage">{this.state.errorMessage}</h6> : null}
                    <h2 align="center">Paslaugos tiekėjo tvarkaraštis</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><div><p>Pirmadienis</p> <Button onClick={() => this.toggle(0)} variant="contained">Pridėti laiką</Button></div></TableCell>
                                <TableCell><div><p>Antradienis</p> <Button onClick={() =>this.toggle(1)} variant="contained">Pridėti laiką</Button></div></TableCell>
                                <TableCell><div><p>Trečiadienis</p> <Button onClick={() =>this.toggle(2)} variant="contained">Pridėti laiką</Button></div></TableCell>
                                <TableCell><div><p>Ketvirtadienis</p> <Button onClick={() =>this.toggle(3)} variant="contained">Pridėti laiką</Button></div></TableCell>
                                <TableCell><div><p>Penktadienis</p> <Button onClick={() =>this.toggle(4)} variant="contained">Pridėti laiką</Button></div></TableCell>
                                <TableCell><div><p>Šeštadienis</p> <Button onClick={() => this.toggle(5)} variant="contained">Pridėti laiką</Button></div></TableCell>
                                <TableCell><div><p>Sekmadienis</p> <Button onClick={() => this.toggle(6)} variant="contained">Pridėti laiką</Button></div></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {times}
                            </TableRow>
                        </TableBody>
                        <Button onClick={this.handleSubmitButton}>Išsaugoti</Button>
                    </Table>
                </Paper>
            </div>
        );
    }
}