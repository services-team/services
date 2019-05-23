import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class ScheduleTimeListItem extends React.Component {

    render() {
        return(
                <li>
                        <p>{this.props.workTimes.timeFrom} - {this.props.workTimes.timeTo}</p>
                </li>
        ); 
    }
}

// export default  ({ workTimes }) => (
//     <TableRow>
//         <TableCell component="th" scope="row">
//             {title}
//         </TableCell>
//         <TableCell align="center">{description}</TableCell>
//         <TableCell align="center">{price_From}</TableCell>
//         <TableCell align="center">{price_To}</TableCell>
//         <TableCell align="center">{city}</TableCell>
//         <TableCell align="center">
//         </TableCell>
//     </TableRow>
// );