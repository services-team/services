import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';

export default class TimeModal extends React.Component {
    
    render() {
        return (
            <div>
                <Dialog
                    onClose={this.props.toggle}
                    open={true}
                    aria-labelledby="form-dialog-title"    
                >
                    <DialogTitle id="form-dialog-title">Naujo darbo laiko pridėjimas</DialogTitle>
                    <DialogContent>
                    <TextField 
                    autoFocus
                    margin="dense"
                    id="from"
                    label="Nuo"
                    type="text"
                    fullWidth
                    value={this.props.timeFromValue}
                    onChange={this.props.handleFromChange}
                />
                <TextField 
                    margin="dense"
                    id="iki"
                    label="Iki"
                    type="text"
                    fullWidth
                    value={this.props.timeToValue}
                    onChange={this.props.handleToChange}
                />
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

