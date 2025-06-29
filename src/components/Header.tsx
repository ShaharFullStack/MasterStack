import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: "/", label: "בית" },
    { href: "/services", label: "שירותים" },
    { href: "/news", label: "חדשות" },
    { href: "/articles", label: "מאמרים" },
    { href: "/calculator", label: "מחשבון מחיר" },
    { href: "/contact", label: "צור קשר" }
  ];

  return (
    <header className={`backdrop-blur-md border-b sticky top-0 z-50 shadow-lg transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/80 border-slate-700/50 shadow-slate-900/20' 
        : 'bg-slate-900/30 border-slate-700/20 shadow-slate-900/10'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 flex-row-reverse">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg">
              MasterStack
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-semibold hover:scale-110 relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            
            
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 py-6 rounded-b-xl">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 px-6 py-2 text-lg font-medium border-r-4 border-transparent hover:border-blue-400 hover:bg-slate-700/30"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="px-6 pt-4">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-xl transition-all duration-300"
                  asChild
                >
                  <a 
                    href="https://wa.me/972525347274" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white"
                    onClick={closeMenu}
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    צור קשר בווצאפ
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
