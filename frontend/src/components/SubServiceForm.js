import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        width: '100%',
        flexGrow: 1
    },
    compressed: {
        textAlign: 'center'
    }
});

class SubServiceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Paper className={styles.root}>
                {this.state.error && <p>{this.state.error}</p>}
                <Paper className={styles.compressed}>
                    <Grid container spacing={24} justify="center">
                        <Grid item xs={10}>
                            <TextField
                                id="title-input"
                                type="text"
                                label="Įveskite popaslaugės pavadinimą"
                                placeholder="Pavadinimas"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.title}
                                onChange={this.props.onTitleChange}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                id="price-input"
                                type="number"
                                inputProps={{ min: "0.01", step: "0.01" }}
                                label="Įveskite popaslaugės kainą"
                                placeholder="Kaina"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.price}
                                onChange={this.props.onPriceChange}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                id="duration-input"
                                type="number"
                                label="Įveskite popaslaugės trukmę minutėmis"
                                placeholder="Trukmė minutėmis"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.duration}
                                onChange={this.props.onDurationChange}
                            />
                        </Grid>
                            <Grid item xs={10}>
                                <Button variant="contained" color="secondary" onClick={this.props.onSubmit}>Išsaugoti</Button>
                            </Grid>
                        </Grid>

                </Paper>
            </Paper>
        );
    }
}

export default withStyles(styles)(SubServiceForm);