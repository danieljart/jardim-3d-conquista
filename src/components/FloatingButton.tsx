
import React from 'react';
import { MessageSquare } from "lucide-react";

const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg h-16 w-16 rounded-full p-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-900/20"
      onClick={() => window.open('https://wa.me/5511949723280', '_blank')}
      aria-label="WhatsApp"
    >
      <MessageSquare className="h-7 w-7 text-white" />
    </button>
  );
};

export default FloatingButton;
