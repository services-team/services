import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ScheduleTimeListItem from './ScheduleTimeListItem';

export default class ScheduleTimeList extends React.Component {

    onCancelButtonClick = (e) => {

    }

    render() {
        return (
                    <ul>
                        {this.props.dayItem.workTime.map((item) => {
                            return <ScheduleTimeListItem key={item.id} workTimes={item} onDeletion={this.props.onCancelButtonClick} />
                        })}
                    </ul>
                    
        );
    }
}