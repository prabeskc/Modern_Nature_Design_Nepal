import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for your message! This is a demo chatbot. In a real implementation, this would connect to your customer service system.',
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full bg-mint-green hover:bg-mint-green/90 text-charcoal shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'hover:scale-110'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Interface */}
      <div
        className={`absolute bottom-16 right-0 w-80 h-96 bg-off-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 transform origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        } sm:w-80 sm:h-96 max-sm:w-72 max-sm:h-80`}
      >
        {/* Header */}
        <div className="bg-mint-green text-charcoal p-4 rounded-t-lg">
          <h3 className="font-semibold text-lg">Chat Support</h3>
          <p className="text-sm opacity-80">We're here to help!</p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isUser
                    ? 'bg-mint-green text-charcoal'
                    : 'bg-gray-100 text-charcoal'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-green focus:border-transparent text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-2 bg-mint-green text-charcoal rounded-lg hover:bg-mint-green/90 transition-colors duration-200 flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;