import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const serviceLinks = [
    { name: 'Fachadas', path: '/servicos/fachadas' },
    { name: 'Cenografia & Estandes', path: '/servicos/cenografia' },
    { name: 'Ambientes Internos', path: '/servicos/ambientes' },
    { name: 'Personalizados', path: '/servicos/personalizados' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-primary text-xl font-heading font-bold">
            Daniel Jardim <span className="text-indigo-400">3D</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-indigo-400' : 'text-foreground hover:text-indigo-400'}`}
          >
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center transition-colors ${
                location.pathname.includes('/servicos') ? 'text-indigo-400' : 'text-foreground hover:text-indigo-400'
              }`}
            >
              Serviços <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[200px]">
                <Link 
                  to="/servicos"
                  className="block px-4 py-2 text-foreground hover:text-indigo-400 hover:bg-accent transition-colors"
                >
                  Todos os Serviços
                </Link>
                <div className="border-t border-border my-1"></div>
                {serviceLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-foreground hover:text-indigo-400 hover:bg-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link 
            to="/galeria" 
            className={`transition-colors ${isActive('/galeria') ? 'text-indigo-400' : 'text-foreground hover:text-indigo-400'}`}
          >
            Galeria
          </Link>
          <Link 
            to="/sobre" 
            className={`transition-colors ${isActive('/sobre') ? 'text-indigo-400' : 'text-foreground hover:text-indigo-400'}`}
          >
            Sobre
          </Link>
          <button 
            onClick={() => window.open('https://wa.me/5591982591612', '_blank')}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-5 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu} 
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-1">
            <Link 
              to="/" 
              className={`py-2 px-3 rounded-lg transition-colors ${isActive('/') ? 'text-indigo-400 bg-accent' : 'text-foreground hover:bg-accent'}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            {/* Mobile Services Accordion */}
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                location.pathname.includes('/servicos') ? 'text-indigo-400' : 'text-foreground'
              }`}
            >
              Serviços
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link 
                  to="/servicos"
                  className="block py-2 px-3 rounded-lg text-foreground hover:bg-accent transition-colors"
                  onClick={closeMobileMenu}
                >
                  Todos os Serviços
                </Link>
                {serviceLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path}
                    className="block py-2 px-3 rounded-lg text-foreground hover:bg-accent transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            <Link 
              to="/galeria" 
              className={`py-2 px-3 rounded-lg transition-colors ${isActive('/galeria') ? 'text-indigo-400 bg-accent' : 'text-foreground hover:bg-accent'}`}
              onClick={closeMobileMenu}
            >
              Galeria
            </Link>
            <Link 
              to="/sobre" 
              className={`py-2 px-3 rounded-lg transition-colors ${isActive('/sobre') ? 'text-indigo-400 bg-accent' : 'text-foreground hover:bg-accent'}`}
              onClick={closeMobileMenu}
            >
              Sobre
            </Link>
            <button 
              onClick={() => {
                window.open('https://wa.me/5591982591612', '_blank');
                closeMobileMenu();
              }}
              className="mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2 px-3 rounded-lg font-medium text-center"
            >
              Contato via WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
