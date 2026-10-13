import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Phone, MapPin, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101522] border-t border-[#A98536]/20 text-[#F4F0E6] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#F4F0E6]/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="md" />
            <p className="text-sm text-[#F4F0E6]/75 leading-relaxed font-light pr-4">
              Black Stone Services is a premier business support and digital services company. We help enterprises, startups, and local businesses establish, manage, and scale with complete statutory confidence and contemporary digital excellence.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#090D16] border border-[#A98536]/30 text-[#A98536]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Statutory Advisory
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#090D16] border border-[#A98536]/30 text-[#A98536]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Digital Agency
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98536]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/registrations-licenses" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  Registrations & Licenses
                </Link>
              </li>
              <li>
                <Link to="/digital-solutions" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link to="/compliance-documentation" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  Compliance & Tax
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-[#F4F0E6]/75 hover:text-[#A98536] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98536]">
              Key Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F4F0E6]/75">
              <li>GST Registration & Return Filing</li>
              <li>FSSAI State & Central Food Licenses</li>
              <li>Udyam / MSME Certification</li>
              <li>Trade License & Shop Act Registration</li>
              <li>Import Export Code (IEC) & LUT Filing</li>
              <li>Custom Website Development</li>
              <li>Google Business & Local SEO</li>
              <li>Reels, Video Content & Social Media</li>
              <li>HUID & Specialized Statutory Filings</li>
            </ul>
          </div>

          {/* Contact Details & Direct Help */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98536]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-[#F4F0E6]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A98536] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  51, King Mahesh Nagar, Zingabai Tadi, Nagpur, Maharashtra 440030, India.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A98536] shrink-0" />
                <a href="tel:8554901641" className="hover:text-[#A98536] transition-colors font-medium">
                  +91 8554901641
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A98536] shrink-0" />
                <a href="tel:9922237876" className="hover:text-[#A98536] transition-colors font-medium">
                  +91 9922237876
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A98536] hover:underline font-semibold"
              >
                <span>Request a consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F4F0E6]/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Black Stone Services. All rights reserved. Registered Office: Nagpur, Maharashtra.
          </p>
          <div className="text-center md:text-right max-w-xl text-[11px] text-[#F4F0E6]/50">
            Disclaimer: Black Stone Services is a private corporate advisory and digital consulting facilitator. We are not a government department; we provide expert document preparation and regulatory liaison support.
          </div>
        </div>
      </div>
    </footer>
  );
};
