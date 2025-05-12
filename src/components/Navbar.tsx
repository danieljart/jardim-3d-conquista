
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary text-xl font-heading font-bold">
            Daniel Jardim <span className="text-secondary">3D</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-text hover:text-secondary transition-colors">Sobre</a>
          <a href="#servicos" className="text-text hover:text-secondary transition-colors">Serviços</a>
          <a href="#portfolio" className="text-text hover:text-secondary transition-colors">Portfólio</a>
          <a href="#planos" className="text-text hover:text-secondary transition-colors">Planos</a>
          <a href="#contato" className="text-text hover:text-secondary transition-colors">Contato</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={toggleMobileMenu} 
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a 
              href="#sobre" 
              className="text-text hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-text hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#portfolio" 
              className="text-text hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfólio
            </a>
            <a 
              href="#planos" 
              className="text-text hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Planos
            </a>
            <a 
              href="#contato" 
              className="text-text hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
