import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class ChatInput extends Component {
    render() {
        return (
            <div>
                <TextField
                    label="New Message"
                    helperText="Type your message above"
                    fullWidth
                    multiline
                    margin="normal"
                />
            </div>
        );
    }
}

export default ChatInput;