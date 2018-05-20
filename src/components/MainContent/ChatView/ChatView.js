import React, { Component } from 'react';

import './ChatView.css';
import ChatHistory from './ChatHistory/ChatHistory';
import ChatInput from './ChatInput/ChatInput';

class ChatView extends Component {
    render() {
        return (
            <div className="Chat-view">
                <ChatHistory />
                <ChatInput />
            </div>
        );
    }
}

export default ChatView;