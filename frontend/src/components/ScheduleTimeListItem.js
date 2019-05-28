import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class ScheduleTimeListItem extends React.Component {

    render() {
        return(
                <li>
                        <p>{this.props.workTimes.minutesFrom} - {this.props.workTimes.minutesTo}</p>
                </li>
        ); 
    }
}
