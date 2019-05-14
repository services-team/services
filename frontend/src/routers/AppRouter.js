import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ServiceDashboardPage from '../components/ServiceDashboardPage';
import ServiceForm from '../components/ServiceForm';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import HomePage from '../HomePage';
import EditServicePage from '../components/EditServicePage';
import PrivateRoute from './PrivateRoute';
import MyServicesPage from '../components/MyServicesPage';
import { AddServicePage } from '../components/AddServicePage';
import ReservationsPage from '../components/ReservationsPage';
import Testas from '../components/Testas';
//import EditServicePage from '../components/EditServicePage';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#FFFFFF'
        }
    },
    typography: {
        useNextVariants: true
    }
});

function checkIfAuthed() {
    const token = localStorage.getItem('userTokken');
    if (token !== 'null') {
        return true;
    }
    return false;
}

export default () => (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <div className="row">
                <div className="col-2">
                    <p>kazkas</p>
                </div>
                <div className="col-8">
                    <Header />
                    <Switch>
                            <Route exact path="/" component={ServiceDashboardPage} />
                            <PrivateRoute exact path="/create" isAuthed={checkIfAuthed()} component={AddServicePage} />
                            <PrivateRoute exact path="/edit/:id" isAuthed={checkIfAuthed()} component={EditServicePage} />
                            <PrivateRoute exact path="/myservices" isAuthed={checkIfAuthed()} component={MyServicesPage} />
                            <PrivateRoute exact path="/reservations" isAuthed={checkIfAuthed()} component={ReservationsPage} />
                            <Route path="*" component={Testas} />
                    </Switch>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                
                </div>
                <div className="col-8">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
);