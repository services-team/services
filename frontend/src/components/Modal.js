
import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    render() {
      return (
        <div>
          <Dialog
            open={this.props.toggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Service Item</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Change services info
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                defaultValue={this.props.activeItem.title}
                onChange={this.props.handling}
                fullWidth
              />
              <TextField
                margin="dense"
                id="description"
                label="Description"
                type="text"
                defaultValue={this.props.activeItem.description}
                onChange={this.props.handling}
                fullWidth
              />
              <Checkbox
                label="Availability"
                checked={this.props.activeItem.available}
                onChange={this.props.handling}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.toggle} color="primary">
                Cancel
              </Button>
              <Button onClick={this.props.onSave} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

