import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import './ChatHistory.css';

class ChatHistory extends Component {
    render() {
        return (
            <div className="Chat-history">
                <Paper elevation={1} className="Chat-history-paper">
                    <div className="Chat-history-content">
                        <p>Chat History</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default ChatHistory;
