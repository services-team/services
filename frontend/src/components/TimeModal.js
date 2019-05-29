import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DatePicker from 'react-datepicker';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
});


class TimeModal extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Dialog
                    className={classes.dialogPaper}
                    fullWidth
                    maxWidth="xs"
                    onClose={this.props.toggle}
                    open={true}
                    aria-labelledby="form-dialog-title"    
                >
                    <DialogTitle id="form-dialog-title">Naujo darbo laiko pridėjimas</DialogTitle>
                    <DialogContent align="center">
                    <InputLabel htmlFor="Nuo">Laikas nuo</InputLabel>
                    <div>
                        <DatePicker 
                            selected={this.props.timeFromValue}
                            onChange={this.props.handleFromChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="HH:mm"
                            id="Nuo"
                        />
                        </div>
                    <InputLabel htmlFor="Iki">Laikas iki</InputLabel>
                    <div>
                        <DatePicker 
                            selected={this.props.timeToValue}
                            onChange={this.props.handleToChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="HH:mm"
                            id="Iki"
                        />
                    </div>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.props.toggle}
                            color="primary">
                            Atšaukti
                        </Button>
                        <Button
                            onClick={this.props.handleModalSubmit}
                            color="primary"
                            variant="contained">
                            Išsaugoti
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

export default withStyles(styles)(TimeModal);