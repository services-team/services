import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class OrderModal extends React.Component {

    render() {
        return (
            <div>
                <Dialog
                    onClose={this.props.toggle}
                    open={true}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Paslaugos užsakymas</DialogTitle>
                    <DialogContent>
                        <p>{this.props.response}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.props.toggle}
                            color="primary"
                        >
                        GERAI
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}