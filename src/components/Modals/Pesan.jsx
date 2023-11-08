import React, { useState } from 'react';

const Pesan = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = () => {
    const newMessage = `Pesan baru #${messages.length + 1}`;
    setMessages([...messages, newMessage]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="p-4 border rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-4">Pesan Masuk</h2>
      {messages.map((message, index) => (
        <div
          key={index}
          className="bg-gray-200 p-2 mb-2 rounded-lg cursor-pointer"
          onClick={() => {
            const updatedMessages = [...messages];
            updatedMessages.splice(index, 1);
            setMessages(updatedMessages);
          }}
        >
          {message}
        </div>
      ))}
      {messages.length === 0 && <p className="text-gray-500">Tidak ada pesan.</p>}
      <div className="mt-4">
      </div>
    </div>
  );
};

export default Pesan;
