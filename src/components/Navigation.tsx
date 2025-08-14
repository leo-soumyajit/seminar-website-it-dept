import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DarkModeToggle from '@/components/DarkModeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import cyberSecurityLogo from '@/assets/cyber-security-logo.png';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'bn';
  onLanguageChange: (lang: 'en' | 'bn') => void;
}

const Navigation: React.FC<NavigationProps> = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: { en: 'Home', bn: 'হোম' } },
    { href: '#organizers', label: { en: 'Organizers', bn: 'আয়োজক' } },
    { href: '#speakers', label: { en: 'Our Speakers', bn: 'বক্তাগণ' } },
    { href: '#schedule', label: { en: 'Schedule', bn: 'সময়সূচি' } },
    { href: '#contact', label: { en: 'Contact', bn: 'যোগাযোগ' } }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-black ${
      isScrolled 
        ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl shadow-2xl' 
        : 'bg-white/5 backdrop-blur-sm'
    } rounded-b-3xl mx-2 md:mx-4 mt-2 md:mt-4`}>
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 group cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img 
              src={"logo1.png"} 
              alt="Cyber Security Logo" 
              className="h-8 w-8 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="text-foreground">
              <h1 className="text-lg md:text-xl font-bold">AICTE-VAANI</h1>
              <p className="text-xs md:text-sm opacity-80 hidden sm:block">Department of Information Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 relative group"
              >
                {item.label[language]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
            <DarkModeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                >
                  {item.label[language]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;