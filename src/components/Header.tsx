import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Главная', href: '#hero' },
    { name: 'Программы', href: '#programs' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/a17fa07a-9ef8-4c96-a44c-a9b06c6fa30b.png" 
              alt="ДВЦКТ Эксперт" 
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-lg font-montserrat font-bold text-brand-dark">ДВЦКТ "Эксперт"</h1>
              <p className="text-xs text-brand-green font-opensans">Учебный центр</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brand-dark font-opensans font-medium hover:text-brand-teal transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <a href="tel:+74232001512" className="flex items-center space-x-2 text-brand-dark font-semibold hover:text-brand-teal transition-colors">
                <Icon name="Phone" size={18} />
                <span>+7 (423) 200-15-12</span>
              </a>
              <a href="mailto:dv-expert@yandex.ru" className="text-xs text-brand-green hover:text-brand-teal transition-colors">
                dv-expert@yandex.ru
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-brand-blue/30 pt-4 animate-slide-in-right">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-brand-dark font-opensans font-medium hover:text-brand-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-brand-blue/30">
              <a href="tel:+74232001512" className="flex items-center space-x-2 text-brand-dark font-semibold mb-2">
                <Icon name="Phone" size={18} />
                <span>+7 (423) 200-15-12</span>
              </a>
              <a href="mailto:dv-expert@yandex.ru" className="text-sm text-brand-green flex items-center space-x-2">
                <Icon name="Mail" size={18} />
                <span>dv-expert@yandex.ru</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;