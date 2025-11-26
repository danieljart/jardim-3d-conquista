import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", path: "/" },
        { name: "Serviços", path: "/servicos" },
        { name: "Sobre", path: "/sobre" },
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
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                        Daniel Jardim
                    </span>
                    <span className="text-white/80 text-sm font-light">3D Design</span>
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
                    <Button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6"
                        onClick={handleContactClick}
                    >
                        Contato
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
                    <Button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-2"
                        onClick={handleContactClick}
                    >
                        Falar no WhatsApp
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
