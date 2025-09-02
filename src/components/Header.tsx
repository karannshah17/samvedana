import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Epilepsy', href: '/services/epilepsy' },
    { name: 'Headache & Migraine', href: '/services/headache' },
    { name: 'Stroke Management', href: '/services/stroke' },
    { name: 'Movement Disorders', href: '/services/movement-disorders' },
    { name: 'Memory Disorders', href: '/services/memory-disorders' },
    { name: 'Neuropathy Treatment', href: '/services/neuropathy' },
  ];

  return (
    <header className="bg-card shadow-[var(--shadow-card)] sticky top-0 z-40 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Clinic Name */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Samvedana Neurocare Clinic Logo" 
              className="h-12 w-12 animate-pulse-medical"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Samvedana Neuro Care Clinic
              </h1>
              <p className="text-sm text-muted-foreground">Expert Neurological Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-[var(--shadow-medical)] border border-border animate-fade-in">
                  <div className="py-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition-all duration-300"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/testimonials" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Patient Feedback
            </a>

            <a 
              href="/contact" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </a>
            
            <a 
              href="tel:+918200045035" 
              className="btn-medical"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="space-y-2">
              <a 
                href="/" 
                className="block py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
              <a 
                href="/about" 
                className="block py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </a>
              
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300 flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-1 animate-slide-up">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a 
                href="/testimonials" 
                className="block py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Patient Feedback
              </a>
              
              <a 
                href="/contact" 
                className="block py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
              
              <a 
                href="tel:+918200045035" 
                className="inline-block mt-4 btn-medical"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;