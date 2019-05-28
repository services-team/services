import React from 'react';
import SubServiceForm from './SubServiceForm';
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

    

    handlePriceChange = (e) => {
        const price = e.target.value;
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ price })
        }
    }

    handleDurationChange = (e) => {
        const duration = e.target.value;
        this.setState({ duration });
    }


    onServiceSubmit = () => {
        const subService = {
            title: this.state.title,
            price: this.state.price,
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
                <SubServiceForm
                 onSubmit={this.onServiceSubmit}
                 onTitleChange={this.handleTitleChange}
                 onPriceChange={this.handlePriceChange}
                 onDurationChange={this.handleDurationChange}
                />
            </div>
        );
    }
}