import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  FileText, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const pillars = [
    {
      pillarNum: '01',
      category: 'BUSINESS GROWTH',
      tagline: 'Build Your Brand. Increase Your Reach.',
      icon: TrendingUp,
      color: 'from-amber-500/10 to-transparent',
      intro: 'Strategic marketing assets and visual narratives that connect your enterprise with its target audience and stimulate customer engagement.',
      services: [
        { name: 'Social Media Management', desc: 'Curated calendar, creative copywriting, visual design, and scheduled distribution across primary channels.' },
        { name: 'Reels and Video Content', desc: 'Short-form visual narratives crafted for Instagram, YouTube Shorts, and LinkedIn algorithms.' },
        { name: 'Professional Shoot', desc: 'On-location photography and video production for products, facilities, menus, and executive profiles.' },
        { name: 'Branding and Design', desc: 'Bespoke identity systems, typography guidelines, collateral packages, and digital asset kits.' },
        { name: 'Marketing Strategy', desc: 'Audience persona research, competitor positioning, and structured promotional campaigns.' }
      ],
      link: '/digital-solutions'
    },
    {
      pillarNum: '02',
      category: 'REGISTRATIONS AND LICENSES',
      tagline: 'Get Legal. Stay Compliant.',
      icon: ShieldCheck,
      color: 'from-amber-600/10 to-transparent',
      intro: 'Meticulous statutory paperwork assistance ensuring your business satisfies municipal, state, and central licensing obligations.',
      services: [
        { name: 'GST Registration', desc: 'Mandatory Goods and Services Tax enrollment with PAN verification and address validation.' },
        { name: 'FSSAI License', desc: 'Basic Registration, State License, or Central License for food manufacturing, cloud kitchens, and restaurants.' },
        { name: 'Udyam / MSME Registration', desc: 'Central micro, small, and medium enterprise certification unlocking government subsidies and banking perks.' },
        { name: 'Trade License', desc: 'Municipal authority authorization certifying safe commercial operations in designated zones.' },
        { name: 'Shop Act Registration', desc: 'Gumasta registration under the Maharashtra Shops and Establishments Act for commercial offices and shops.' },
        { name: 'IEC Registration', desc: 'Import Export Code allotted by the Directorate General of Foreign Trade (DGFT) for international trade.' }
      ],
      link: '/registrations-licenses'
    },
    {
      pillarNum: '03',
      category: 'DIGITAL PRESENCE',
      tagline: 'Be Seen. Be Chosen.',
      icon: Globe,
      color: 'from-blue-500/10 to-transparent',
      intro: 'Dominating search discoveries, map queries, and digital touchpoints where high-intent buyers evaluate and choose service providers.',
      services: [
        { name: 'Google Business Profile', desc: 'Profile setup, verification assistance, category mapping, review management, and local ranking optimization.' },
        { name: 'Zomato & Swiggy Optimization', desc: 'Food aggregator menu staging, tagging, photo optimization, and conversion-focused storefront setup.' },
        { name: 'Website Development', desc: 'High-speed, modern React web platforms tailored for business credibility, mobile users, and lead capture.' },
        { name: 'Digital Marketing', desc: 'Targeted pay-per-click, meta ads, search marketing, and organic reach tactics.' }
      ],
      link: '/digital-solutions'
    },
    {
      pillarNum: '04',
      category: 'BUSINESS AND TAX',
      tagline: 'Smooth Operations. Better Growth.',
      icon: FileText,
      color: 'from-emerald-500/10 to-transparent',
      intro: 'Systematic financial documentation, timely tax returns, and cross-border paperwork that prevent penalties and preserve tax credits.',
      services: [
        { name: 'GST Filing (GSTR-1 & 3B)', desc: 'Monthly or quarterly return preparation, sales vs purchase reconciliation, and ITC optimization.' },
        { name: 'LUT (Letter of Undertaking)', desc: 'Filing statutory LUT on the GST portal enabling exporters to supply goods or services without paying IGST.' },
        { name: 'Import-Export Documentation', desc: 'Commercial invoices, packing lists, DGFT statutory declarations, and export compliance verification.' },
        { name: 'Business Compliance', desc: 'Periodic audits of statutory records, renewals, and regulatory filings to maintain spotless corporate health.' }
      ],
      link: '/compliance-documentation'
    },
    {
      pillarNum: '05',
      category: 'SPECIALIZED SERVICES',
      tagline: 'For Unique Business Needs.',
      icon: Building2,
      color: 'from-purple-500/10 to-transparent',
      intro: 'Tailored regulatory coordination for specialized industries, proprietary registrations, and custom commercial documentation.',
      services: [
        { name: 'HUID / Hallmarking', desc: 'Bureau of Indian Standards (BIS) Hallmarking Unique ID registration and compliance for precious metal jewellers.' },
        { name: 'Food Licenses (State & Central)', desc: 'Advanced manufacturing food safety compliance dossiers and liaison for high-volume commercial kitchens.' },
        { name: 'Import-Export Services', desc: 'Specialized port liaison paperwork, customs categorization, and foreign exchange compliance guidance.' },
        { name: 'Other Business Documentation', desc: 'Partnership agreements, commercial lease declarations, vendor confidentiality deeds, and statutory affidavits.' }
      ],
      link: '/compliance-documentation'
    }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191917] border border-[#B7A47A]/30 text-xs tracking-wider uppercase text-[#B7A47A]">
            <span>Official Brochure Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F4F0E6] leading-tight">
            Complete Business Services & Growth Solutions.
          </h1>
          <p className="text-base sm:text-lg text-[#F4F0E6]/80 font-light leading-relaxed">
            Organized across five disciplined pillars, our services provide complete legal and operational backing for your enterprise from inception to market leadership.
          </p>
        </div>
      </section>

      {/* 5 Pillars Deep-Dive */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={pillar.pillarNum}
              className="rounded-3xl bg-[#191917] border border-[#B7A47A]/20 p-8 sm:p-12 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono font-bold text-[#B7A47A]">
                      {pillar.pillarNum}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#B7A47A] font-semibold">
                      PILLAR {pillar.pillarNum}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4F0E6]">
                    {pillar.category}
                  </h2>

                  <div className="text-sm font-medium text-[#B7A47A] italic">
                    "{pillar.tagline}"
                  </div>

                  <p className="text-sm text-[#F4F0E6]/75 font-light leading-relaxed">
                    {pillar.intro}
                  </p>

                  <div className="pt-4">
                    <Link 
                      to={pillar.link}
                      className="btn-gold text-xs py-2.5 px-5 tracking-wider uppercase"
                    >
                      <span>Explore Pillar Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillar.services.map((svc) => (
                    <div 
                      key={svc.name}
                      className="p-4 rounded-xl bg-[#111110] border border-[#B7A47A]/15 hover:border-[#B7A47A]/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Check className="w-4 h-4 text-[#B7A47A] shrink-0" />
                        <h4 className="text-sm font-serif font-semibold text-[#F4F0E6]">
                          {svc.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#F4F0E6]/65 leading-relaxed font-light pl-6">
                        {svc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#191917] border border-[#B7A47A]/30 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif font-bold text-[#F4F0E6]">
            Need a Customized Service Combination?
          </h2>
          <p className="text-sm text-[#F4F0E6]/75 max-w-xl mx-auto font-light leading-relaxed">
            Most businesses combine registrations (GST, FSSAI, Shop Act) with website development and local SEO. Let us tailor a structured package for your launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold text-xs py-3 px-6 tracking-wider uppercase">
              <span>Request Custom Advisory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href="tel:8554901641" className="btn-outline text-xs py-3 px-6 tracking-wider uppercase">
              <span>Call +91 8554901641</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
