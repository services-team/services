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

export default class MySchedulePage extends React.Component {

    state = {
        weeklySchedule: {
            id: 1,
            title: "Tvarkaraštis",
            day: [
                {
                    weekDay: {
                        id: 1,
                        name: "Monday"
                    },
                    workTime: [
                        {
                            id: 1,
                            timeFrom: 8,
                            timeTo: 17
                        }
                    ]
                },
                {
                    weekDay: {
                        id: 2,
                        name: "Tuesday"
                    },
                    workTime: [
                        {
                            id: 1,
                            timeFrom: 9,
                            timeTo: 18
                        }
                    ]
                },
                {
                    weekDay: {
                        id: 3,
                        name: "Wednesday"
                    },
                    workTime: [
                        {
                            id: 1,
                            timeFrom: 10,
                            timeTo: 19
                        }
                    ]
                },
                {
                    weekDay: {
                        id: 4,
                        name: "Thursday"
                    },
                    workTime: [
                        {
                            id: 1,
                            timeFrom: 6,
                            timeTo: 15
                        }
                    ]
                },
                {
                    weekDay: {
                        id: 5,
                        name: "Friday"
                    },
                    workTime: [
                        {
                            id: 1,
                            timeFrom: 0,
                            timeTo: 9
                        }
                    ]
                },
                {
                    weekDay: {
                        id: 6,
                        name: "Saturday"
                    },
                    workTime: [
                        {
                            id: 1,
                            timeFrom: 10,
                            timeTo: 14
                        },
                        {
                            id: 2,
                            timeFrom: 15,
                            timeTo: 20
                        }
                    ]
                },
                {
                    weekDay: {
                        id: 7,
                        name: "Sunday"
                    },
                    workTime: [{
                        id: 1,
                        timeFrom: 17,
                        timeTo: 24
                    }]
                },
            ]
        },
        modalFrom: 0,
        modalTo: 0,
        modal: false,
        currentDay: 0,
        timeFrom: new Date('2019-05-22T00:00:00'),
        timeTo: 0
    }


    addWorkTime = () => {
        const workTime = {
            minutesFrom: this.state.modalFrom,
            minutesTo: this.state.modalTo            
        }
        this.state.weeklySchedule.day[this.state.currentDay].workTime.push(workTime);
    }

    refreshList = () => {
        axios.get('/api/weeklyschedule')
        .then((res) => this.setState({ weeklySchedule: res.data.objects }))
        .catch((err) => console.log(err));
    }

    handleTimeFromChange = time => {
        this.setState({ timeFrom: time });
    }
    handleTimeToChange = time => {
        this.setState({ timeTo: time });
    }

    handleFromChange = (e) => {
        this.setState({ modalFrom: e.target.value });
    }
    handleToChange = (e) => {
        this.setState({ modalTo: e.target.value });
    }
    handleModalSubmit = () => {
        this.addWorkTime();
        this.toggle();
        const id = this.state.weeklySchedule.id;
        axios.put('/api/weeklyschedule', id)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err))

    }
    toggle = (dayNumber) => {
        this.setState({ modal: !this.state.modal, currentDay: dayNumber });
        console.log(this.state);
    }
    renderMethod = () => (
        this.state.weeklySchedule.day.map((item) => {
            return (
                <TableCell  key={item.weekDay.id}>
                    <ScheduleTimeList dayItem={item} />
                </TableCell>
            ) 
        })
    );

    componentDidMount() {
        this.refreshList();
    }

    render() {
        return (
            <div>
                {this.state.modal ? (
                    <TimeModal
                     timeValue={this.state.timeFrom}
                     toggle={this.toggle}
                     handleModalSubmit={this.handleModalSubmit}
                     handleFromChange={this.handleFromChange}
                     handleToChange={this.handleToChange} />
                ) : null}
                <Paper>
                    <h2 align="center">Paslaugos tiekėjo tvarkaraštis</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><div><p>Pirmadienis</p> <Button onClick={() => this.toggle(0)} variant="contained">Pridėti laiką</Button></div></TableCell>
                                <TableCell><div><p>Antradienis</p> <Button onClick={() =>this.toggle(1)} variant="contained">Pridėti intervalą</Button></div></TableCell>
                                <TableCell><div><p>Trečiadienis</p> <Button onClick={() =>this.toggle(2)} variant="contained">Pridėti intervalą</Button></div></TableCell>
                                <TableCell><div><p>Ketvirtadienis</p> <Button onClick={() =>this.toggle(3)} variant="contained">Pridėti intervalą</Button></div></TableCell>
                                <TableCell><div><p>Penktadienis</p> <Button onClick={() =>this.toggle(4)} variant="contained">Pridėti intervalą</Button></div></TableCell>
                                <TableCell><div><p>Šeštadienis</p> <Button onClick={() => this.toggle(5)} variant="contained">Pridėti intervalą</Button></div></TableCell>
                                <TableCell><div><p>Sekmadienis</p> <Button onClick={() => this.toggle(6)} variant="contained">Pridėti intervalą</Button></div></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {this.renderMethod()}
                            </TableRow>
                        </TableBody>
                        
                    </Table>
                </Paper>
            </div>
        );
    }
}