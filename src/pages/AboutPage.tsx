import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Target, 
  Compass, 
  Award, 
  MapPin, 
  Phone 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      title: 'Trusted Partner',
      subtitle: 'Commitment to Integrity',
      desc: 'We treat your business with the care of an internal partner. Transparent counsel, documented deliverables, and direct accountability at every step.'
    },
    {
      title: 'Expert Guidance',
      subtitle: 'Statutory Precision',
      desc: 'Our documentation team stays abreast of circular updates across GST, FSSAI, MSME, and municipal authorities, ensuring submissions are accurate from day one.'
    },
    {
      title: 'Fast & Efficient',
      subtitle: 'Zero Idle Delay',
      desc: 'Time is the most valuable corporate asset. We work with strict milestone discipline, preparing applications and shipping digital assets promptly.'
    },
    {
      title: 'Your Success Priority',
      subtitle: 'Long-Term Horizon',
      desc: 'We celebrate your milestones. From your first municipal license to your high-conversion corporate website, we are committed to your sustainable growth.'
    }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191917] border border-[#B7A47A]/30 text-xs tracking-wider uppercase text-[#B7A47A]">
            <span>Corporate Profile & Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F4F0E6] leading-tight">
            Built to Empower Emerging & Established Enterprises.
          </h1>
          <p className="text-base sm:text-lg text-[#F4F0E6]/80 font-light leading-relaxed">
            Black Stone Services is a specialized corporate support and digital growth agency headquartered in Nagpur, Maharashtra. We bring regulatory documentation, tax compliance, and modern creative technologies together under one roof.
          </p>
        </div>
      </section>

      {/* Story & Background Section */}
      <section className="py-20 bg-[#191917] border-y border-[#B7A47A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B7A47A] font-semibold">
                Our Foundational Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4F0E6] leading-tight">
                Solving the Friction of Multiple Fragmented Consultants.
              </h2>
              <p className="text-[#F4F0E6]/80 text-sm sm:text-base leading-relaxed font-light">
                When an entrepreneur launches a business in India, they inevitably confront two major hurdles simultaneously: securing legal licenses and building market presence. Historically, this meant engaging separate lawyers, municipal agents, accountants, web developers, and social media contractors.
              </p>
              <p className="text-[#F4F0E6]/80 text-sm sm:text-base leading-relaxed font-light">
                Black Stone Services was founded to eliminate this operational friction. By combining statutory documentation rigor with modern digital capabilities, we offer founders and business managers a reliable single-window solution.
              </p>
              <div className="p-5 rounded-2xl bg-[#111110] border border-[#B7A47A]/25">
                <div className="text-xs uppercase tracking-widest text-[#B7A47A] font-semibold">
                  Official Statutory Declaration
                </div>
                <p className="text-xs text-[#F4F0E6]/70 mt-1 leading-relaxed">
                  We are a private management consultancy and digital development provider. We do not impersonate or replace statutory government bodies; instead, we provide expert document preparation and regulatory liaison support to help you achieve full compliance smoothly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#B7A47A]/30 shadow-2xl">
                <img 
                  src="/images/consultation_desk.jpg" 
                  alt="Black Stone Services Advisory"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Brochure Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B7A47A] font-semibold">
            Our Guiding Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4F0E6]">
            The Four Tenets of Black Stone Services
          </h2>
          <p className="text-sm text-[#F4F0E6]/70 font-light">
            These foundational standards govern every client engagement, statutory submission, and digital deliverable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="card-dark rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#111110] border border-[#B7A47A]/30 flex items-center justify-center text-[#B7A47A] mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#F4F0E6]">
                  {pillar.title}
                </h3>
                <div className="text-xs uppercase tracking-wider text-[#B7A47A] mt-1 mb-3">
                  {pillar.subtitle}
                </div>
                <p className="text-xs text-[#F4F0E6]/75 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nagpur Headquarters & Physical Presence */}
      <section className="py-20 bg-[#191917] border-y border-[#B7A47A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B7A47A] font-semibold">
                Local Presence, Nationwide Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4F0E6] leading-tight">
                Our Corporate Desk in Nagpur, Maharashtra.
              </h2>
              <p className="text-sm text-[#F4F0E6]/80 leading-relaxed font-light">
                Rooted in central India, our registered office serves local entrepreneurs, manufacturers, retailers, and restaurants throughout Vidarbha and Maharashtra, while providing online statutory processing and digital services across India.
              </p>

              <div className="p-6 rounded-2xl bg-[#111110] border border-[#B7A47A]/20 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B7A47A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#B7A47A]">Office Address</div>
                    <div className="text-sm text-[#F4F0E6] mt-0.5">
                      51, King Mahesh Nagar, Zingabai Tadi, Nagpur, Maharashtra 440030, India.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B7A47A] shrink-0" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#B7A47A]">Phone Support</div>
                    <div className="text-sm text-[#F4F0E6] mt-0.5 flex gap-4">
                      <a href="tel:8554901641" className="hover:text-[#B7A47A]">+91 8554901641</a>
                      <span>/</span>
                      <a href="tel:9922237876" className="hover:text-[#B7A47A]">+91 9922237876</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/contact" className="btn-gold text-xs py-3 px-6 tracking-wider uppercase">
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#B7A47A]/30 shadow-2xl">
                <img 
                  src="/images/brand_packaging.jpg" 
                  alt="Corporate Standards"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
