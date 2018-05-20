import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    drawPaper: {
        width: 200,
    },
    toolbar: theme.mixins.toolbar,
});

class SideBar extends Component {

    render() {
        const { classes } = this.props;
        const drawerPaperClass = { paper: classes.drawPaper };
        return (
            <div>
                <Drawer classes={drawerPaperClass} variant="permanent" anchor="left">
                    <div className={classes.toolbar} />
                    <ul>
                        <li><Link to="/chats">Chats</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(SideBar);
