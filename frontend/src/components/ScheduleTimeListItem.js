import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';

export default class ScheduleTimeListItem extends React.Component {

    onClick = () => {
        this.props.onDeletion(this.props.workTimes.id);
      }

    render() {
        return(
                <li>
                        <p>{Math.floor(this.props.workTimes.minutesFrom / 60) < 10 ? '0' + Math.floor(this.props.workTimes.minutesFrom / 60) : Math.floor(this.props.workTimes.minutesFrom / 60)}:{(this.props.workTimes.minutesFrom % 60 < 10) ? '0' + this.props.workTimes.minutesFrom % 60 : this.props.workTimes.minutesFrom % 60} - {Math.floor(this.props.workTimes.minutesTo / 60) < 10 ? '0' + Math.floor(this.props.workTimes.minutesTo / 60) : Math.floor(this.props.workTimes.minutesTo / 60)}:{(Math.floor(this.props.workTimes.minutesTo % 60) < 10) ? '0' + Math.floor(this.props.workTimes.minutesTo % 60) : (Math.floor(this.props.workTimes.minutesTo % 60))}<IconButton onClick={this.onClick}><i className="material-icons">cancel</i></IconButton></p>
                </li>
        ); 
    }
}
