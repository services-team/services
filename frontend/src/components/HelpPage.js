import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { ListItem, ListItemText } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';


export default class MorePage extends React.Component {
    state = {
        isOpened: this.props.isOpened ? true : false
    }

    toggleDrawer() {
        this.setState({isOpened: false});
    }

    render() {
        const sideList = (
            <div>
                <List>
                    {['Jūsų paslaugos', 'Užsisakytos paslaugos'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        return(
            <div>
                <Drawer open={this.state.isOpened}>
                    <div
                     tabIndex={0}
                     role="button"
                     onClick={this.toggleDrawer}
                     onKeyDown={this.toggleDrawer}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}
