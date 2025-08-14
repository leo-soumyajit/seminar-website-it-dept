import React from 'react';
import { Globe, Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'bn';
  onLanguageChange: (language: 'en' | 'bn') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="relative group">
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
        {currentLanguage === 'en' ? 'Switch to Bengali' : 'Switch to English'}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black/80"></div>
      </div>
      {/* Background container with glassmorphism */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1 shadow-elegant">
        {/* Sliding indicator */}
        <div
          className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg transition-all duration-500 ease-out ${
            currentLanguage === 'en' ? 'left-1' : 'left-1/2'
          }`}
        />
        
        {/* Toggle buttons */}
        <div className="relative flex z-20">{/* Make sure buttons are on top */}
          <button
            onClick={() => {
              console.log('EN button clicked');
              onLanguageChange('en');
            }}
            className={`relative flex items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 ease-out hover:scale-105 ${
              currentLanguage === 'en'
                ? 'text-white font-semibold z-10'
                : 'text-foreground/70 hover:text-foreground font-medium'
            }`}
          >
            <Globe className={`w-4 h-4 mr-2 transition-all duration-300 ${
              currentLanguage === 'en' ? 'animate-float' : ''
            }`} />
            <span className="font-inter text-sm">EN</span>
          </button>
          
          <button
            onClick={() => {
              console.log('BN button clicked');
              onLanguageChange('bn');
            }}
            className={`relative flex items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 ease-out hover:scale-105 ${
              currentLanguage === 'bn'
                ? 'text-white font-semibold z-10'
                : 'text-foreground/70 hover:text-foreground font-medium'
            }`}
          >
            <Languages className={`w-4 h-4 mr-2 transition-all duration-300 ${
              currentLanguage === 'bn' ? 'animate-float' : ''
            }`} />
            <span className="font-inter text-sm">বাং</span>
          </button>
        </div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none z-0 ${
          currentLanguage === 'en' || currentLanguage === 'bn' ? 'animate-glow opacity-50' : 'opacity-0'
        }`} />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/30 rounded-full animate-float opacity-60" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent/30 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default LanguageToggle;