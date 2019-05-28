import React from 'react';
import ServiceForm from './ServiceForm';
import axios from 'axios';

export class AddServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            priceFrom: 0,
            priceTo: 0,
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
        const priceFrom = e.target.value;
        this.setState({ priceFrom });
    }

    handlePriceToChange = (e) => {
        const priceTo = e.target.value;
        this.setState({ priceTo });
    }

    handleCityChange = (e) => {
        const city = e.target.value;
        this.setState({ city });
    }

    onServiceSubmit = () => {
        let priceFrom = 0;
        let priceTo = 0;
        let service = {};
        if (this.state.priceFrom > this.state.priceTo) {
            priceFrom = this.state.priceTo;
            priceTo = this.state.priceFrom;
            service = {
                title: this.state.title,
                description: this.state.description,
                priceFrom: priceFrom,
                priceTo: priceTo,
                city: this.state.city
            }
        }
        else {
            service = {
                title: this.state.title,
                description: this.state.description,
                priceFrom: this.state.priceFrom,
                priceTo: this.state.priceTo,
                city: this.state.city
            }
        }
        console.log(service);
        axios.post('/api/service/', service)
        .then((res) => {
            this.props.history.push('/');
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
            <h2 align="center">Naujos paslaugos kūrimas</h2>
                <ServiceForm
                 onSubmit={this.onServiceSubmit}
                 title={this.state.title}
                 description={this.state.description}
                 priceFrom={this.state.priceFrom}
                 priceTo={this.state.priceTo}
                 city={this.state.city}
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