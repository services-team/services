import React from 'react';
import './App.css';
import Modal from './components/Modal';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewAvailable: true,
      activeItem: {
        title: " ",
        description: " ",
        availability: true,
        place: "",
        priceForm: 0,
        priceTo: 0
      },
      servicesList: []
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.props.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get('/api/service/')
      .then(res => {
        console.log(res.data);
        this.setState({ servicesList: res.data });
      })
      .catch(err => console.log(err));
  };

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewAvailable: true });
    }
    return this.setState({ viewAvailable: false });
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewAvailable ? "active" : ""}
        >
          Available
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewAvailable ? "" : "active"}
          >
            Unavailable
          </span>
      </div>
    );
  };

  

  renderItems = () => {
    const allItems = Array.from(this.state.servicesList);
    return allItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <p>{item.title}</p>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit 
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          > 
            Delete 
          </button>
      </li>
    ));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/service/${item.id}/`, item)
        .then(res => this.refreshList(),
        this.setState({ modal: !this.state.modal }));
      return;
    }
    axios
      .post("/api/service/", item)
      .then(res => this.refreshList());
    this.setState({ modal: !this.state.modal });
  };

  handleDelete = item => {
    axios
      .delete(`/api/service/${item.id}`)
      .then(res => this.refreshList());
  };

  createItem = () => {
    const item = { title: " ", description: " ", availability: true };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };



  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Services App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <button className="btn btn-primary" onClick={this.createItem}> Add Service </button>
            </div>
            {this.renderTabList()}
            <ul className="list-group list-group-flush">
              {this.renderItems()}
            </ul>
          </div>
        </div>
        <div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
            handling={this.handleChange}
            />
        ) : null}
        </div>
      </main>
    );
  }
}