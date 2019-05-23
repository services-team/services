import React from 'react';
import ServiceForm from './ServiceForm';
import axios from 'axios';

export default class AddSubServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: 0,
            duration: 0,
            serviceId: this.props.match.params.id
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
        const subService = {
            title: this.state.title,
            price: this.state.price_To,
            duration: this.state.duration,
            serviceId: this.state.serviceId

        }
        axios.post('/api/subservice/', subService)
        .then((res) => {
            this.props.history.push('/');
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
            <h2 align="center">Naujos popaslaugės kūrimas</h2>
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