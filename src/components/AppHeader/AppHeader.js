import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    appHeader: {
        zIndex: theme.zIndex.drawer + 1,
    }
});

class AppHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appHeader} position="absolute">
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            Quick-Chat
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(AppHeader);