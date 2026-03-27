import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: "/" },
        { name: t('nav.services'), path: "/servicos" },
        { name: t('nav.about'), path: "/sobre" },
    ];

    const handleContactClick = () => {
        navigate('/contato');
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-black text-white tracking-widest uppercase flex items-center gap-2 mix-blend-difference z-50">
                    DANIEL JARDIM
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-xs font-black tracking-widest uppercase transition-all duration-300 relative group/link ${
                                location.pathname === link.path ? "text-primary" : "text-neutral-500 hover:text-white"
                            }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                                location.pathname === link.path ? "w-full" : "w-0 group-hover/link:w-full"
                            }`}></span>
                        </Link>
                    ))}
                    
                    <button
                        onClick={toggleLanguage}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleLanguage()}
                        className="text-neutral-500 hover:text-white transition-colors p-2"
                        aria-label={i18n.language === 'en' ? "Change to Portuguese" : "Mudar para Inglês"}
                    >
                        <Globe size={18} />
                    </button>

                    <button
                        onClick={handleContactClick}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleContactClick()}
                        className="bg-white text-black px-6 py-2.5 rounded-none text-xs font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300"
                        aria-label={t('nav.contact')}
                    >
                        {t('nav.contact')}
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <button
                        onClick={toggleLanguage}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleLanguage()}
                        className="text-white hover:text-neutral-300 transition-colors p-2"
                        aria-label={i18n.language === 'en' ? "Change to Portuguese" : "Mudar para Inglês"}
                    >
                        <Globe size={20} />
                    </button>
                    <button
                        className="text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-3xl font-black uppercase tracking-widest transition-colors duration-300 ${
                                location.pathname === link.path ? "text-white" : "text-neutral-600"
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={handleContactClick}
                        className="w-full mt-8 bg-white text-black py-4 rounded-none text-sm font-black tracking-[0.2em] uppercase"
                    >
                        {t('nav.contact')}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
