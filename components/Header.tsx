
import React, { useState } from 'react';
import SearchIcon from './icons/SearchIcon';
import ShoppingBagIcon from './icons/ShoppingBagIcon';
import AuraLogo from './icons/AuraLogo';

const Header: React.FC = () => {
  const navItems = ['Store', 'Aura+', 'Phone', 'Watch', 'Notebook', 'Accessories', 'Support'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/80 backdrop-blur-sm text-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-light">
            <a href="#" className="hover:text-white transition-colors"><AuraLogo /></a>
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors"><SearchIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><ShoppingBagIcon /></a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-between w-full">
             <a href="#" className="hover:text-white transition-colors z-20"><AuraLogo /></a>
             <div className="flex items-center space-x-5 z-20">
                <a href="#" className="hover:text-white transition-colors"><SearchIcon /></a>
                <a href="#" className="hover:text-white transition-colors"><ShoppingBagIcon /></a>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                <div className="w-4 h-px bg-gray-300 mb-1 transition-transform duration-200"></div>
                <div className="w-4 h-px bg-gray-300 transition-transform duration-200"></div>
                </button>
             </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black">
          <div className="flex flex-col items-start p-12 mt-4 space-y-6 text-xl">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
