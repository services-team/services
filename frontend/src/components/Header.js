// import React from 'react';
// import {NavLink} from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import { NoSsr, Typography } from '@material-ui/core';
// import { Tabs } from '@material-ui/core/Tabs';
// import { Tab } from '@material-ui/core/Tab';
// import SwipeableViews from 'react-swipeable-views';

// function TabContainer(children, dir) {
//     return (
//         <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//             {children}
//         </Typography>
//     );
// }

// TabContainer.propTypes = {
//     children: PropTypes.node.isRequired,
//     dir: PropTypes.string.isRequired
// };


// // function LinkTab(props) {
// //     return <Tab component="a" onClick={event => event.preventDefault()} {...props} />
// // }

// const styles = theme => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         width: '100%'
//     }
// });

// class NavTabs extends React.Component {
//     state = {
//         value: 0
//     };

//     handleChange = (event, value) => {
//         this.setState({ value });
//     };

//     handleChangeIndex = index => {
//         this.setState({ value: index });
//     };

//     render() {
//         const { classes, theme } = this.props;
//         return(
//             <div className={classes.root}>
//                 <AppBar position="static" color="secondary">
//                     <Tabs
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     fullWidth
//                     >
//                         <Tab label="Home" />
//                         <Tab label="Add Service" />
//                         <Tab label="My Services" />
//                     </Tabs>
//                     <SwipeableViews
//                         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                         index={this.state.value}
//                         onChangeIndex={this.handleChangeIndex}
//                     >
//                         <TabContainer dir={theme.direction}>
//                             <div><p>Pirmas puslapis</p></div>
//                         </TabContainer>
//                         <TabContainer dir={theme.direction}>
//                             <div><p>Antras puslapis</p></div>
//                         </TabContainer>
//                         <TabContainer dir={theme.direction}>
//                             <div><p>Trecias puslapis</p></div>
//                         </TabContainer>
//                     </SwipeableViews>
//                 </AppBar>
//                 </div>
//         );
//     }
// }

// export default withStyles(styles, {withTheme: true})(NavTabs);


// // export default () => (
// //     <header>
// //         <h1>Services App</h1>
// //         <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
// //         <NavLink to="/create" activeClassName="is-active">Add Service</NavLink>
// //         <NavLink to="/help" activeClassName="is-active">Help</NavLink>
// //     </header>
// // );
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Prisijungęs kaip + vardas</h1>
                <div className="centeredHeader">
                    <ul className="header">
                        <div className="row">
                                <div className="col">
                                    <li><NavLink to="/">HOME</NavLink></li>
                                </div>
                                <div className="col">
                                    <li><NavLink to="/create">ADD SERVICE</NavLink></li>
                                </div>
                                <div className="col">
                                    <li><NavLink to="/help">HELP</NavLink></li>
                                </div>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}