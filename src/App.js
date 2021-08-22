import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import React from 'react'

const App = () => {
  return (
    <ChatEngine
    height="100vh"
    projectID="6f1911ce-0bd2-4944-8b31-2c119dda6064"
    userName="DevAdmin"
    userSecret="135900"
    renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}

    />
  );
}

export default App


