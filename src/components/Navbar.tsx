import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  ArrowUpRight, 
  FileCheck, 
  Globe, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      subItems: [
        { 
          title: 'All Services Overview', 
          desc: 'Comprehensive 5-pillar business support',
          path: '/services',
          icon: Briefcase
        },
        { 
          title: 'Business Registrations', 
          desc: 'GST, FSSAI, MSME, Trade & Shop Act',
          path: '/registrations-licenses',
          icon: FileCheck
        },
        { 
          title: 'Digital Solutions', 
          desc: 'Websites, SEO, Social Media & Video Content',
          path: '/digital-solutions',
          icon: Globe
        },
        { 
          title: 'Compliance & Tax Support', 
          desc: 'Periodic GST filing, LUT & Deeds',
          path: '/compliance-documentation',
          icon: ShieldCheck
        },
      ]
    },
    { name: 'Digital Solutions', path: '/digital-solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#090D16]/95 backdrop-blur-md border-b border-[#A98536]/20 py-3 shadow-2xl' 
        : 'bg-transparent py-4 sm:py-5 border-b border-[#F4F0E6]/10'
    }`}>
      {/* Top micro-bar for phone numbers & address */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex justify-between items-center text-xs text-[#F4F0E6]/70 border-b border-[#F4F0E6]/5 pb-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#A98536] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A98536] animate-pulse"></span>
            Nagpur Advisory Desk: 51, King Mahesh Nagar, Zingabai Tadi, 440030
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:8554901641" className="flex items-center gap-1.5 hover:text-[#A98536] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#A98536]" />
            <span>+91 8554901641</span>
          </a>
          <span className="text-[#F4F0E6]/20">|</span>
          <a href="tel:9922237876" className="flex items-center gap-1.5 hover:text-[#A98536] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#A98536]" />
            <span>+91 9922237876</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with B | S Monogram */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      location.pathname.startsWith('/services') || 
                      location.pathname.startsWith('/registrations') ||
                      location.pathname.startsWith('/compliance')
                        ? 'text-[#A98536] bg-[#101522]' 
                        : 'text-[#F4F0E6]/85 hover:text-white hover:bg-[#101522]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-80 pt-2 z-50">
                      <div className="bg-[#101522] border border-[#A98536]/25 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl">
                        {link.subItems?.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.title}
                              to={sub.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#151A25] text-[#F4F0E6] transition-colors group/item"
                            >
                              <div className="p-2 rounded-lg bg-[#090D16] border border-[#A98536]/20 text-[#A98536] group-hover/item:border-[#A98536]">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-medium group-hover/item:text-[#A98536] transition-colors flex items-center gap-1">
                                  {sub.title}
                                </div>
                                <div className="text-xs text-[#F4F0E6]/60 mt-0.5">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive(link.path)
                    ? 'text-[#A98536] bg-[#101522]'
                    : 'text-[#F4F0E6]/85 hover:text-white hover:bg-[#101522]/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Gold-Outlined "Let's Talk" CTA Button as requested */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="border border-[#A98536] text-[#F4F0E6] hover:bg-[#A98536] hover:text-[#090D16] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 group shadow-sm hover:shadow-lg hover:shadow-[#A98536]/20"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A98536] group-hover:text-[#090D16] transition-colors" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 rounded-lg text-[#F4F0E6] hover:text-[#A98536] hover:bg-[#101522] transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-[#090D16] border-b border-[#A98536]/25 max-h-[calc(100vh-80px)] overflow-y-auto px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#101522] text-[#A98536]'
                      : 'text-[#F4F0E6] hover:bg-[#101522]/70'
                  }`}
                >
                  {link.name}
                </Link>
                {link.subItems && (
                  <div className="pl-4 space-y-1 mt-1 border-l border-[#A98536]/20 ml-4">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.title}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-[#F4F0E6]/70 hover:text-[#A98536]"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#F4F0E6]/10 space-y-3">
            <div className="text-xs text-[#F4F0E6]/60">Direct Support Numbers:</div>
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="tel:8554901641" 
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#101522] border border-[#A98536]/20 text-xs font-semibold text-[#F4F0E6]"
              >
                <Phone className="w-3.5 h-3.5 text-[#A98536]" />
                8554901641
              </a>
              <a 
                href="tel:9922237876" 
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#101522] border border-[#A98536]/20 text-xs font-semibold text-[#F4F0E6]"
              >
                <Phone className="w-3.5 h-3.5 text-[#A98536]" />
                9922237876
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full border border-[#A98536] bg-[#A98536] text-[#090D16] font-semibold text-center py-3 text-xs tracking-wider uppercase rounded-full block"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
