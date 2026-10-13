import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Globe, 
  TrendingUp, 
  Phone, 
  Sparkles, 
  ChevronDown, 
  Building2, 
  Compass, 
  Video, 
  Send,
  Layers,
  Palette
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Business Registrations and Licenses',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  // Section 3: 6 Service Cards as requested
  const servicesList = [
    {
      title: 'Business Registrations and Licenses',
      tag: 'Legal Foundation',
      desc: 'Expert assistance for GST registration, FSSAI food licenses, Udyam / MSME certification, Trade Licenses, and Shop Act (Gumasta) with zero procedural friction.',
      icon: ShieldCheck,
      link: '/registrations-licenses',
      bullets: ['GST Registration & Setup', 'FSSAI State & Central Licenses', 'Shop Act & Municipal Licenses', 'Udyam / MSME Certification']
    },
    {
      title: 'GST and Compliance Assistance',
      tag: 'Statutory Health',
      desc: 'Accurate monthly and quarterly GST return filing (GSTR-1, GSTR-3B), ITC reconciliation, annual compliance audits, and penalty prevention.',
      icon: FileText,
      link: '/compliance-documentation',
      bullets: ['Timely GSTR-1 & 3B Filing', 'Input Tax Credit (ITC) Protection', 'Letter of Undertaking (LUT)', 'Annual Statutory Reconciliation']
    },
    {
      title: 'Website Development',
      tag: 'Modern Engineering',
      desc: 'Bespoke, high-performance web applications and corporate websites engineered on modern React stacks with instant load times and conversion funnels.',
      icon: Globe,
      link: '/digital-solutions',
      bullets: ['Custom Modern Architecture', 'Mobile-Responsive UX/UI', 'High Performance & Speed', 'SEO & Lead Capture Optimization']
    },
    {
      title: 'Digital Marketing',
      tag: 'Reach & Authority',
      desc: 'Targeted brand promotion, Google Business Profile local SEO dominance, search discovery, and multi-channel marketing campaigns.',
      icon: TrendingUp,
      link: '/digital-solutions',
      bullets: ['Google Business Profile Map Pack', 'Local Search Discovery & SEO', 'Performance Ad Campaigns', 'Audience Growth Strategies']
    },
    {
      title: 'Branding and Creative Services',
      tag: 'Creative Production',
      desc: 'Short-form Instagram and YouTube video reels, professional on-location shoots, distinctive visual identities, and polished corporate collateral.',
      icon: Palette,
      link: '/digital-solutions',
      bullets: ['Short-Form Video Reels', 'Professional On-Location Shoots', 'Brand Identity Systems', 'Social Media Management']
    },
    {
      title: 'Import-Export Documentation',
      tag: 'Global Operations',
      desc: 'DGFT liaison support, permanent Import Export Code (IEC) allotment, cross-border commercial declarations, and exporter tax benefits.',
      icon: Compass,
      link: '/compliance-documentation',
      bullets: ['Import Export Code (IEC) Allotment', 'DGFT Statutory Liaison', 'Cross-Border Documentation', 'Exporter Compliance Verification']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Understand Your Requirements',
      desc: 'We conduct a preliminary review of your business structure, statutory obligations, licensing requirements, and digital goals.'
    },
    {
      number: '02',
      title: 'Identify the Required Services',
      desc: 'We map out the exact statutory licenses, document checklists, or digital development scope tailored to your business stage.'
    },
    {
      number: '03',
      title: 'Assist With Documentation or Implementation',
      desc: 'Our specialists draft paperwork, coordinate filing on official portals, or code and design your digital marketing and web assets.'
    },
    {
      number: '04',
      title: 'Provide Agreed Service and Support',
      desc: 'We deliver your approved certificates, deploy your digital presence, and provide ongoing operational advisory as you grow.'
    }
  ];

  const faqs = [
    {
      q: 'What business registrations do you assist with?',
      a: 'We provide end-to-end guidance and document preparation for GST Registration, FSSAI Food Licenses (Basic, State, and Central), Udyam / MSME Registration, Shop Act (Gumasta) Registration, Trade Licenses, and Import Export Code (IEC).'
    },
    {
      q: 'How does Black Stone Services handle GST registration and filing?',
      a: 'We verify your identification and address proofs, submit your statutory application on the official GST portal, and provide regular monthly or quarterly return filing (GSTR-1 and GSTR-3B) with strict ITC reconciliation to keep your business penalty-free.'
    },
    {
      q: 'Who needs an FSSAI Food License?',
      a: 'Any enterprise handling food—including manufacturers, restaurants, cloud kitchens, cafes, bakeries, caterers, and food distributors—requires an FSSAI license or registration based on turnover. We guide you through the appropriate category and safety documentation.'
    },
    {
      q: 'What technologies and timelines are involved in Website Development?',
      a: 'We develop modern web applications using modern, reliable stacks (React, TypeScript, clean responsive CSS). Projects typically ship within 7 to 21 business days with mobile optimization, speed optimization, and lead capture forms included.'
    },
    {
      q: 'How do you help local businesses with digital marketing?',
      a: 'We optimize Google Business Profiles for local map pack dominance, ensure address and phone consistency across directories, produce high-engagement short-form video reels, and manage social media branding to drive local customer inquiries.'
    },
    {
      q: 'What basic documents are required to begin a registration process?',
      a: 'Generally, you will need the proprietor or partners PAN, Aadhaar, commercial premises address proof (electricity bill, property tax receipt, or NOC with Rent Agreement), and active bank account details. Specific checklists vary by registration type.'
    },
    {
      q: 'How can I connect directly with the Black Stone Services team?',
      a: 'You can call our direct support desk at +91 8554901641 or +91 9922237876, chat with our team on WhatsApp, or submit the consultation request form below. Our corporate desk is located at 51, King Mahesh Nagar, Zingabai Tadi, Nagpur.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* =========================================================================
          SECTION 1 — HERO: Midnight black with cinematic gold lighting & fine grid
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#090D16] hero-grid-pattern px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-28">
        {/* Soft, cinematic champagne-gold radial glow behind the main heading */}
        <div className="absolute inset-0 gold-glow-radial pointer-events-none" />

        {/* Restrained decorative gold ambient particles */}
        <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 rounded-full bg-[#A98536] opacity-40 blur-[0.5px] animate-pulse" />
        <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-[#D4C5A3] opacity-30 blur-[1px]" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#C7A24C] opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-[#A98536] opacity-50" />

        <div className="relative max-w-5xl mx-auto text-center space-y-7 z-10">
          {/* Eyebrow as requested: BUSINESS SERVICES • DIGITAL GROWTH */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101522] border border-[#A98536]/30 text-xs font-semibold tracking-[0.25em] uppercase text-[#A98536] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#A98536]" />
            <span>BUSINESS SERVICES • DIGITAL GROWTH</span>
          </div>

          {/* Main Headline as requested:
              Your Business.
              Our Expertise.
              Your Next Chapter.
          */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-serif font-bold text-[#F4F0E6] leading-[1.08] tracking-tight">
            Your Business.<br />
            <span className="gold-gradient-accent">Our Expertise.</span><br />
            Your Next Chapter.
          </h1>

          {/* Supporting Text as requested */}
          <p className="text-base sm:text-lg md:text-xl text-[#F4F0E6]/80 max-w-2xl mx-auto font-light leading-relaxed">
            From business registrations and compliance to digital marketing and website development, we help businesses build stronger foundations and grow with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/services" className="btn-gold w-full sm:w-auto text-xs uppercase tracking-wider">
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline-gold w-full sm:w-auto text-xs uppercase tracking-wider">
              <Phone className="w-4 h-4 text-[#A98536]" />
              <span>Talk to Our Team</span>
            </Link>
          </div>

          {/* Restrained Four Trust Badges */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto border-t border-[#F4F0E6]/10 text-left">
            <div className="p-3.5 rounded-xl bg-[#101522]/80 border border-[#A98536]/15 backdrop-blur-sm">
              <div className="text-[#A98536] font-semibold text-xs tracking-wider">TRUSTED PARTNER</div>
              <div className="text-[11px] text-[#F4F0E6]/60 mt-0.5">Reliable Advisory</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#101522]/80 border border-[#A98536]/15 backdrop-blur-sm">
              <div className="text-[#A98536] font-semibold text-xs tracking-wider">EXPERT GUIDANCE</div>
              <div className="text-[11px] text-[#F4F0E6]/60 mt-0.5">Statutory Precision</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#101522]/80 border border-[#A98536]/15 backdrop-blur-sm">
              <div className="text-[#A98536] font-semibold text-xs tracking-wider">FAST & EFFICIENT</div>
              <div className="text-[11px] text-[#F4F0E6]/60 mt-0.5">Timely Delivery</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#101522]/80 border border-[#A98536]/15 backdrop-blur-sm">
              <div className="text-[#A98536] font-semibold text-xs tracking-wider">YOUR SUCCESS</div>
              <div className="text-[11px] text-[#F4F0E6]/60 mt-0.5">Our Main Priority</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — INTRODUCTION: Warm ivory (#F7F4ED), dark typography, editorial
          ========================================================================= */}
      <section className="py-24 bg-[#F7F4ED] text-[#20232A] border-y border-[#E7E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Image Left */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E7E0D2] shadow-xl bg-white">
                <img 
                  src="/images/consultation_desk.jpg" 
                  alt="Black Stone Services Advisory"
                  className="w-full h-[440px] object-cover"
                />
                <div className="p-5 bg-white border-t border-[#E7E0D2]">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#A98536]">
                    The Unified Advantage
                  </div>
                  <div className="text-sm text-[#20232A] font-medium mt-1">
                    One trusted partner for statutory compliance & digital growth.
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Content Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#A98536] font-semibold">
                About Black Stone Services
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#20232A] leading-tight">
                Bringing Legal Precision and Modern Digital Execution Together.
              </h2>
              <p className="text-[#626873] text-base leading-relaxed font-light">
                Traditionally, founders and enterprise managers are forced to hire separate law clerks for shop licenses, accountants for GST filings, graphic designers for branding, and external agencies for web development. This fragmented approach causes delays, miscommunication, and unnecessary expenses.
              </p>
              <p className="text-[#626873] text-base leading-relaxed font-light">
                Black Stone Services was established to bridge this divide. We combine meticulous regulatory documentation with contemporary digital craftsmanship, giving your enterprise the solid statutory backing and powerful customer visibility it needs to thrive.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E7E0D2]">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#20232A]">
                    <CheckCircle2 className="w-4 h-4 text-[#A98536]" />
                    <span>Single-Window Advisory</span>
                  </div>
                  <p className="text-xs text-[#626873] mt-1 leading-relaxed">
                    Registrations, licenses, tax returns, websites, and marketing handled by one aligned team.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E7E0D2]">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#20232A]">
                    <CheckCircle2 className="w-4 h-4 text-[#A98536]" />
                    <span>Zero Bureaucratic Jargon</span>
                  </div>
                  <p className="text-xs text-[#626873] mt-1 leading-relaxed">
                    Transparent checklists, direct phone consultation, and milestone updates.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="btn-ivory-dark text-xs uppercase tracking-wider">
                  <span>Learn More About Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — SERVICES: Warm ivory background with clean, premium cards
          ========================================================================= */}
      <section className="py-24 bg-[#F7F4ED] text-[#20232A] border-b border-[#E7E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A98536] font-semibold">
              Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#20232A]">
              Comprehensive Business Support
            </h2>
            <p className="text-[#626873] text-base font-light">
              Every business requirement addressed with statutory discipline, legal clarity, and contemporary creative skill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesList.map((svc) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={svc.title}
                  className="card-ivory-clean rounded-2xl p-7 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#F7F4ED] border border-[#E7E0D2] flex items-center justify-center text-[#A98536] group-hover:border-[#A98536] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A98536] px-2.5 py-1 rounded bg-[#F7F4ED] border border-[#E7E0D2]">
                        {svc.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#20232A] group-hover:text-[#A98536] transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#626873] font-light leading-relaxed">
                      {svc.desc}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-[#E7E0D2] text-xs text-[#20232A]">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A98536]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7E0D2]">
                    <Link 
                      to={svc.link}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A98536] font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — DIGITAL SOLUTIONS: Dark charcoal (#101522) with gold accents
          ========================================================================= */}
      <section className="py-24 bg-[#101522] text-[#F4F0E6] border-b border-[#A98536]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-[#A98536]/30 shadow-2xl bg-[#090D16]">
                <img 
                  src="/images/digital_studio.jpg" 
                  alt="Digital Solutions Studio"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#090D16]/90 backdrop-blur-md border border-[#A98536]/25">
                  <div className="text-xs uppercase tracking-widest text-[#A98536] font-semibold">
                    Digital Acceleration Studio
                  </div>
                  <div className="text-sm text-[#F4F0E6] mt-0.5">
                    Web engineering, short-form reels, and local discovery campaigns.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A98536] font-semibold">
                Digital Presence & Growth
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F0E6] leading-tight">
                Modern Digital Acceleration That Drives Real Client Demand.
              </h2>
              <p className="text-[#F4F0E6]/80 text-base leading-relaxed font-light">
                A legal license gives your business permission to operate; high-caliber digital presentation gives you paying customers. We build web and creative assets that set you apart in competitive markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#151A25] border border-[#A98536]/20">
                  <Globe className="w-5 h-5 text-[#A98536] mb-2" />
                  <h4 className="text-sm font-semibold text-[#F4F0E6]">Website Development</h4>
                  <p className="text-xs text-[#F4F0E6]/65 mt-1 leading-relaxed">
                    Ultra-fast React web platforms tailored for business credibility, mobile devices, and inquiries.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#151A25] border border-[#A98536]/20">
                  <Video className="w-5 h-5 text-[#A98536] mb-2" />
                  <h4 className="text-sm font-semibold text-[#F4F0E6]">Reels & Video Content</h4>
                  <p className="text-xs text-[#F4F0E6]/65 mt-1 leading-relaxed">
                    Short-form visual storytelling and creative shoots designed for Instagram and LinkedIn reach.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#151A25] border border-[#A98536]/20">
                  <TrendingUp className="w-5 h-5 text-[#A98536] mb-2" />
                  <h4 className="text-sm font-semibold text-[#F4F0E6]">Google Business Profile & Local SEO</h4>
                  <p className="text-xs text-[#F4F0E6]/65 mt-1 leading-relaxed">
                    Map pack rankings and local citation consistency ensuring customers discover your business.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#151A25] border border-[#A98536]/20">
                  <Layers className="w-5 h-5 text-[#A98536] mb-2" />
                  <h4 className="text-sm font-semibold text-[#F4F0E6]">Zomato & Swiggy Optimization</h4>
                  <p className="text-xs text-[#F4F0E6]/65 mt-1 leading-relaxed">
                    Catalog structuring, appetizing food photography, and storefront conversion setup.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/digital-solutions" className="btn-gold text-xs py-3 px-6 tracking-wider uppercase">
                  <span>Explore Digital Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — HOW WE WORK: Warm ivory (#F7F4ED) with 4-step process
          ========================================================================= */}
      <section className="py-24 bg-[#F7F4ED] text-[#20232A] border-b border-[#E7E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A98536] font-semibold">
              Predictable Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#20232A]">
              How We Work
            </h2>
            <p className="text-[#626873] text-base font-light">
              A structured four-step methodology designed to eliminate administrative confusion from initial intake to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.number}
                className="p-7 rounded-2xl bg-white border border-[#E7E0D2] hover:border-[#A98536] transition-colors relative group shadow-sm"
              >
                <div className="text-3xl font-serif font-bold text-[#A98536] mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#20232A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#626873] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — WHY CHOOSE US: Dark background (#090D16 / #101522)
          ========================================================================= */}
      <section className="py-24 bg-[#090D16] text-[#F4F0E6] border-b border-[#A98536]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A98536] font-semibold">
                The Black Stone Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F0E6] leading-tight">
                Why Forward-Thinking Businesses Partner With Us.
              </h2>
              <p className="text-[#F4F0E6]/80 text-base leading-relaxed font-light">
                We replace confusing administrative bureaucracy with reliable execution, transparent consultation, and contemporary digital acumen.
              </p>
              <div className="pt-2">
                <Link to="/about" className="btn-outline-gold text-xs py-3 px-6 tracking-wider uppercase">
                  <span>Learn More About Our Ethos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#101522] border border-[#A98536]/20">
                <div className="w-10 h-10 rounded-lg bg-[#090D16] border border-[#A98536]/30 flex items-center justify-center text-[#A98536] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-semibold text-[#F4F0E6]">Single-Window Convenience</h4>
                <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                  Obtain your registrations, licenses, GST filings, website, and branding without coordinating multiple disconnected agents.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101522] border border-[#A98536]/20">
                <div className="w-10 h-10 rounded-lg bg-[#090D16] border border-[#A98536]/30 flex items-center justify-center text-[#A98536] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-semibold text-[#F4F0E6]">Statutory Precision</h4>
                <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                  Checklists curated specifically for central and state licensing requirements to minimize query cycles and rework.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101522] border border-[#A98536]/20">
                <div className="w-10 h-10 rounded-lg bg-[#090D16] border border-[#A98536]/30 flex items-center justify-center text-[#A98536] mb-4">
                  <Phone className="w-5 h-5 text-[#A98536]" />
                </div>
                <h4 className="text-base font-serif font-semibold text-[#F4F0E6]">Direct Human Advisory</h4>
                <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                  Speak directly with responsive consultants who answer your questions without automated chatbots or hidden call queues.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101522] border border-[#A98536]/20">
                <div className="w-10 h-10 rounded-lg bg-[#090D16] border border-[#A98536]/30 flex items-center justify-center text-[#A98536] mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-semibold text-[#F4F0E6]">High-Impact Digital Quality</h4>
                <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                  Web applications and media content produced to competitive creative standards that reflect positively on your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — FAQ: Warm ivory (#F7F4ED) with clean accessible accordion
          ========================================================================= */}
      <section className="py-24 bg-[#F7F4ED] text-[#20232A] border-b border-[#E7E0D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A98536] font-semibold">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#20232A]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#626873] font-light">
              Clear answers regarding our registration workflows, compliance support, and digital services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={faq.q}
                  className="rounded-xl bg-white border border-[#E7E0D2] overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-serif font-medium text-[#20232A]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#A98536] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#626873] font-light leading-relaxed border-t border-[#E7E0D2]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — CONTACT CTA: Deep black (#090D16) with restrained gold glow
          ========================================================================= */}
      <section className="py-24 bg-[#090D16] text-[#F4F0E6] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Restrained gold glow */}
        <div className="absolute inset-0 gold-glow-contact pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="rounded-3xl bg-[#101522] border border-[#A98536]/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#A98536] font-semibold">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F0E6] leading-tight">
                  Ready to Establish or Scale Your Business?
                </h2>
                <p className="text-base text-[#F4F0E6]/80 font-light leading-relaxed">
                  Connect directly with our corporate advisory team. We review your licensing checklists, statutory obligations, or digital project scope and provide a transparent roadmap.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A98536]/20 flex items-center justify-center text-[#A98536]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#F4F0E6]/60">Call Direct Support</div>
                      <div className="text-base font-semibold text-[#F4F0E6] flex gap-3">
                        <a href="tel:8554901641" className="hover:text-[#A98536] transition-colors">+91 8554901641</a>
                        <span className="text-[#F4F0E6]/30">/</span>
                        <a href="tel:9922237876" className="hover:text-[#A98536] transition-colors">+91 9922237876</a>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-[#F4F0E6]/60 pl-14">
                    Registered Office: 51, King Mahesh Nagar, Zingabai Tadi, Nagpur, Maharashtra 440030.
                  </div>
                </div>
              </div>

              {/* Quick Consultation Form */}
              <div className="lg:col-span-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#090D16] border border-[#A98536]/25 shadow-xl">
                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-[#A98536]/20 text-[#A98536] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-[#F4F0E6]">
                        Enquiry Received
                      </h3>
                      <p className="text-xs text-[#F4F0E6]/75 max-w-sm mx-auto leading-relaxed">
                        Thank you, {formData.name}. Our corporate desk will review your inquiry for {formData.service} and contact you at {formData.phone} promptly.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs uppercase tracking-wider text-[#A98536] underline hover:opacity-80 pt-2"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <h3 className="text-xl font-serif font-semibold text-[#F4F0E6]">
                        Request Quick Consultation
                      </h3>
                      <p className="text-xs text-[#F4F0E6]/60">
                        Submit your details and an advisor will connect with you.
                      </p>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/70 mb-1">
                          Full Name / Business Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Sharma / Nagpur Traders"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#151A25] border border-[#A98536]/20 text-[#F4F0E6] text-sm focus:border-[#A98536] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/70 mb-1">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#151A25] border border-[#A98536]/20 text-[#F4F0E6] text-sm focus:border-[#A98536] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/70 mb-1">
                          Primary Service Required
                        </label>
                        <select 
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-[#151A25] border border-[#A98536]/20 text-[#F4F0E6] text-sm focus:border-[#A98536] focus:outline-none"
                        >
                          <option value="Business Registrations and Licenses">Business Registrations and Licenses (GST, FSSAI, MSME)</option>
                          <option value="GST and Compliance Assistance">GST and Compliance Assistance</option>
                          <option value="Website Development">Website Development & Modern Web</option>
                          <option value="Digital Marketing">Digital Marketing & Google Business</option>
                          <option value="Branding and Creative Services">Branding, Video Reels & Shoots</option>
                          <option value="Import-Export Documentation">Import-Export Documentation (IEC & LUT)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/70 mb-1">
                          Brief Note (Optional)
                        </label>
                        <textarea 
                          rows={2}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your city, timeline, or requirement..."
                          className="w-full px-4 py-2 rounded-lg bg-[#151A25] border border-[#A98536]/20 text-[#F4F0E6] text-sm focus:border-[#A98536] focus:outline-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="btn-gold w-full text-xs py-3 tracking-widest uppercase justify-center"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Consultation Request</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
