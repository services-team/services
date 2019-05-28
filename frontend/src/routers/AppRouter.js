import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ServiceDashboardPage from '../components/ServiceDashboardPage';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import EditServicePage from '../components/EditServicePage';
import PrivateRoute from './PrivateRoute';
import MyServicesPage from '../components/MyServicesPage';
import { AddServicePage } from '../components/AddServicePage';
import ReservationsPage from '../components/ReservationsPage';
import MySchedulePage from '../components/MySchedulePage';
import AddSubServicePage from '../components/AddSubServicePage';
import OrderPage from '../components/OrderPage';
import OrderedServicesPage from '../components/OrderedServicesPage';
import Testas from '../components/Testas';

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
            <div className="containeris">
            <div className="row">
                <div className="col">
                    <Header />
                    <Switch>
                            <Route exact path="/" component={ServiceDashboardPage} />
                            <PrivateRoute exact path="/create" isAuthed={checkIfAuthed()} component={AddServicePage} />
                            <PrivateRoute exact path="/edit/:id" isAuthed={checkIfAuthed()} component={EditServicePage} />
                            <PrivateRoute exact path="/myservices" isAuthed={checkIfAuthed()} component={MyServicesPage} />
                            <PrivateRoute exact path="/reservations" isAuthed={checkIfAuthed()} component={ReservationsPage} />
                            <PrivateRoute exact path="/schedule" isAuthed={checkIfAuthed()} component={MySchedulePage} />
                            <PrivateRoute exact path="/subservice/:id" isAuthed={checkIfAuthed()} component={AddSubServicePage} />
                            <PrivateRoute exact path="/order/:id" isAuthed={checkIfAuthed()} component={OrderPage} />
                            <PrivateRoute exact path="/orders" isAuthed={checkIfAuthed()} component={OrderedServicesPage} />
                            <Route path="*" component={Testas} />
                    </Switch>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
);