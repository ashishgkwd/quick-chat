import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ChatView from './ChatView/ChatView';
import SettingsView from './SettingsView/SettingsView';

const styles = theme => ({
    mainContent: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        marginLeft: 200,
    },
    toolbar: theme.mixins.toolbar,
});

class MainContent extends Component {

    renderByRoute = () => {
        switch (this.props.location.pathname) {
            case "/chats":
                return <ChatView />;

            case "/settings":
                return <SettingsView />;

            default:
                return (<p>No route found</p>)
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainContent}>
                <div className={classes.toolbar} />
                <div>
                    {this.renderByRoute()}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MainContent);
