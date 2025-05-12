
import React from 'react';
import { Button } from "@/components/ui/button";
import { Whatsapp } from "lucide-react";

const FloatingButton = () => {
  return (
    <Button 
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 shadow-lg h-14 w-14 rounded-full p-0"
      onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
      aria-label="WhatsApp"
    >
      <Whatsapp className="h-6 w-6" />
    </Button>
  );
};

export default FloatingButton;
