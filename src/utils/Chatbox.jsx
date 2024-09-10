import { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        const responses = {
            "general": "How can I assist you today?",
            "support": "Please describe your issue, and I'll help you with it.",
            "order": "Please provide your order number, and I'll check the status."
        };

        setMessages([...messages, { role: 'user', content: option }, { role: 'bot', content: responses[option] }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message to chat
        setMessages([...messages, { role: 'user', content: input }]);
        setInput('');

        // Example of handling different scenarios
        const responseMap = {
            "general inquiry": "For general inquiries, feel free to ask me anything!",
            "product support": "I can help with product support. What seems to be the issue?",
            "order status": "Please provide your order number to check the status."
        };

        const botResponse = responseMap[input.toLowerCase()] || "Sorry, I didn't understand that.";

        setMessages([...messages, { role: 'user', content: input }, { role: 'bot', content: botResponse }]);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-5 p-3 bg-[#1c2e4a] text-white rounded-full shadow-lg flex items-center justify-center z-50"
            >
                <span className="text-lg font-bold">Chat</span>
            </button>

            {isOpen && (
                <div className="fixed bottom-16 right-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-bold">Chatbot</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="p-4 h-64 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.role === 'bot' ? 'text-left' : 'text-right'}`}>
                                <div className={`inline-block px-4 py-2 rounded-lg ${msg.role === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-2">
                            <button onClick={() => handleOptionClick('general')} className="bg-blue-500 text-white p-2 rounded">General Inquiry</button>
                            <button onClick={() => handleOptionClick('support')} className="bg-green-500 text-white p-2 rounded">Product Support</button>
                            <button onClick={() => handleOptionClick('order')} className="bg-red-500 text-white p-2 rounded">Order Status</button>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4 flex">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <button type="submit" className="ml-2 bg-blue-600 text-white p-2 rounded">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
