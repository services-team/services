import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class TimeModal extends React.Component {
    render() {
        return (
            <div>
                <Dialog
                    maxWidth="xs"
                    onClose={this.props.toggle}
                    open={true}
                    aria-labelledby="form-dialog-title"    
                >
                    <DialogTitle id="form-dialog-title">PRANEŠIMAS</DialogTitle>
                    <DialogContent align="center">
                        <h6>{this.props.errorString}</h6>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.props.toggle}
                            color="primary"
                            variant="contained">
                            Gerai
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}