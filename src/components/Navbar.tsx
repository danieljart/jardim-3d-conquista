import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
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
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="text-white">
                        Daniel Jardim
                    </span>
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">3D</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-indigo-400 ${location.pathname === link.path ? "text-indigo-400" : "text-white/80"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ShimmerButton
                        background="linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)"
                        className="rounded-full h-10 px-6"
                        onClick={handleContactClick}
                    >
                        <span className="text-white font-medium text-sm">
                            {t('nav.contact')}
                        </span>
                    </ShimmerButton>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleLanguage}
                        className="text-white hover:text-indigo-400 hover:bg-white/10"
                    >
                        <Globe size={20} />
                        <span className="sr-only">Toggle language</span>
                    </Button>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleLanguage}
                        className="text-white hover:text-indigo-400 hover:bg-white/10"
                    >
                        <Globe size={20} />
                        <span className="sr-only">Toggle language</span>
                    </Button>
                    <button
                        className="text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-medium py-2 border-b border-white/5 ${location.pathname === link.path ? "text-indigo-400" : "text-white/80"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ShimmerButton
                        background="linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)"
                        className="w-full mt-2"
                        onClick={handleContactClick}
                    >
                        <span className="text-white font-medium">
                            {t('nav.whatsapp')}
                        </span>
                    </ShimmerButton>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
