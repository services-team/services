import React from 'react';
import ServiceForm from './ServiceForm';
import axios from 'axios';

export default class EditServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            }
        }

    componentDidMount() {
        axios.get(`/api/service/${this.props.match.params.id}`)
        .then((res) => {
            this.setState(res.data, () => console.log(this.state));
        })
        .catch((err) => console.log(err));
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

    onEditSubmit = () => {
        const service = {
            title: this.state.title,
            description: this.state.description,
            price_From: this.state.price_From,
            price_To: this.state.price_To,
            city: this.state.city
        }
        axios.put(`/api/service/${this.props.match.params.id}/`, service)
        .then(() => this.props.history.push('/dashboard'));
        ;
    }

    render() {
        return (
            <div>
            <ServiceForm
            title={this.state.title}
            description={this.state.description}
            price_From={this.state.price_From}
            price_To={this.state.price_To}
            city={this.state.city}
            onSubmit={this.onEditSubmit}
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