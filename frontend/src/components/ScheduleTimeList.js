import React from 'react';
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