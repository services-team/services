import React from 'react';
import { TextField } from '@material-ui/core';

export default class LoginInput extends React.Component {

    checkIfEmpty = itemString => {
        if (itemString === "")
            return false;
        else return true;
    }

    render() {
        return (
            <div>
                <TextField
                    id="username-input"
                    type={this.props.type}
                    label={this.checkIfEmpty(this.props.firstField) ? this.props.firstField : " "}
                    placeholder={this.checkIfEmpty(this.props.secondField) ? this.props.secondField : " "}
                    onChange={this.props.changeHandler}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </div>
        );
    }
}