import React from 'react';
import { connect } from 'react-redux';
import ServiceForm from './ServiceForm';
import { startAddService } from '../actions/services';
import axios from 'axios';

export class AddServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price_From: 0,
            price_To: 0,
            city: ''
        }
    }

    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState({ title });
    }

    
    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    }

    handlePriceFromChange = (e) => {
        const price_From = e.target.value;
        this.setState({ price_From });
    }

    handlePriceToChange = (e) => {
        const price_To = e.target.value;
        this.setState({ price_To });
    }

    handleCityChange = (e) => {
        const city = e.target.value;
        this.setState({ city });
    }

    onServiceSubmit = () => {
        const service = {
            title: this.state.title,
            description: this.state.description,
            price_From: this.state.price_From,
            price_To: this.state.price_To,
            city: this.state.city
        }
        const config = {
            
        };
        axios.post('/api/service/', service)
        .then((res) => {
            this.props.history.push('/dashboard');
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Pridėti naują paslaugą</h1>
                <ServiceForm
                 onSubmit={this.onServiceSubmit}
                 onTitleChange={this.handleTitleChange}
                 onDescriptionChange={this.handleDescriptionChange}
                 onPriceFromChange={this.handlePriceFromChange}
                 onPriceToChange={this.handlePriceToChange}
                 onCityChange={this.handleCityChange}
                />
            </div>
        );
    }
}