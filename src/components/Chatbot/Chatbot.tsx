import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Ticket, Book, HelpCircle, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { useAuth } from '../../context/AuthContext';

type ChatMode = 'booking' | 'guide';
type MessageType = 'user' | 'bot';

interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE = {
  booking: "Hello! I'm Muse, your ticket booking assistant. I can help you book tickets, check availability, and manage your reservations. What would you like to do today?",
  guide: "Hi! I'm Muse, your museum guide. I can tell you about our exhibitions, artifacts, and provide educational content. What would you like to learn about?",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [mode, setMode] = useState<ChatMode>('booking');
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          type: 'bot',
          content: INITIAL_MESSAGE[mode],
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, mode]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleModeSwitch = (newMode: ChatMode) => {
    setMode(newMode);
    setMessages([
      {
        id: Date.now().toString(),
        type: 'bot',
        content: INITIAL_MESSAGE[newMode],
        timestamp: new Date(),
      },
    ]);
  };

  const sendMessage = async (message: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, mode })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }
      
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error:', error);
      return "I apologize, but I'm having trouble connecting to the server right now. Please try again later.";
    }
  };

  const processMessage = async (userMessage: string) => {
    setIsTyping(true);
    
    try {
      const response = await sendMessage(userMessage);
      
      setMessages(prev => [...prev, 
        {
          id: Date.now().toString(),
          type: 'bot',
          content: response,
          timestamp: new Date(),
        }
      ]);
    } catch (error) {
      console.error('Error processing message:', error);
      setMessages(prev => [...prev, 
        {
          id: Date.now().toString(),
          type: 'bot',
          content: "I apologize, but I'm having trouble processing your request right now. Please try again later.",
          timestamp: new Date(),
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as MessageType,
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    await processMessage(input);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between bg-blue-600 text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6" />
                <h3 className="font-semibold">Muse - Museum Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mode Selector */}
            <div className="flex border-b">
              <button
                onClick={() => handleModeSwitch('booking')}
                className={clsx(
                  'flex-1 p-3 flex items-center justify-center gap-2 transition-colors',
                  mode === 'booking' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                )}
              >
                <Ticket className="h-4 w-4" />
                Booking Assistant
              </button>
              <button
                onClick={() => handleModeSwitch('guide')}
                className={clsx(
                  'flex-1 p-3 flex items-center justify-center gap-2 transition-colors',
                  mode === 'guide' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                )}
              >
                <Book className="h-4 w-4" />
                Museum Guide
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={clsx(
                    'flex',
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={clsx(
                      'max-w-[80%] rounded-lg p-3',
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    )}
                  >
                    <ReactMarkdown className="prose prose-sm">
                      {message.content}
                    </ReactMarkdown>
                    <div
                      className={clsx(
                        'text-xs mt-1',
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      )}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-gray-700"
                >
                  <HelpCircle className="h-4 w-4" />
                  Help
                </button>
                {user ? (
                  <span>Logged in as {user.name}</span>
                ) : (
                  <span>Guest User</span>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}