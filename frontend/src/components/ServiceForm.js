import React from 'react';
import NameInput from './NameInput';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            priceFrom: 0,
            priceTo: 0,
            city: '',
            id: 0
        }
    };

    // handleChange = e => {
    //     let { name, value } = e.target;
        
    //     const activeItem = { ...this.state.activeItem, [name]: value };
    //     this.setState({ activeItem });
    // };

    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState({ title: title });
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description: description });
    }

    handlePriceFromChange = (e) => {
        const priceFrom = e.target.value;
        this.setState({ priceFrom: priceFrom });
    }

    handlePriceToChange = (e) => {
        const priceTo = e.target.value;
        this.setState({ priceTo: priceTo });
    }

    handleCityChange = (e) => {
        const city = e.target.value;
        this.setState({ city: city });
    }

    submitService = () => {
        const item = {
            title: this.state.title,
            description: this.state.description,
            price_From: this.state.priceFrom,
            price_To: this.state.priceTo,
            city: this.state.city
        }
        axios.post("/api/service/", item)
        .then(this.props.history.push('/'));
        console.log("posted");
    };

    render() {
        return (
            <Paper className={styles.root}>
                <h2 align="center">Naujos paslaugos kūrimas</h2>
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
                                onChange={this.handleTitleChange}
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
                                onChange={this.handleDescriptionChange}
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
                                onChange={this.handlePriceFromChange}
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
                                onChange={this.handlePriceToChange}
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
                                onChange={this.handleCityChange}
                            />
                            <Button variant="contained" color="secondary" onClick={this.submitService}>Pridėti paslaugą</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Paper>
        );
    }
}

export default withStyles(styles)(ServiceForm);