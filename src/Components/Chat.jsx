import React from 'react'
import { Link } from 'react-router-dom'
import Clothes from './Clothes'
import { useState, useRef, useEffect} from 'react'
import { Send, ImageIcon, Loader2 } from 'lucide-react';


const Chat = () => {
    const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I can generate images for you. Just describe what you\'d like to see!',
      type: 'text'
    }
  ]);
    const [input, setInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        scrollBottom();
    }, [messages]);

  return (
    <div class='container'>
        <header class='header'>
            <div className="header-content">
          <div className="header-text">
            <h1>Discover your Style!</h1>
            <p>Describe your vision, I'll see what I can do!</p>
          </div>
        </div>
        </header>
    </div>
  )
}

export default Chat