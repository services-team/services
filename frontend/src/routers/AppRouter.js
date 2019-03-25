import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ServiceDashboardPage from '../components/ServiceDashboardPage';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import HomePage from '../HomePage';

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

export default () => (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <div className="row">
                <div className="col-2">
                
                </div>
                <div className="col-8">
                    <Header />
                    <Switch>
                        <div className="gradient">
                            <Route path="/" component={ServiceDashboardPage} exact={true} />
                            <Route path="/create" />
                            <Route path="/edit/:id"  />
                            <Route path="/help"  />
                            <Route />
                            <Route  />
                        </div>
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