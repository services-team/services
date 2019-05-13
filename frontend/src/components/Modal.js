import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default class FormDialog extends React.Component {

  state = {
    fullNameValue: '',
    usernameValue: '',
    passwordValue: '',
    passwordRepeatValue: '',
    emailValue: '',
    fullNameError: false,
    usernameError: false,
    passwordError: false,
    emailError: false
  }

  handleFullNameChange = (e) => {
    this.setState({ fullNameValue: e.target.value });
  }
  handleUsernameChange = (e) => {
    this.setState({ usernameValue: e.target.value });
  }
  handlePasswordChange = (e) => {
    this.setState({ passwordValue: e.target.value });
  }
  handlePassWordRepeatChange = (e) => {
    this.setState({ passwordRepeatValue: e.target.value });
  }
  handleEmailChange = (e) => {
    this.setState({ emailValue: e.target.value });
  }

  handleSubmit = () => {
    if(this.state.fullNameValue < 1) {
      this.setState({ fullNameError: true });
    }
    else { this.setState({ fullNameError: false }) }
    if(this.state.usernameValue.length < 5) {
      this.setState({ usernameError: true });
    }
    else { this.setState({ usernameError: false }) }
    if(this.state.passwordValue !== this.state.passwordRepeatValue) {
      this.setState({ passwordError: true });
    }
    else { this.setState({ passwordError: false }) }
    if(!this.state.emailValue.includes('@')) {
      this.setState({ emailError: true });
    }
    else { this.setState({ emailError: false }) }
    if(!this.state.passwordError && !this.state.usernameError && !this.state.emailError && this.state.fullNameError) {
      const user = {
        UserName: this.state.usernameValue,
        Password: this.state.passwordValue,
        Email: this.state.emailValue,
        FullName: this.state.fullNameValue
      }
      axios.post('/api/applicationuser/register', user)
      .then((res) => this.props.toggle)
      .catch((err) => console.log(err));
    }
  }

    render() {
      return (
        <div>
          <Dialog
            open={true}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Registracija</DialogTitle>
            <DialogContent>
              {this.state.fullNameError ? 
                <div className="errorMessage">
                  <h4>Klaidingas vartojo vardas ir pavardė</h4>
                  <h6>Vardas ir pavardė negali būti papliktas tuščias</h6>
                </div>
              : ''}
              {this.state.usernameError ? 
                <div className="errorMessage">
                  <h4>Klaidingas vartojo slapyvardis!</h4>
                  <h6>Vartotojo vardą turi sudaryti bent 6 simboliai</h6>
                </div>
               : ''}
               {this.state.passwordError ? 
                <div className="errorMessage">
                  <h4>Klaidingas vartojo slaptažodis!</h4>
                  <h6>Slaptažodžiai turi sutapti</h6>
                </div>
               : ''}
               {this.state.emailError ? 
                <div className="errorMessage">
                  <h4>Klaidingas vartojo elektroninis paštas!</h4>
                  <h6>Paštas turi turėti @</h6>
                </div>
               : ''}
              <TextField
                autoFocus
                margin="dense"
                id="fullName"
                label="Vardas ir pavardė"
                type="text"
                fullWidth
                onChange={this.handleFullNameChange}
              />
              <TextField
                margin="dense"
                id="username"
                label="Vartotojo vardas"
                type="text"
                fullWidth
                onChange={this.handleUsernameChange}
              />
              <TextField
                margin="dense"
                id="password"
                label="Slaptažodis"
                type="password"
                fullWidth
                onChange={this.handlePasswordChange}
              />
              <TextField
                margin="dense"
                id="password-repeat"
                label="Pakartokite slaptažodį"
                type="password"
                fullWidth
                onChange={this.handlePassWordRepeatChange}
              />
              <TextField
                margin="dense"
                id="mail"
                label="Elektroninis paštas"
                type="email"
                fullWidth
                onChange={this.handleEmailChange}
              />
            </DialogContent>
            <DialogActions>
              <Button 
                onClick={this.props.toggle} 
                color="primary">
                Atšaukti
              </Button>
              <Button 
                onClick={this.handleSubmit} 
                color="primary"
                variant="contained">
                Registruotis
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

