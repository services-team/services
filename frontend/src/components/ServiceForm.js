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

class ServiceForm extends React.Component {
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
                                label="Įveskite paslaugos pavadinimą"
                                placeholder="Pavadinimas"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.title}
                                onChange={this.props.onTitleChange}
                            />
                            <TextField
                                id="description-input"
                                type="text"
                                label="Įveskite paslaugos aprašymą"
                                placeholder="Aprašymas"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.description}
                                onChange={this.props.onDescriptionChange}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                id="priceFrom-input"
                                type="text"
                                label="Įveskite minimalią kainą"
                                placeholder="Minimali kaina"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.price_From}
                                onChange={this.props.onPriceFromChange}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                id="priceTo-input"
                                type="text"
                                label="Įveskite maksimalią kainą"
                                placeholder="Maksimali kaina"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.price_To}
                                onChange={this.props.onPriceToChange}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                id="title-input"
                                type="text"
                                label="Įveskite miestą"
                                placeholder="Miestas"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                value={this.props.city}
                                onChange={this.props.onCityChange}
                            />
                            <Button variant="contained" color="secondary" onClick={this.props.onSubmit}>Išsaugoti</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Paper>
        );
    }
}

export default withStyles(styles)(ServiceForm);