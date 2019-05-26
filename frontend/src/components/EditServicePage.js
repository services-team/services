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

    onEditSubmit = () => {
        const service = {
            title: this.state.title,
            description: this.state.description,
            priceFrom: this.state.priceFrom,
            priceTo: this.state.priceTo,
            city: this.state.city
        }
        axios.put(`/api/service/${this.props.match.params.id}/`, service)
        .then(() => this.props.history.push('/myservices'))
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
            <ServiceForm
            title={this.state.title}
            description={this.state.description}
            priceFrom={this.state.priceFrom}
            priceTo={this.state.priceTo}
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