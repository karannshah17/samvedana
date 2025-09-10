import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleServicesMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const services = [
    { name: 'Epilepsy', href: '/services/epilepsy' },
    { name: 'Headache & Migraine', href: '/services/headache' },
    { name: 'Stroke Management', href: '/services/stroke' },
    { name: 'Movement Disorders', href: '/services/movement-disorders' },
    { name: 'Memory Disorders', href: '/services/memory-disorders' },
    { name: 'Neuropathy Treatment', href: '/services/neuropathy' },
    { name: 'Myasthenia Gravis & Muscle Disorders', href: '/services/myasthenia-gravis' },
    { name: 'Meningoencephalitis', href: '/services/meningoencephalitis' },
    { name: 'Back Pain & Sciatica', href: '/services/back-pain-sciatica' },
    { name: 'Vertigo & Balance Disorders', href: '/services/vertigo-balance' },
    { name: 'Multiple Sclerosis & Other Demyelination Disorders', href: '/services/multiple-sclerosis' },
    { name: 'Sleep Disorders', href: '/services/sleep-disorders' },
  ];

  return (
    <header className="bg-card shadow-[var(--shadow-card)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex Row: Logo + Clinic Info + Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo + Clinic Name */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Samvedana Neuro Care Clinic Logo"
              className="h-20 w-20 md:h-24 md:w-24 rounded-full border-2 border-border shadow-lg/10 rounded-full animate-pulse-medical rotate"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-2xl font-bold text-foreground leading-tight">
                <span className="text-teal-600">SAMVEDANA</span>{' '}  
		<span className="text-[#01287E]">NEUROCARE</span>
              </h3>
              <p className="text-sm md:text-lg text-[#01287E] leading-snug">
                Where science meets compassion
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-base md:text-lg self-center">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-[var(--shadow-medical)] border border-border">
                  <div className="py-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-primary transition"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="tel:+918200045035" className="btn-medical px-6 py-3 text-lg">
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-2">
            <div className="space-y-2">
              <a href="/" className="block py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a href="/about" className="block py-2 text-foreground hover:text-primary">
                About
              </a>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex justify-between items-center py-2 text-foreground hover:text-primary"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block py-2 text-muted-foreground hover:text-primary"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/testimonials" className="block py-2 text-foreground hover:text-primary">
                Testimonials
              </a>
              <a href="/contact" className="block py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <a
                href="tel:+918200045035"
                className="inline-block mt-4 btn-medical px-6 py-3 text-lg"
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
